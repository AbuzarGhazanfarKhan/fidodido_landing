import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const calculateTimeLeft = () => {
    // Get the current date
    const now = new Date();

    // Set the target date to 7 PM EST on 7th December 2023
    const targetDate = new Date('December 7, 2023 19:00:00 EST');

    // Get the difference between the target date and the current date (in seconds)
    const differenceInSeconds = Math.floor((targetDate - now) / 1000);

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(differenceInSeconds / (60 * 60 * 24));
    const hours = Math.floor((differenceInSeconds / (60 * 60)) % 24) + days * 24; // Convert days to hours
    const minutes = Math.floor((differenceInSeconds / 60) % 60);
    const seconds = differenceInSeconds % 60;

    return {
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update the timer every second
    const timerId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (newTimeLeft.hours <= 0 && newTimeLeft.minutes <= 0 && newTimeLeft.seconds <= 0) {
        clearInterval(timerId);
      }
    }, 1000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []);

  // If the time left is less than or equal to 0, render "Phase II 
// Cooking"
  if (timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
    return <div>START JOURNEY</div>;
  }

  // Otherwise, render the countdown timer
  return <div>{timeLeft.hours} h: {timeLeft.minutes} m: {timeLeft.seconds} s </div>;
}

export default CountdownTimer;
