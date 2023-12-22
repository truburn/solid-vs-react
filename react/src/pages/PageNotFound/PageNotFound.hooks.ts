import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

export function useRedirectToHome(seconds: number) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<number>(seconds);

  useEffect(() => {
    const target = DateTime.now().plus({ seconds });
    const interval = setInterval(() => {
      const current = DateTime.now();
      const diffInSecs = target.diff(current, "seconds");
      const remaining = Math.round(diffInSecs.seconds);

      if (remaining < 0) navigate("/");

      setTimeLeft(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return timeLeft;
}
