import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirectToHome(seconds: number) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  const target = useMemo<number>(() => {
    const current = new Date();
    const currentParsed = Date.parse(current.toString());
    const millisecs = seconds * 1000;
    return currentParsed + millisecs;
  }, [seconds]);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const currentParsed = Date.parse(current.toString());
      const secsLeft = Math.round((target - currentParsed) / 1000);

      if (secsLeft === 0) navigate("/");

      setTimeLeft(secsLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}
