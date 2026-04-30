"use client";

import { useEffect, useMemo, useState } from "react";

type HeroCountdownProps = {
  targetDateTime: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const units = [
  ["days", "Dias"],
  ["hours", "Horas"],
  ["minutes", "Minutos"],
  ["seconds", "Segundos"]
] as const;

function getTimeLeft(target: number): TimeLeft {
  const distance = Math.max(0, target - Date.now());
  const days = Math.floor(distance / 86_400_000);
  const hours = Math.floor((distance % 86_400_000) / 3_600_000);
  const minutes = Math.floor((distance % 3_600_000) / 60_000);
  const seconds = Math.floor((distance % 60_000) / 1000);

  return { days, hours, minutes, seconds };
}

function formatUnit(value: number) {
  return String(value).padStart(2, "0");
}

export function HeroCountdown({ targetDateTime }: HeroCountdownProps) {
  const target = useMemo(() => new Date(targetDateTime).getTime(), [targetDateTime]);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <div className="relative overflow-hidden border border-rosegold/45 bg-white/82 shadow-soft backdrop-blur-md">
      <div className="absolute inset-y-0 left-0 w-4 bg-[repeating-linear-gradient(180deg,#1f3d36_0_8px,transparent_8px_15px)] opacity-90 sm:w-5" />
      <div className="px-3 py-4 pl-7 sm:px-7 sm:pl-10 short-hero:py-3">
        <p className="text-center font-body text-[10px] font-bold uppercase tracking-[0.12em] text-ink/78 sm:text-[11px] short-hero:text-[10px]">
          O grupo VIP pode fechar em:
        </p>

        <div className="mt-3 grid grid-cols-4 gap-0 text-center sm:gap-2 short-hero:mt-2">
          {units.map(([key, label]) => (
            <div key={key}>
              <p className="font-display text-2xl leading-none text-forest sm:text-3xl short-hero:text-2xl">
                {formatUnit(timeLeft[key])}
              </p>
              <p className="mt-1 font-body text-[9px] font-semibold text-ink/76 sm:text-[11px] short-hero:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
