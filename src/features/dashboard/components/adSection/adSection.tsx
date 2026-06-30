import { useState, useEffect, useCallback } from "react";
import Button from "../../../../components/button";

export default function AdSection({ targetDate }: { targetDate: Date }) {
  const calculate = useCallback(() => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());
    return {
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [targetDate]);

  const [time, setTime] = useState(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate());
    }, 1000);
    return () => clearInterval(interval);
  }, [calculate]);

  const units = [
    { label: "Hours", value: time.hours },
    { label: "Days", value: time.days },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="bg-black rounded-md p-6 md:p-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 overflow-hidden">
      <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 md:gap-6 max-w-md">
        <div className="text-[#00FF66] font-medium text-sm md:text-base">
          Categories
        </div>

        <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
          Enhance Your
          <br />
          Music Experience
        </h2>

        <div className="flex gap-2 sm:gap-4">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center justify-center bg-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0"
            >
              <span className="text-xs sm:text-sm font-semibold leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[8px] sm:text-[10px] text-gray-500 leading-none mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <Button
            size="md"
            className="bg-[#00FF66] hover:bg-[#00e65c] text-black"
          >
            Buy Now!
          </Button>
        </div>
      </div>

      <div className="relative w-40 sm:w-56 md:w-auto md:max-w-md shrink-0 flex justify-center items-center">
        <div className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-md md:h-112 rounded-full bg-radial from-white/90 via-white/40 to-transparent blur-3xl" />
        <img
          src="/boombox.png"
          alt="boombox speaker"
          className="w-full object-contain z-30"
        />
      </div>
    </div>
  );
}