import { navLinks, profile } from "../data/content";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          {profile.name}
        </a>
        <nav aria-label="Main">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
