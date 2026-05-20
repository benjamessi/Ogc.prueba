import { GalleryStrip } from "../components/GalleryStrip.jsx";
import { InfoCards } from "../components/InfoCards.jsx";

export function ClubInfoPage({ siteData }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Información del club</p>
          <h1>Conocé el Olivos antes de jugar.</h1>
        </div>
        <p>
          Esta pantalla concentra la información institucional, visitantes, recorridos y galería. Es el lugar correcto
          para expandir historia, servicios, etiqueta y reciprocidad.
        </p>
      </section>
      <InfoCards clubInfo={siteData.clubInfo} visitorInfo={siteData.visitors} />
      <GalleryStrip images={siteData.gallery} />
    </>
  );
}
