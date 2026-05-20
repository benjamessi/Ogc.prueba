import { useState } from "react";

export function Header({ club, navigation, member, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Principal">
        <a className="brand" href="#" aria-label={`${club.name} inicio`}>
          <span className="brand-mark">OGC</span>
          <span>
            <strong>{club.name}</strong>
            <small>{club.location}</small>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          Menú
        </button>
        <ul className={`menu ${isOpen ? "is-open" : ""}`} id="menu">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className={item.featured ? "nav-cta" : undefined} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          {member ? (
            <li>
              <button className="link-button" type="button" onClick={onLogout}>
                Salir
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}
