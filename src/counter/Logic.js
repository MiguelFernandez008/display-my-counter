import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => ++prev);

  const decrement = () => setCounter((prev) => --prev);

  return {
    counter,
    increment,
    decrement
  };
};
