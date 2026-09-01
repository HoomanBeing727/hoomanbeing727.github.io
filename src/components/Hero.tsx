import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span>{profile.headline[0]}</span>
            {profile.headline.slice(1).map((line) => (
              <span key={line} className="hero-title-accent">
                <br />
                {line}
              </span>
            ))}
          </h1>
          <p className="hero-subtext">{profile.subtext}</p>
          <div className="hero-actions">
            <a className="btn" href="#projects">
              View projects
            </a>
            <a className="btn-ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <aside className="identity-card" aria-label="At a glance">
          <div className="identity-row">
            <span className="identity-label">Education</span>
            <span className="identity-value">
              {profile.education.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </div>
          <div className="identity-row">
            <span className="identity-label">Focus</span>
            <span className="chip-row">
              {profile.focus.map((item) => (
                <span key={item} className="chip chip-dark">
                  {item}
                </span>
              ))}
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
