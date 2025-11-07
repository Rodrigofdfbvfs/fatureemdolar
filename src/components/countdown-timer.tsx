"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes }) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const endTime = new Date().getTime() + initialMinutes * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        setTimeLeft(0);
        clearInterval(intervalId);
        return;
      }
      setTimeLeft(distance);
    };

    const intervalId = setInterval(updateTimer, 1000);
    
    updateTimer();

    return () => clearInterval(intervalId);
  }, [initialMinutes]);

  const renderTimeBox = (value: string, label: string) => (
    <div className="text-center">
      <div className="font-headline text-4xl sm:text-6xl font-black text-white bg-gradient-to-br from-white/20 to-white/5 p-3 rounded-xl border border-white/20 shadow-lg w-24 h-24 flex items-center justify-center backdrop-blur-sm">
        {value}
      </div>
      <div className="text-sm text-white/80 mt-2">{label}</div>
    </div>
  );

  if (timeLeft === null) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-4 my-8">
        {renderTimeBox("00", "Minutos")}
        <div className="font-headline text-5xl font-black text-white/50">:</div>
        {renderTimeBox("00", "Segundos")}
      </div>
    );
  }

  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 my-8">
      {renderTimeBox(String(minutes).padStart(2, "0"), "Minutos")}
      <div className="font-headline text-5xl font-black text-white/50">:</div>
      {renderTimeBox(String(seconds).padStart(2, "0"), "Segundos")}
    </div>
  );
};

export default CountdownTimer;
