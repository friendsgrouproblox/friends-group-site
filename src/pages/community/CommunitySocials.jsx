import socials from "../../data/socials";

export default function CommunitySocials() {
  return (
    <div className="socials-wrapper">

      {/* HEADER */}
      <div className="socials-header">

        <div className="socials-label">
          COMMUNITY
        </div>

        <h2>
          Social Links
        </h2>

        <p>
          Official FGR community platforms and external networks.
        </p>

      </div>

      {/* GRID */}
      <div className="community-socials">

        {socials.map((social) => (

          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >

            <img
              src={social.logo}
              alt={social.name}
            />

            <span>{social.name}</span>

          </a>

        ))}

      </div>

    </div>
  );
}