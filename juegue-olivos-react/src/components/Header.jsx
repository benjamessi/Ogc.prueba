import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header({ club, navigation, member, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Principal">
        <Link className="brand" to="/" aria-label={`${club.name} inicio`}>
          <span className="brand-mark">
            <img src={club.logo} alt="" />
          </span>
          <span>
            <strong>{club.name}</strong>
            <small>{club.location}</small>
          </span>
        </Link>
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
              <NavLink
                className={({ isActive }) => `${item.featured ? "nav-cta" : ""} ${isActive ? "is-active" : ""}`}
                end={item.href === "/"}
                to={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
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
