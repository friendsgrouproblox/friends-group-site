import PageTransition from "../components/PageTransition";
export default function Home() {
  return (

    <PageTransition>

      <div className="home-landing">

        {/* 1. HERO BRAND */}
        <section className="hero-big">

          <div className="hero-title">
            FRIENDS GROUP ROBLOX
          </div>

          <p className="hero-subtitle">
            A creative entertainment group built in Roblox.
            We organize live shows, concerts and digital events for the community.
          </p>

          <div className="hero-scroll">
            ↓ Scroll to explore
          </div>

        </section>

        {/* 2. ABOUT SECTION */}
        <section className="about-section">

          <div className="about-window">

            {/* LEFT IMAGE BLOCK */}
            <div className="about-image">
              <div className="image-placeholder">
                IMAGE
              </div>
            </div>

            {/* RIGHT TEXT BLOCK */}
            <div className="about-text">

              <h2>About us</h2>

              <p>
                Friends Group Roblox is a creative team focused on building
                immersive entertainment experiences inside Roblox.
                We design concerts, live performances and interactive shows
                where players become part of the event.
              </p>

              <p>
                Our goal is to combine music, performance and digital creativity
                into one shared space where community matters the most.
              </p>

            </div>

          </div>

        </section>

        {/* 3. PROJECTS */}
        <section className="projects-section">

          <h2 className="section-title">
            Our projects
          </h2>

          <div className="projects-grid">

            <div className="project-card">
              <div className="project-img"></div>
              <h3>Friendsvision 2026</h3>
              <p>Roblox • Friends Arena</p>

              <a
                href="https://www.roblox.com/games/0000000000"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                ▶ Play in Roblox
              </a>
            </div>

            <div className="project-card">
              <div className="project-img"></div>
              <h3>Милана стар "10 лет на сцене"</h3>
              <p>Roblox</p>

              <a
                href="https://www.roblox.com/games/0000000000"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                ▶ Play in Roblox
              </a>
            </div>

            <div className="project-card">
              <div className="project-img"></div>
              <h3>VK FEST 2026</h3>
              <p>Roblox • Лужники</p>

              <a
                href="https://www.roblox.com/games/0000000000"
                target="_blank"
                rel="noreferrer"
                className="project-btn"
              >
                ▶ Play in Roblox
              </a>
            </div>

          </div>

        </section>

      </div>

    </PageTransition>

  );
}