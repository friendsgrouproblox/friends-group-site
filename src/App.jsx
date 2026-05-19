import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { liveState } from "./data/live";

import "./styles/global.css";

import LoginModal from "./components/LoginModal";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Live from "./pages/Live";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Community from "./pages/Community";
import CommunityHome from "./pages/community/CommunityHome";
import CommunityFeed from "./pages/community/CommunityFeed";
import CommunitySocials from "./pages/community/CommunitySocials";
import CommunityApplications from "./pages/community/CommunityApplications";
import CommunityChat from "./pages/community/CommunityChat";
import LiveCapsule from "./components/LiveCapsule";

export default function App() {
  const [user, setUser] = useState(null);
const [liveStatus, setLiveStatus] = useState(
  liveState.status
);

const liveDate = new Date(
  liveState.startTime
);

useEffect(() => {
  const updateLive = () => {
    const now = new Date();

    const start = new Date(
      liveState.startTime
    );

    const end = liveState.endTime
      ? new Date(liveState.endTime)
      : null;

    // FULL OFFLINE
    if (liveState.status === "offline") {
      setLiveStatus("offline");
      return;
    }

    // TIME BEFORE STREAM
    const diff = start - now;

    // SHOW ONLY 30 MIN BEFORE
    const thirtyMinutes =
      30 * 60 * 1000;

    if (
      now < start &&
      diff <= thirtyMinutes
    ) {
      setLiveStatus("countdown");
      return;
    }

    // TOO EARLY = HIDE
    if (now < start) {
      setLiveStatus("offline");
      return;
    }

    // LIVE
    if (
      now >= start &&
      (!end || now < end)
    ) {
      setLiveStatus("live");
      return;
    }

    // STREAM ENDED
    if (end && now >= end) {
      setLiveStatus("offline");
    }
  };

  updateLive();

  const interval = setInterval(
    updateLive,
    1000
  );

  return () => clearInterval(interval);
}, []);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const saved = localStorage.getItem("fgr_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (u) => {
    setUser(u);
    localStorage.setItem("fgr_user", JSON.stringify(u));
    setLoginOpen(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fgr_user");
    setProfileOpen(false);
  };

  const openEdit = () => {
  setEditOpen(true);
 };

  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="background-layer">
        <div className="background-blur background-purple" />
        <div className="background-blur background-pink" />
        <div className="background-blur background-blue" />
      </div>

      {/* NAVBAR */}
      <Navbar
       user={user}
       onOpenLogin={() => setLoginOpen(true)}
       onOpenEdit={() => setEditOpen(true)}
       onLogout={logout}
      />

      {/* LOGIN */}
      <LoginModal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={handleLogin}
      />

      {/* LIVE CAPSULA */}
      {liveStatus !== "offline" && (
  <LiveCapsule
    status={liveStatus}
    nextDate={liveDate}
  />
)}

    

      {/* ROUTES */}
      <main className="page-container">
        <AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community" element={<CommunityHome />} />
          <Route path="/community/feed" element={<CommunityFeed />} />
          <Route path="/community/socials" element={<CommunitySocials />} />
          <Route path="/community/applications" element={<CommunityApplications />} />
          <Route path="/community/chat" element={<CommunityChat />} />
        </Routes>
</AnimatePresence>
      </main>

    </div>
  );
}