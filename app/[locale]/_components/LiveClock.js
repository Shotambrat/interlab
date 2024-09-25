"use client"
import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000); // update time every second

    return () => clearInterval(timer); // cleanup interval on component unmount
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex items-center space-x-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11" stroke="#75B3F1" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#75B3F1" strokeWidth="2" />
      </svg>
      <span className="text-xl font-semibold text-gray-700">{formattedTime}</span>
    </div>
  );
};

export default LiveClock;