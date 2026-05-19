import { useState } from "react";
import applications from "../../data/applications";

export default function CommunityApplications() {
  const [openedApp, setOpenedApp] = useState(null);

  return (
    <>
      <div className="community-block">
        <div className="community-header">
          <h2>Applications</h2>

          <p>
            Official FGR forms & applications.
          </p>
        </div>

        <div className="apps-wrapper">

          {applications.map((app) => (

            <div
              key={app.id}
              className="app-card"
            >

              <div className="app-left">

                <div
                  className={
                    app.pinned
                      ? "app-dot active"
                      : "app-dot"
                  }
                />

                <div>

                  <div className="app-name">
                    {app.name}
                  </div>

                  <div className="app-description">
                    {app.description}
                  </div>

                </div>

              </div>

              <button
                className="app-open"
                onClick={() => setOpenedApp(app)}
              >
                Open
              </button>

            </div>

          ))}

        </div>
      </div>

      {/* FULLSCREEN MODULE */}

      {openedApp && (

        <div className="application-overlay">

          <div className="application-window">

            {/* TOP */}

            <div className="application-top">

              <button
                className="application-back"
                onClick={() => setOpenedApp(null)}
              >
                ← Back
              </button>

            </div>

            {/* APP */}

            <div className="application-content">

              <div className="application-title">
                {openedApp.name}
              </div>

              <div className="application-frame">

                <iframe
                  src={openedApp.url}
                  title={openedApp.name}
                />

              </div>

              <div className="application-footer">
                FGR, INC
              </div>

            </div>

          </div>

        </div>

      )}
    </>
  );
}