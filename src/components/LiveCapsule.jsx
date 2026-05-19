import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LiveCapsule({
  status,
  nextDate,
}) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (
      status !== "scheduled" &&
      status !== "countdown"
    ) {
      return;
    }

    const updateTimer = () => {
      const now = new Date();
      const diff = nextDate - now;

      if (diff <= 0) {
        setTimeLeft("Starting...");
        return;
      }

      const days = Math.floor(
        diff / 1000 / 60 / 60 / 24
      );

      const hours = Math.floor(
        (diff / 1000 / 60 / 60) % 24
      );

      const mins = Math.floor(
        (diff / 1000 / 60) % 60
      );

      const secs = Math.floor(
        (diff / 1000) % 60
      );

      if (days > 0) {
        setTimeLeft(
          `${days}d ${hours}h`
        );
      } else {
        setTimeLeft(
          `${hours}h ${mins}m ${secs}s`
        );
      }
    };

    updateTimer();

    const interval = setInterval(
      updateTimer,
      1000
    );

    return () => clearInterval(interval);
  }, [status, nextDate]);

  if (status === "offline") {
    return null;
  }

  return (
    <Link
      to="/live"
      className="live-capsule"
    >
      {status === "live" ? (
        <>
          <div className="live-dot" />

          <span>LIVE NOW</span>
        </>
      ) : (
        <>
          <div className="live-next-dot" />

          <div className="live-info">
            <span className="live-next">
              NEXT LIVE
            </span>

            <span className="live-timer">
              {timeLeft}
            </span>
          </div>
        </>
      )}
    </Link>
  );
}