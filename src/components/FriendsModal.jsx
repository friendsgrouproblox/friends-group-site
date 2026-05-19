import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { auth } from "../auth/auth";

export default function FriendsModal({
  open,
  onClose,
  onLogin,
}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleLogin() {
    const user = auth(login, password);

    if (!user) {
      setError("Invalid login or password");

      setTimeout(() => {
        setError("");
      }, 2000);

      return;
    }

    onLogin(user);

    onClose();
  }

  return (
    <AnimatePresence>

      {open && (
        <motion.div
          className="modal-backdrop"

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          exit={{
            opacity: 0
          }}
        >

          <motion.div
            className="friends-modal"

            initial={{
              opacity: 0,
              y: 40,
              scale: 0.96
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }}

            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96
            }}

            transition={{
              duration: 0.35
            }}
          >

            <div className="friends-left">

              <div className="friends-kicker">
                FRIENDS ID
              </div>

              <h1>
                Access<br />
                System
              </h1>

              <p>
                Secure access to editing,
                livestream control,
                announcements and events.
              </p>

            </div>

            <div className="friends-right">

              <div className="friends-top">

                <div>
                  <span>
                    LOGIN
                  </span>

                  <h2>
                    Welcome back
                  </h2>
                </div>

                <button
                  className="close-btn"
                  onClick={onClose}
                >
                  ✕
                </button>

              </div>

              <div className="friends-form">

                <input
                  type="text"
                  placeholder="Login or FID"

                  value={login}

                  onChange={(e) =>
                    setLogin(e.target.value)
                  }
                />

                <input
                  type="password"
                  placeholder="Password"

                  value={password}

                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                {error && (
                  <div className="login-error">
                    {error}
                  </div>
                )}

                <button
                  className="login-btn"
                  onClick={handleLogin}
                >
                  Continue
                </button>

              </div>

            </div>

          </motion.div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}