import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useHeaderScroll } from "../hooks/useHeaderScroll.js";

const HOVER_GRACE = 320;

export function Header({ club, navigation, member, onLogout, language, onLanguageChange, labels }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [isOverHomeCover, setIsOverHomeCover] = useState(false);
  const { isPinned, isScrolled } = useHeaderScroll({ isMenuOpen: isOpen });
  const closeTimerRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setOpenGroup(null);
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    function updateHeaderState() {
      const cover = document.querySelector(".home-cover");
      setIsOverHomeCover(Boolean(isHome && cover && cover.getBoundingClientRect().bottom > 96));
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [isHome, location.pathname]);

  useEffect(() => {
    function closeFloatingMenus() {
      setOpenGroup(null);
    }

    function handlePointerDown(event) {
      if (!event.target.closest(".site-header")) {
        closeMenu();
      }
    }

    window.addEventListener("scroll", closeFloatingMenus, { passive: true });
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("scroll", closeFloatingMenus);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  function closeMenu() {
    window.clearTimeout(closeTimerRef.current);
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

  function canHover() {
    return window.matchMedia("(hover: hover)").matches;
  }

  /*
   * El submenú flota con un hueco respecto del trigger: sin período de gracia se
   * cierra apenas el puntero cruza ese espacio. El timer también permite pasar de
   * "Club" a "Golf" en diagonal sin que parpadee.
   */
  function handleGroupEnter(label) {
    if (!canHover()) {
      return;
    }
    window.clearTimeout(closeTimerRef.current);
    setOpenGroup(label);
  }

  function handleGroupLeave() {
    if (!canHover()) {
      return;
    }
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenGroup(null), HOVER_GRACE);
  }

  function handleLogoutClick() {
    onLogout();
    closeMenu();
  }

  return (
    <header
      className={[
        "site-header",
        isHome && isOverHomeCover && !isOpen ? "is-transparent" : "",
        isPinned ? "is-pinned" : "is-unpinned",
        isScrolled ? "is-scrolled" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="nav" aria-label={labels.primaryNav}>
        <Link className="brand" to="/" aria-label={labels.homeAria}>
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
          aria-label={isOpen ? labels.closeMenu : labels.openMenu}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <ul className={`menu ${isOpen ? "is-open" : ""}`} id="menu">
          {navigation.map((item) => {
            if (item.children) {
              const isActive = isItemActive(item);
              const isGroupOpen = openGroup === item.label;

              return (
                <li
                  className={`menu-item menu-group ${isGroupOpen ? "is-open" : ""}`}
                  key={item.label}
                  onMouseEnter={() => handleGroupEnter(item.label)}
                  onMouseLeave={handleGroupLeave}
                >
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
                          className={() => (isChildActive(child.href) ? "is-current-child" : undefined)}
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
                {member && item.href === "/socios" ? (
                  <button className="link-button" type="button" onClick={handleLogoutClick}>
                    {labels.logout}
                  </button>
                ) : (
                  <NavLink
                    className={({ isActive }) => `${item.featured ? "nav-cta" : ""} ${isActive ? "is-active" : ""}`}
                    end={item.href === "/"}
                    to={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            );
          })}
          <li className="menu-item menu-reserve">
            <NavLink className="nav-reserve" to="/reservaciones" onClick={closeMenu}>
              {labels.reserve}
            </NavLink>
          </li>
          <li className="language-switch" aria-label={labels.languageLabel}>
            {["es", "en"].map((option) => (
              <button
                className={language === option ? "is-active" : ""}
                type="button"
                key={option}
                aria-pressed={language === option}
                onClick={() => onLanguageChange(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
