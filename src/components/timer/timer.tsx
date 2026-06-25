import { useState, useEffect, useCallback } from "react";

interface CountdownProps {
    targetDate: Date;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 mb-1">{label}</span>
            <span className="text-4xl font-bold">{String(value).padStart(2, "0")}</span>
        </div>
    );
}

function Separator() {
    return <span className="text-[#DB4444] text-2xl font-bold pb-1">:</span>;
}

export default function Countdown({ targetDate }: CountdownProps) {
    const calculate = useCallback(() => {
        const diff = Math.max(0, targetDate.getTime() - Date.now());
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculate);

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(calculate()), 1000);
        return () => clearInterval(interval);
    }, [targetDate, calculate]);

    return (
        <div className="flex items-end gap-3">
            <TimeUnit label="Days" value={timeLeft.days} />
            <Separator />
            <TimeUnit label="Hours" value={timeLeft.hours} />
            <Separator />
            <TimeUnit label="Minutes" value={timeLeft.minutes} />
            <Separator />
            <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>
    );
}