import { useEffect } from 'react';

const useSecurity = () => {
  useEffect(() => {
    // Helper functions to toggle the CSS class
    const protect = () => document.body.classList.add('content-protected');
    const unprotect = () => document.body.classList.remove('content-protected');

    // 1. Blackout on Visibility & Blur
    // Protects content when switching apps or pulling down mobile notification shade
    const handleVisibilityChange = () => document.hidden ? protect() : unprotect();
    const handleBlur = () => protect();
    const handleFocus = () => unprotect();

    // 2. Disable Right-Click (Prevents manual "Inspect" selection)
    const handleContextMenu = (e) => e.preventDefault();

    // 3. Block Keyboard Shortcuts (including Ctrl+Shift+I)
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.key === 'I')) || // Inspector
        (e.ctrlKey && e.shiftKey && (e.keyCode === 74 || e.key === 'J')) || // Console
        (e.ctrlKey && e.shiftKey && (e.keyCode === 67 || e.key === 'C')) || // Element Selector
        (e.ctrlKey && (e.keyCode === 85 || e.key === 'u')) || // View Source
        (e.ctrlKey && (e.key === 's' || e.key === 'p')) // Save and Print
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Anti-DevTools "Trap" (Blocks manual menu access)
    // Measures the time execution takes; if it 'pauses' due to debugger, it triggers protection.
    const devToolsChecker = setInterval(() => {
      const startTime = performance.now();
      debugger; 
      const endTime = performance.now();
      
      if (endTime - startTime > 100) {
        // If DevTools is open, we clear the body and show an alert
        document.body.innerHTML = `
          <div style='background:black; color:white; height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; font-family:sans-serif;'>
            <div>
              <h1>Security Alert</h1>
              <p>Developer Tools are restricted on this platform.</p>
              <button onclick="window.location.reload()" style="padding:10px 20px; cursor:pointer;">Reload Page</button>
            </div>
          </div>`;
      }
    }, 1000);

    // 5. Print Protection (Prevents "Save as PDF" theft)
    const beforePrint = () => protect();
    const afterPrint = () => unprotect();

    // Attach all Listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeprint", beforePrint);
    window.addEventListener("afterprint", afterPrint);

    return () => {
      // Clean up on unmount
      clearInterval(devToolsChecker);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeprint", beforePrint);
      window.removeEventListener("afterprint", afterPrint);
    };
  }, []);
};

export default useSecurity;