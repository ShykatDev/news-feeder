import React, { useEffect, useRef, useState } from "react";

const useClock = () => {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Ref to hold the interval ID for updating the time
  const intervalRef = useRef(null);

  // Memoized function to format the date
  const formatDate = React.useMemo(() => {
    return (date) =>
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }, []);

  // Memoized function to format the time
  const formatTime = React.useMemo(() => {
    return (date) =>
      date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
  }, []);

  // Effect to update the time every second
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);

  // Return the current time and formatted date and time
  return {
    currentTime,
    formattedDate: formatDate(currentTime),
    formattedTime: formatTime(currentTime),
  };
};

export default useClock;
