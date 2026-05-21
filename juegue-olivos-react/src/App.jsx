import { useEffect, useState } from "react";
import { Navigate, NavLink, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { ClubhousePage } from "./pages/ClubhousePage.jsx";
import { ClubInfoPage } from "./pages/ClubInfoPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { CoursePage } from "./pages/CoursePage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MembersPage } from "./pages/MembersPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { RatesPage } from "./pages/RatesPage.jsx";
import { ReciprocityPage } from "./pages/ReciprocityPage.jsx";
import { ReservationsPage } from "./pages/ReservationsPage.jsx";
import { siteData } from "./data/siteData.js";

const STORAGE_KEY = "ogc-member-session";
const quickActions = [
  { label: "Inicio", path: "/" },
  { label: "Reservar", path: "/reservaciones" },
  { label: "Club", path: "/clubhouse" },
  { label: "Socios", path: "/socios" }
];

export default function App() {
  const [member, setMember] = useState(null);
  const location = useLocation();
  const currentPath = location.pathname;
  const quickActionIndex = quickActions.findIndex((action) => action.path === currentPath);
  const hasQuickAction = quickActionIndex >= 0;

  useEffect(() => {
    const storedSession = window.localStorage.getItem(STORAGE_KEY);
    if (storedSession) {
      setMember(JSON.parse(storedSession));
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  function handleLogin(credentials) {
    const emailMatches = credentials.email.trim().toLowerCase() === siteData.memberArea.demoEmail;
    const passwordMatches = credentials.password === siteData.memberArea.demoPassword;

    if (!emailMatches || !passwordMatches) {
      return {
        ok: false,
        message: "Los datos ingresados no son correctos. Verificá tu email y contraseña."
      };
    }

    const nextMember = {
      email: credentials.email.trim().toLowerCase(),
      name: "Socio OGC"
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextMember));
    setMember(nextMember);
    return { ok: true };
  }

  function handleLogout() {
    window.localStorage.removeItem(STORAGE_KEY);
    setMember(null);
  }

  function handleSkipLink(event) {
    event.preventDefault();
    document.getElementById("contenido")?.scrollIntoView();
  }

  return (
    <>
      <a className="skip-link" href="#contenido" onClick={handleSkipLink}>
        Saltar al contenido
      </a>
      <Header
        club={siteData.club}
        navigation={siteData.navigation}
        member={member}
        onLogout={handleLogout}
      />
      <main id="contenido" className={`page-shell ${currentPath === "/" ? "is-home" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage siteData={siteData} />} />
          <Route path="/info-club" element={<Navigate to="/historia-club" replace />} />
          <Route path="/historia-club" element={<ClubInfoPage />} />
          <Route path="/clubhouse" element={<ClubhousePage club={siteData.club} clubhouse={siteData.clubhouse} />} />
          <Route path="/reciprocidad" element={<ReciprocityPage policies={siteData.policies} />} />
          <Route path="/cancha" element={<CoursePage course={siteData.course} />} />
          <Route path="/reservaciones" element={<ReservationsPage reservation={siteData.reservation} member={member} />} />
          <Route path="/tarifas" element={<RatesPage rates={siteData.rates} booking={siteData.booking} />} />
          <Route path="/socios" element={<MembersPage member={member} memberArea={siteData.memberArea} onLogin={handleLogin} />} />
          <Route path="/contacto" element={<ContactPage booking={siteData.booking} club={siteData.club} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <nav
        className={`mobile-quick-actions ${hasQuickAction ? "" : "is-idle"}`}
        aria-label="Acciones rápidas para celular"
        style={{ "--active-index": Math.max(quickActionIndex, 0) }}
      >
        <span className="liquid-indicator" aria-hidden="true" />
        {quickActions.map((action) => (
          <NavLink
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            end={action.path === "/"}
            to={action.path}
            key={action.path}
          >
            {action.label}
          </NavLink>
        ))}
      </nav>
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src={siteData.club.logo} alt="" />
            <div>
              <span>{siteData.club.name}</span>
              <p>"La Augusta de Argentina"</p>
            </div>
          </div>
          <address className="footer-contact" aria-label="Datos de contacto">
            <span>{siteData.club.shortAddress}</span>
            <a href={siteData.booking.phoneHref}>{siteData.booking.phoneDisplay}</a>
            <a href={`mailto:${siteData.club.email}`}>{siteData.club.email}</a>
          </address>
        </div>
        <p className="footer-legal">© Olivos Golf Club. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
