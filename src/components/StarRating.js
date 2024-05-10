import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsStar, BsStarFill } from 'react-icons/bs';

const StarRating = () => {
  const [rating, setRating] = useState(0); // Initial rating is 0

  const handleClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <h2 className='login-title'>Rate This Game:</h2>
      {[...Array(5)].map((_, index) => (
        <Button
          key={index}
          onClick={() => handleClick(index + 1)}
          variant="outline-light"
          className='m-2'
        >
          {index < rating ? <BsStarFill /> : <BsStar />}
        </Button>
      ))}
      <p className='title-font'>You rated this game {rating} stars</p>
    </div>
  );
};

export default StarRating;