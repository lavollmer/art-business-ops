import React from 'react';

const DemoBlock = ({ title, text, imageUrl, buttonText }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={imageUrl} alt={title} style={{ width: '200px', height: '200px' }} />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default DemoBlock;