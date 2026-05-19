import { motion, AnimatePresence } from "framer-motion";

export default function FriendsPanel({
  open,
  onClose,
  user,
  onLogout,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="panel-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="friends-panel"
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="panel-header">
              <h2>Friends ID</h2>
              <button onClick={onClose}>✕</button>
            </div>

            {/* PROFILE */}
            <div className="panel-profile">
              <div className="big-avatar">
                {user?.login?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3>{user?.login}</h3>
                <p>{user?.fid}</p>
              </div>
            </div>

            {/* SETTINGS */}
            <div className="panel-section">
              <h4>Settings</h4>

              <button className="panel-btn">
                Edit Profile
              </button>

              <button className="panel-btn danger" onClick={onLogout}>
                Logout
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}