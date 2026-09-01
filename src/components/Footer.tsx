import { useRef, useState } from "react";
import type { ElementType } from "react";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
} from "@phosphor-icons/react";
import { contact, type ContactIcon } from "../data/content";

const icons: Record<ContactIcon, ElementType> = {
  github: GithubLogoIcon,
  linkedin: LinkedinLogoIcon,
  email: EnvelopeSimpleIcon,
};

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  async function handleCopy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      window.prompt("Copy your email address:", value);
    }
    setCopied(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2 className="section-title footer-title">{contact.heading}</h2>
        <p className="footer-intro">{contact.intro}</p>
        <ul className="contact-links">
          {contact.links.map((link) => {
            const Icon = icons[link.icon];
            if (link.copy) {
              return (
                <li key={link.label}>
                  <button
                    type="button"
                    className="contact-link"
                    onClick={() => handleCopy(link.copy as string)}
                    aria-live="polite"
                  >
                    <Icon size={18} weight="bold" aria-hidden="true" />
                    {copied ? "Copied" : link.label}
                  </button>
                </li>
              );
            }
            return (
              <li key={link.label}>
                <a
                  className="contact-link"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={18} weight="bold" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="footer-meta">
          © 2026 Wesley Chan.
        </p>
      </div>
    </footer>
  );
}
