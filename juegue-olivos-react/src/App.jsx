import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { ClubInfoPage } from "./pages/ClubInfoPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MembersPage } from "./pages/MembersPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { RatesPage } from "./pages/RatesPage.jsx";
import { ReservationsPage } from "./pages/ReservationsPage.jsx";
import { siteData } from "./data/siteData.js";

const STORAGE_KEY = "ogc-member-session";

function getCurrentPath() {
  const hashPath = window.location.hash.replace(/^#/, "");
  return hashPath || "/";
}

export default function App() {
  const [member, setMember] = useState(null);
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    const storedSession = window.localStorage.getItem(STORAGE_KEY);
    if (storedSession) {
      setMember(JSON.parse(storedSession));
    }
  }, []);

  useEffect(() => {
    function syncRoute() {
      setCurrentPath(getCurrentPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  function handleLogin(credentials) {
    const emailMatches = credentials.email.trim().toLowerCase() === siteData.memberArea.demoEmail;
    const passwordMatches = credentials.password === siteData.memberArea.demoPassword;

    if (!emailMatches || !passwordMatches) {
      return {
        ok: false,
        message: "Usá socio@olivos.test y clave olivos para probar la demo."
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

  function renderPage() {
    switch (currentPath) {
      case "/":
        return <HomePage siteData={siteData} />;
      case "/info-club":
        return <ClubInfoPage siteData={siteData} />;
      case "/reservaciones":
        return <ReservationsPage reservation={siteData.reservation} />;
      case "/tarifas":
        return <RatesPage rates={siteData.rates} policies={siteData.policies} />;
      case "/socios":
        return <MembersPage member={member} memberArea={siteData.memberArea} onLogin={handleLogin} />;
      case "/contacto":
        return <ContactPage booking={siteData.booking} />;
      default:
        return <NotFoundPage />;
    }
  }

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header
        club={siteData.club}
        navigation={siteData.navigation}
        member={member}
        onLogout={handleLogout}
        currentPath={currentPath}
      />
      <main id="contenido" className="page-shell">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>{siteData.club.name}</p>
        <p>React editable con páginas separadas y acceso de socios preparado.</p>
      </footer>
    </>
  );
}
