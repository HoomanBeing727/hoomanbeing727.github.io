import { about } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-body">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="about-now">
            <span className="mono-label">Currently:</span>
            Final-year project in healthcare wearables and developing an innovative biological education platform.
          </p>
        </div>
      </div>
    </section>
  );
}
