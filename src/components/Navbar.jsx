import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Navbar({
  user,
  onOpenLogin,
  onOpenEdit,
  onLogout,
}) {

  const [profileMenu, setProfileMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Live", path: "/live" },
    { name: "Events", path: "/events" },
    { name: "Media", path: "/media" },
    { name: "Community", path: "/community" },
  ];



  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">FGR</div>

      {/* NAVIGATION */}
      <div className="pill-nav">

        {links.map((link) => (

          link.action === "edit" ? (

            <button
              key="edit"
              className="pill"
              onClick={onOpenEdit}
            >
              Edit
            </button>

          ) : (

  <NavLink
  key={link.path}
  to={link.path}
  className="pill"
>
  {({ isActive }) => (
    <>
      {isActive && (
        <motion.div
          layoutId="navbar-pill"
          className="pill-active-bg"

          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}

      <span
        className={
          isActive
            ? "pill-text active"
            : "pill-text"
        }
      >
        {link.name}
      </span>
    </>
  )}
</NavLink>

          )

        ))}

      </div>

      {/* PROFILE */}
      {user ? (

        <div className="profile-wrapper">

          {/* AVATAR */}
          <div
            className="profile-avatar-only"
            onClick={() =>
              setProfileMenu(!profileMenu)
            }
          >
            {user.login?.charAt(0).toUpperCase()}
          </div>

          {/* DROPDOWN */}
          {profileMenu && (

            <div className="profile-dropdown">

              <div className="profile-dropdown-top">

                <div className="dropdown-avatar">
                  {user.login?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <div className="dropdown-name">
                    {user.login}
                  </div>

                  <div className="dropdown-fid">
                    {user.fid}
                  </div>
                </div>

              </div>

              <div className="dropdown-line" />

              <button className="dropdown-btn">
                Profile
              </button>

              <button className="dropdown-btn">
                Settings
              </button>

              <button
                className="dropdown-btn logout"
                onClick={onLogout}
              >
                Logout
              </button>

            </div>

          )}

        </div>

      ) : (

        <button
          className="friends-button"
          onClick={onOpenLogin}
        >
          Friends ID
        </button>

      )}

    </nav>
  );
}