
export const PHONE_NUMBER = "+919900458648"; 

export const handleCall = () => {
  window.location.href = `tel:${PHONE_NUMBER}`;
};

export const handleWhatsApp = () => {
  const message = encodeURIComponent("I need emergency towing assistance. Here is my location:");
  const url = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
};