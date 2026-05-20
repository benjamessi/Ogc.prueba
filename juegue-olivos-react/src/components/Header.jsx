import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Header({ club, navigation, member, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();

  function closeMenu() {
    setIsOpen(false);
    setOpenGroup(null);
  }

  function getPath(href) {
    return href.split("#")[0];
  }

  function getHash(href) {
    return href.includes("#") ? `#${href.split("#")[1]}` : "";
  }

  function isHrefActive(href) {
    const path = getPath(href);
    return path === "/" ? location.pathname === "/" : location.pathname === path;
  }

  function isChildActive(href) {
    const path = getPath(href);
    const hash = getHash(href);

    if (location.pathname !== path) {
      return false;
    }

    if (!hash) {
      return true;
    }

    return location.hash === hash || (!location.hash && hash === "#clubhouse");
  }

  function isItemActive(item) {
    if (item.children) {
      return item.children.some((child) => isHrefActive(child.href));
    }

    return isHrefActive(item.href);
  }

  function toggleGroup(label) {
    setOpenGroup((current) => (current === label ? null : label));
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
          {navigation.map((item) => {
            if (item.children) {
              const isActive = isItemActive(item);
              const isGroupOpen = openGroup === item.label;

              return (
                <li className={`menu-item menu-group ${isGroupOpen ? "is-open" : ""}`} key={item.label}>
                  <button
                    className={`menu-trigger ${item.featured ? "nav-cta" : ""} ${isActive ? "is-active" : ""}`}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isGroupOpen}
                    onClick={() => toggleGroup(item.label)}
                  >
                    {item.label}
                    <span className="menu-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <ul className="submenu" aria-label={item.label}>
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          className={() => (isChildActive(child.href) ? "is-active" : undefined)}
                          to={child.href}
                          onClick={closeMenu}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li className="menu-item" key={item.href}>
                <NavLink
                  className={({ isActive }) => `${item.featured ? "nav-cta" : ""} ${isActive ? "is-active" : ""}`}
                  end={item.href === "/"}
                  to={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
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
