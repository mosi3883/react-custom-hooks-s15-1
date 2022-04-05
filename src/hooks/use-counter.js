import { useState, useEffect } from 'react';
const useCounter = (steps, init = 0) => {
  const [counter, setCounter] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + steps);
    }, 1000);

    return () => clearInterval(interval);
  }, [steps]);

  return counter;
};

export default useCounter;
