import React from 'react';

const Image = ({ image, handleImageClick }) => {
  return (
    <div>
      <img
        src={image}
        style={{ border: '2px solid black' }}
        alt="cat"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default Image;
