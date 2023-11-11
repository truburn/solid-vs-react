import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useRedirectToHome(seconds: number) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  const target = new Date();
  const targetSeconds = target.getSeconds();
  target.setSeconds(targetSeconds + seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date().getSeconds();
      const newTime = target.getSeconds() - current;

      if (newTime === 0) navigate("/");

      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
