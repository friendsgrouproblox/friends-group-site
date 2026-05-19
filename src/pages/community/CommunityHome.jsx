import { Link } from "react-router-dom";

export default function CommunityHome() {

  return (

    <div className="community-home">

      <div className="community-nav-grid">

        <Link
          to="/community/feed"
          className="community-nav-card"
        >

          <div className="community-nav-label">
            COMMUNITY
          </div>

          <h2>Community Feed</h2>

          <p>
            Global FGR posts,
            updates and reactions.
          </p>

        </Link>

        <Link
          to="/community/socials"
          className="community-nav-card"
        >

          <div className="community-nav-label">
            NETWORK
          </div>

          <h2>Social Hub</h2>

          <p>
            Discord, TikTok,
            YouTube and socials.
          </p>

        </Link>

        <Link
          to="/community/applications"
          className="community-nav-card"
        >

          <div className="community-nav-label">
            CAREERS
          </div>

          <h2>Applications</h2>

          <p>
            Join FGR teams,
            creators and partnerships.
          </p>

        </Link>

      </div>

    </div>

  );
}