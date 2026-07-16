import { Fragment, useMemo, useRef, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

const reciprocityCountries = [
  {
    country: "Argentina",
    clubs: [
      {
        name: "Salta Polo Golf Club",
        city: "Salta",
        address: "Av. Bolivia 2800",
        phone: "+54 0387 439 2001 / 5158 / 3549",
        website: "www.saltagolfclub.com.ar",
        email: "secretaria@saltagolfclub.com.ar"
      },
      {
        name: "Jockey Club Tucumán",
        city: "Tucumán",
        address: "San Martín 451",
        phone: "+54 0381 4215950 / 6501",
        website: "www.jockeyclubtucuman.com"
      },
      {
        name: "Club de Campo Mendoza",
        city: "Guaymallén",
        address: "Elpidio González y Tuyutá s/n, Guaymallén",
        phone: "+54 0261 4315966 / 67 / 68 / 69",
        email: "info@clubdecampomendoza.com"
      }
    ]
  },
  {
    country: "Brasil",
    clubs: [
      {
        name: "São Paulo Golf Club",
        city: "São Paulo",
        address: "Praça Dom Francisco de Souza 540, Barrio Santo Amaro, CEP 04745-050, São Paulo, Brasil",
        phone: "5521-9213",
        website: "www.fpgolfe.com.br",
        email: "spgc@fpgolfe.com.br"
      },
      {
        name: "Itanhangá Golf Club",
        city: "Rio de Janeiro",
        address: "Estrada da Barra da Tijuca 2005, Caixa Postal 37077, Rio de Janeiro",
        phone: "(21) 2494-2507",
        fax: "(21) 2493-4500",
        email: "secretaria@itanhanga.com.br / comunique@itanhanga.com.br"
      },
      {
        name: "Gávea Golf and Country Club",
        city: "Rio de Janeiro",
        email: "gaveagol@unisys.com.br"
      }
    ]
  },
  {
    country: "Colombia",
    clubs: [
      {
        name: "Country Club de Bogotá",
        city: "Bogotá",
        address: "Calle 129 Avenida 15, Apartado Aéreo 51753, Bogotá, Colombia",
        email: "bogotagc@express.net.co"
      },
      {
        name: "San Andrés Golf Club",
        city: "Bogotá",
        address: "A.A. 5998, Santa Fe de Bogotá, D.C.",
        phone: "(0)11 4752 3994",
        email: "sanandres@impsat.net.co"
      }
    ]
  },
  {
    country: "Chile",
    clubs: [
      {
        name: "Club de Golf Los Leones",
        city: "Región Metropolitana",
        address: "Presidente Riesco 3700, Región Metropolitana",
        phone: "(0)2 231 3406",
        email: "clubgolf@entelchile.net"
      },
      {
        name: "Club de Campo Granadilla",
        city: "Viña del Mar",
        address: "Camino a Granadilla s/n, Viña del Mar, Región de Valparaíso",
        phone: "(56 32) 2689249",
        email: "rrpp@granadilla.cl"
      },
      {
        name: "Club de Golf Las Brisas, Santo Domingo",
        city: "Santo Domingo",
        phone: "35 420042",
        email: "cgbrisas@entelchile.net"
      },
      {
        name: "Las Brisas de Chicureo",
        city: "Colina",
        address: "Autopista Los Libertadores Km 15, Colina",
        phone: "+56 2 860 9200",
        website: "www.golfchicureo.cl",
        email: "lasbrisas@golfchicureo.cl"
      }
    ]
  },
  {
    country: "España",
    clubs: [
      {
        name: "Golf La Moraleja",
        city: "Madrid",
        address: "Paseo Marquesa Viuda de Aldama 50, Alcobendas, Madrid, España",
        phone: "+34 91 650 07 00 / +34 91 650 43 31",
        email: "info@golflamoraleja.com"
      },
      {
        name: "Real Club de Golf El Prat",
        city: "Barcelona",
        address: "Plans de Bonvilar 17, 08227 Terrassa, Barcelona, España",
        phone: "+34 937 28 10 00"
      },
      {
        name: "Real Club de Puerta de Hierro",
        city: "Madrid",
        address: "Av. de Miraflores s/n, Madrid, España",
        phone: "+34 91 316 1745"
      }
    ]
  },
  {
    country: "Italia",
    clubs: [
      {
        name: "Circolo del Golf di Roma Acquasanta",
        city: "Roma",
        address: "Via Appia Nuova 716, Roma",
        phone: "+39 06 780 3407"
      }
    ]
  },
  {
    country: "Paraguay",
    clubs: [
      {
        name: "Asunción Golf Club",
        city: "Asunción",
        address: "Ruta Transchaco Km 9, Jardín Botánico",
        phone: "+595 21 290 251 / 291 714",
        website: "www.asunciongolfclub.com",
        email: "asunciongolfclub@tigo.com.py"
      },
      {
        name: "Carlos Franco Country & Golf Club",
        city: "Arroyos y Esteros",
        address: "Ruta 3, Km 56,5, Arroyos y Esteros",
        phone: "+595 21 227813 / +595 981 200616",
        email: "club@carlosfrancogolf.com"
      },
      {
        name: "Club Golf del Yacht y Golf Club Paraguayo",
        city: "Asunción",
        address: "Av. del Yacht 11, Asunción"
      }
    ]
  },
  {
    country: "Perú",
    clubs: [
      {
        name: "Lima Golf Club",
        city: "San Isidro",
        address: "Camino Real, San Isidro",
        phone: "+51 1 442 6006",
        website: "www.limagolfclub.org.pe"
      },
      {
        name: "Asociación Deportiva Los Inkas Golf Club",
        city: "Lima",
        address: "Av. Circunvalación del Club Golf Los Incas 950, Monterrico, Lima 33",
        phone: "+51 1 3177770",
        email: "losinkasgolf@terra.com.pe"
      }
    ]
  },
  {
    country: "Portugal",
    clubs: [
      {
        name: "Oporto Golf Club",
        city: "Oporto",
        phone: "+351 22734 2008",
        email: "ogc@oportogolfclub.com"
      }
    ]
  },
  {
    country: "Suiza",
    clubs: [
      {
        name: "Crans-sur-Sierre Golf Club",
        city: "Crans-sur-Sierre",
        address: "3963 Crans-sur-Sierre",
        reservations: "+41 0 27 485 9797"
      }
    ]
  },
  {
    country: "Venezuela",
    clubs: [
      {
        name: "Valle Arriba Golf Club",
        city: "Caracas",
        phone: "+58 212 991 2244",
        email: "vallearribagolf@cantv.net"
      }
    ]
  }
];

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function ClubDetail({ label, value, children }) {
  if (!value && !children) {
    return null;
  }

  return (
    <p>
      <span>{label}</span>
      <span className="reciprocity-value">{children ?? value}</span>
    </p>
  );
}

function EmailDetail({ label, value }) {
  if (!value) {
    return null;
  }

  const emails = value.split("/").map((email) => email.trim()).filter(Boolean);

  return (
    <ClubDetail label={label} value={value}>
      {emails.map((email, index) => (
        <Fragment key={email}>
          {index > 0 ? " / " : null}
          <a href={`mailto:${email}`}>{email}</a>
        </Fragment>
      ))}
    </ClubDetail>
  );
}

/* Sólo marcamos tel: en números con formato internacional (+…); el resto de los
   formatos del listado es muy irregular como para generar links confiables. */
function PhoneDetail({ label, value }) {
  if (!value) {
    return null;
  }

  const [first, ...rest] = value.split("/").map((part) => part.trim());
  const suffix = rest.length ? ` / ${rest.join(" / ")}` : "";

  if (!first.startsWith("+")) {
    return <ClubDetail label={label} value={value} />;
  }

  return (
    <ClubDetail label={label} value={value}>
      <a href={`tel:${first.replace(/[^\d+]/g, "")}`}>{first}</a>
      {suffix}
    </ClubDetail>
  );
}

function WebsiteDetail({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <ClubDetail label={label} value={value}>
      <a href={`https://${value}`} target="_blank" rel="noopener noreferrer">
        {value}
      </a>
    </ClubDetail>
  );
}

export function ReciprocityPage({ reciprocity }) {
  const [query, setQuery] = useState("");
  const pageRef = useRef(null);
  const trimmedQuery = normalizeText(query.trim());

  useScrollReveal(pageRef);

  const filteredCountries = useMemo(() => {
    if (!trimmedQuery) {
      return reciprocityCountries;
    }

    return reciprocityCountries
      .map((country) => {
        const localName = reciprocity.countryNames[country.country] ?? country.country;
        const countryMatches =
          normalizeText(country.country).includes(trimmedQuery) || normalizeText(localName).includes(trimmedQuery);

        if (countryMatches) {
          return country;
        }

        const clubs = country.clubs.filter((club) =>
          normalizeText(`${club.name} ${club.city ?? ""}`).includes(trimmedQuery)
        );
        return clubs.length ? { ...country, clubs } : null;
      })
      .filter(Boolean);
  }, [trimmedQuery, reciprocity.countryNames]);

  return (
    <div ref={pageRef}>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{reciprocity.eyebrow}</p>
          <h1>{reciprocity.title}</h1>
        </div>
        <p>{reciprocity.intro}</p>
      </section>

      <section className="section reciprocity-section" aria-labelledby="reciprocity-title">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-kicker">{reciprocity.kicker}</p>
            <h2 id="reciprocity-title">{reciprocity.sectionTitle}</h2>
          </div>
          <p>{reciprocity.sectionIntro}</p>
        </div>

        <div className="reciprocity-search" data-reveal>
          <input
            type="search"
            value={query}
            placeholder={reciprocity.searchPlaceholder}
            aria-label={reciprocity.searchLabel}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="reciprocity-list" data-reveal-group>
          {filteredCountries.map((country) => (
            <details className="reciprocity-country" open={trimmedQuery ? true : undefined} key={country.country}>
              <summary>
                <span>{reciprocity.countryNames[country.country] ?? country.country}</span>
                <small>{country.clubs.length} {country.clubs.length === 1 ? reciprocity.clubSingular : reciprocity.clubPlural}</small>
              </summary>
              <div className="reciprocity-clubs">
                {country.clubs.map((club) => (
                  <article className="reciprocity-club" key={`${country.country}-${club.name}`}>
                    <div>
                      <h3>{club.name}</h3>
                      {club.city ? <p className="reciprocity-city">{club.city}</p> : null}
                    </div>
                    <div className="reciprocity-details">
                      <ClubDetail label={reciprocity.details.address} value={club.address} />
                      <PhoneDetail label={reciprocity.details.phone} value={club.phone} />
                      <PhoneDetail label={reciprocity.details.reservations} value={club.reservations} />
                      <ClubDetail label={reciprocity.details.fax} value={club.fax} />
                      <EmailDetail label={reciprocity.details.email} value={club.email} />
                      <WebsiteDetail label={reciprocity.details.website} value={club.website} />
                    </div>
                  </article>
                ))}
              </div>
            </details>
          ))}
          {filteredCountries.length === 0 ? <p className="reciprocity-empty">{reciprocity.noResults}</p> : null}
        </div>
      </section>
    </div>
  );
}
