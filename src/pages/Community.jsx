import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

export default function Community() {
  return (

    <PageTransition>

      <div className="community-hub">

        <div className="community-hero">
          <div className="community-label">
            FGR COMMUNITY
          </div>

          <h1>
            Community Hub
          </h1>

          <p>
            Social systems, applications,
            reactions and realtime community.
          </p>
        </div>

        <div className="community-grid">

          <Link
            to="/community/socials"
            className="community-card"
          >
            <h2>Socials</h2>

            <p>
              All official FGR social networks.
            </p>
          </Link>

          <Link
            to="/community/applications"
            className="community-card"
          >
            <h2>Applications</h2>

            <p>
              Forms, recruitment and applications.
            </p>
          </Link>

          <Link
            to="/community/chat"
            className="community-card"
          >
            <h2>Community Chat</h2>

            <p>
              Posts, reactions and discussions.
            </p>
          </Link>

        </div>

      </div>

    </PageTransition>

  );
}