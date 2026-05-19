import { useEffect, useState } from "react";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { InfoCards } from "./components/InfoCards.jsx";
import { Rates } from "./components/Rates.jsx";
import { Policies } from "./components/Policies.jsx";
import { GalleryStrip } from "./components/GalleryStrip.jsx";
import { Contact } from "./components/Contact.jsx";
import { MemberAccess } from "./components/MemberAccess.jsx";
import { siteData } from "./data/siteData.js";

const STORAGE_KEY = "ogc-member-session";

export default function App() {
  const [member, setMember] = useState(null);

  useEffect(() => {
    const storedSession = window.localStorage.getItem(STORAGE_KEY);
    if (storedSession) {
      setMember(JSON.parse(storedSession));
    }
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

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header club={siteData.club} member={member} onLogout={handleLogout} />
      <main id="contenido">
        <Hero club={siteData.club} booking={siteData.booking} />
        <InfoCards items={siteData.visitors} />
        <Rates rates={siteData.rates} />
        <Policies items={siteData.policies} />
        <GalleryStrip images={siteData.gallery} />
        <MemberAccess member={member} memberArea={siteData.memberArea} onLogin={handleLogin} />
        <Contact booking={siteData.booking} />
      </main>
      <footer className="footer">
        <p>{siteData.club.name}</p>
        <p>React editable con acceso de socios preparado para backend real.</p>
      </footer>
    </>
  );
}
