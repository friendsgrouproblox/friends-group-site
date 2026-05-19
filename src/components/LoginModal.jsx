import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { users } from "../data/users";

export default function LoginModal({ open, onClose, onLogin }) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (value) => {
    if (!value) return setLogin("");

    if (/^\d+$/.test(value)) {
      setLogin("FID-" + value);
      return;
    }

    setLogin(value);
  };

  const submit = () => {
  const found = users.find((u) => {
    return (
      (u.login.toLowerCase() === login.toLowerCase() ||
        u.fid.toLowerCase() === login.toLowerCase()) &&
      u.password === password
    );
  });

  if (!found) {
    setError(true);
    setTimeout(() => setError(false), 600);
    return;
  }

  const userSession = {
    login: found.login,
    fid: found.fid,
    role: found.role,
    avatar: found.login.charAt(0).toUpperCase(),
  };

  onLogin(userSession);
  onClose();
 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="login-overlay">

          <motion.div className={`login-modal ${error ? "login-shake" : ""}`}>

            <div className="login-top">
              <div>
                <div className="login-label">FRIENDS ID</div>
                <h2>Sign in</h2>
              </div>

              <button className="login-close" onClick={onClose}>✕</button>
            </div>

            <div className="login-form">

              <input
                className={error ? "login-input-error" : ""}
                value={login}
                onChange={(e) => handleLogin(e.target.value)}
                placeholder="Username or FID"
              />

              <input
                type="password"
                className={error ? "login-input-error" : ""}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <button onClick={submit}>
                Enter platform
              </button>

              {error && (
                <div className="login-error-text">
                  Wrong login or password
                </div>
              )}

            </div>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}