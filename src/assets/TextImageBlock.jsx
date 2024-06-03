import React from 'react';

const TextImageBlock = ({ title, text, imageUrl }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <img src={imageUrl} alt={title} style={{ width: '200px', height: '200px' }} />
    </div>
  );
};

export default TextImageBlock;