import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timeoutId = setTimeout(() => {
      // Update the debounced value with the latest input value
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout when the component unmounts or when the value or delay changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  // Return the debounced value
  return debouncedValue;
};

export default useDebounce;
