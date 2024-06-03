import React from 'react'

const TextBlock = ({ title, text }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    );
  };

export default TextBlock