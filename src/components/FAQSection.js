import React from 'react';
import { allFaqs } from '../Utlys/FAQ'; // Adjust path as needed



const FAQSection = ({ pageKey }) => {
  const data = allFaqs[pageKey] || [];

  // Light Theme Styles
 const containerStyle = {
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  padding: '40px 8%',
  backgroundColor: '#ffffff',
  color: '#000000',
  fontFamily: 'Arial, sans-serif',
  boxSizing: 'border-box'
};

const headerStyle = {
  fontSize: '12px',
  color: '#999',
  textTransform: 'uppercase',
  letterSpacing: '1.5px',
  marginBottom: '20px',
  borderBottom: '1px solid #eee',
  paddingBottom: '10px'
};

const itemStyle = {
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px solid #f5f5f5'
};

const questionContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '6px'
};

const questionStyle = {
  fontSize: '13px',
  fontWeight: '700',
  color: '#d32f2f',
  textTransform: 'uppercase',
  lineHeight: '1.3'
};

const answerStyle = {
  fontSize: '13px',
  color: '#1a1a1a',
  lineHeight: '1.6',
  margin: 0,
  paddingLeft: '22px'
};


  // Inline SVG for the Call Icon (Updated to a darker red for white background)
  const CallIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>Frequently Asked Questions: {pageKey}</div>
      {data.map((item, index) => (
        <div key={index} style={itemStyle}>
          <div style={questionContainerStyle}>
            <CallIcon />
            <span style={questionStyle}>{item.question}</span>
          </div>
          <p style={answerStyle}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;