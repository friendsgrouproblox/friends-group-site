import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { liveState } from "../data/live";

function getTimeLeft() {
  const diff = new Date(liveState.startTime) - new Date();

  if (diff <= 0) return null;

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Live() {

  /* =========================================================
     USER PROFILE
  ========================================================= */

  const [profile] = useState({
    username: "Guest",
    role: "user", // user | vip | admin | director
  });

  const canWrite =
    profile.role === "admin" ||
    profile.role === "director";

  /* =========================================================
     LIVE DATA
  ========================================================= */

  const [online, setOnline] = useState(1284);

  const [chat, setChat] = useState([
    {
      user: "Director",
      text: "Broadcast system initialized.",
    },

    {
      user: "VIP",
      text: "Waiting for stream...",
    },

    {
      user: "Viewer",
      text: "This platform looks insane 🔥",
    },
  ]);

  const [input, setInput] = useState("");

  const [timeLeft, setTimeLeft] = useState(
    getTimeLeft()
  );

  /* =========================================================
     STREAM STATUS
  ========================================================= */

  const now = new Date();
  const start = new Date(liveState.startTime);

  let status = "offline";

  if (liveState.status === "live") {
    status = "live";
  }

  else if (liveState.status === "scheduled") {

    if (start > now) {
      status = "countdown";
    }

    else {
      status = "live";
    }
  }

  /* =========================================================
     EFFECTS
  ========================================================= */

  useEffect(() => {

    const timer = setInterval(() => {

      setOnline((v) =>
        v + (Math.random() > 0.5 ? 1 : -1)
      );

      setTimeLeft(getTimeLeft());

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const send = () => {

    if (!canWrite) return;
    if (!input.trim()) return;

    setChat((prev) => [
      {
        user: profile.username,
        text: input,
      },

      ...prev.slice(0, 8),
    ]);

    setInput("");

  };

  /* =========================================================
     COUNTDOWN MODE
  ========================================================= */

  if (status === "countdown") {

    return (

      <div className="countdown-page">

        <div className="countdown-bg" />

        <motion.div
          className="countdown-content"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >

          <div className="countdown-label">
            UPCOMING LIVE EVENT
          </div>

          <h1 className="countdown-title">
            {liveState.title}
          </h1>

          <div className="countdown-timer">

            <div className="time-box">
              <span>{timeLeft?.hours || "00"}</span>
              <small>Hours</small>
            </div>

            <div className="time-box">
              <span>{timeLeft?.minutes || "00"}</span>
              <small>Minutes</small>
            </div>

            <div className="time-box">
              <span>{timeLeft?.seconds || "00"}</span>
              <small>Seconds</small>
            </div>

          </div>

          <p className="countdown-text">
            Stream starts soon.
          </p>

        </motion.div>

      </div>
    );
  }

  /* =========================================================
     OFFLINE MODE
  ========================================================= */

  if (status === "offline") {

    return (

      <div className="offline-page">

        <div className="offline-header">

          <h1>No active streams</h1>

          <p>
            There are currently no live broadcasts.
          </p>

        </div>

        <div className="offline-grid">

          <div className="offline-video">
            <iframe
              src="https://www.youtube.com/embed/cofJwzITTOw"
              title="Video 1"
              allowFullScreen
            />
          </div>

          <div className="offline-video">
            <iframe
              src="https://www.youtube.com/embed/emVroIXhikE"
              title="Video 2"
              allowFullScreen
            />
          </div>

          <div className="offline-video">
            <iframe
              src="https://www.youtube.com/embed/AGa5Givayts"
              title="Video 3"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    );
  }

  /* =========================================================
     LIVE MODE
  ========================================================= */

  return (

    <div className="live-page">

      {/* HEADER */}
      <div className="live-header">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {liveState.title}
        </motion.h1>

        <div className="live-status">
          🔴 LIVE NOW · {online.toLocaleString()} viewers
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="live-grid">

        {/* VIDEO */}
        <motion.div
          className="live-video"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >

          <iframe
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="Live Stream"
            allowFullScreen
          />

        </motion.div>

        {/* RIGHT PANEL */}
        <div className="live-panel">

          {/* SYSTEM */}
          <div className="live-card">

            <h3>System Status</h3>

            <p>
              FGRTUBE stream engine active
            </p>

          </div>

          {/* CHAT */}
          <div className="live-chat">

            {/* MESSAGES */}
            <div className="chat-messages">

              {chat.map((c, i) => (

                <div
                  key={i}
                  className="chat-msg"
                >

                  <b>{c.user}</b>

                  <span>{c.text}</span>

                </div>

              ))}

            </div>

            {/* ONLY ADMINS CAN WRITE */}
            {canWrite && (

              <div className="chat-input">

                <input
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  placeholder="Write message..."
                />

                <button onClick={send}>
                  Send
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}