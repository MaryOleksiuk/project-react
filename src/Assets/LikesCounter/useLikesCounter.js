import { useState } from 'react';

export const useLikesCounter = (initialValue) => {
  const [ counter, setCounter ] = useState(initialValue);

  const increase = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return {
    counter,
    increase
  }
};