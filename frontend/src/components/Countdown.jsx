// frontend/src/components/Countdown.jsx
import React, { useEffect, useState } from 'react';

function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const distance = target - now;

    if (distance <= 0) {
      // Target date passed or reached
      return {
        days: 0, hours: 0, minutes: 0, seconds: 0
      };
    }
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  const { days, hours, minutes, seconds } = timeLeft;

  // Format with leading zeros for hours, minutes, seconds
  const twoDigits = (num) => String(num).padStart(2, '0');

  return (
    <span className="countdown">
      {days > 0 && <span>{days}d </span>}
      {twoDigits(hours)}h : {twoDigits(minutes)}m : {twoDigits(seconds)}s
    </span>
  );
}

export default Countdown;
