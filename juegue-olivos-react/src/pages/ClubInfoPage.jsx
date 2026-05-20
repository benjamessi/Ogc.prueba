const historyParagraphs = [
  "La historia del Olivos Golf Club comenzó en 1926, cuando un grupo de treinta golfistas, convencidos del futuro del golf en la Argentina, decidió fundar un club que estuviera a la altura de las grandes tradiciones del deporte. Aquella iniciativa marcó el nacimiento de una de las instituciones más emblemáticas del golf argentino.",
  "En sus primeros años, el club funcionó en Olivos, en la zona de las calles Marcelino Ugarte y España. Allí desarrolló una cancha de 18 hoyos de estilo británico y se consolidó rápidamente como uno de los referentes del país. Sin embargo, el crecimiento urbano llevó a que en 1950 el club se trasladara a su actual ubicación en Ingeniero Pablo Nogués, en lo que fue considerado una verdadera “segunda fundación”.",
  "El diseño de la cancha estuvo a cargo de Luther H. Koontz, vinculado a la escuela de Alister MacKenzie, uno de los grandes nombres de la arquitectura de golf mundial. El resultado fue una cancha de 27 hoyos, distribuida en tres recorridos —Blanca, Colorada y Azul—, caracterizada por sus desniveles naturales, sus árboles añosos, sus greens exigentes y un trazado que obliga al jugador a manejar distintos efectos y leer con precisión el viento.",
  "A lo largo de su historia, el Olivos Golf Club fue sede de torneos de enorme prestigio, entre ellos el Abierto de la República Argentina, el Torneo de Maestros y el Campeonato Mundial Amateur por Equipos de 2010, disputado en sus canchas junto con el Buenos Aires Golf Club.",
  "Por su nivel deportivo, su historia y la calidad de su cancha, Olivos Golf Club es considerado uno de los grandes campos de golf de la Argentina y de Sudamérica. Incluso ha sido reconocido por Golf Digest entre las mejores canchas del mundo fuera de Estados Unidos, confirmando el lugar de privilegio que ocupa dentro del golf argentino."
];

export function ClubInfoPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Historia del club</p>
          <h1>Historia y tradición del Olivos</h1>
        </div>
        <p>
          Una de las instituciones más emblemáticas del golf argentino, con una cancha reconocida por su diseño, sus
          recorridos y su exigencia deportiva.
        </p>
      </section>
      <section className="section history-section" id="historia" aria-labelledby="history-title">
        <div className="history-card">
          <div className="history-intro">
            <p className="section-kicker">Desde 1926</p>
            <h2 id="history-title">Una historia ligada al crecimiento del golf argentino.</h2>
          </div>
          <div className="history-copy">
            {historyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
