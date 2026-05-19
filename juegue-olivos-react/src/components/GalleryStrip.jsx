export function GalleryStrip({ images }) {
  return (
    <section className="gallery-strip" aria-label="Galería del club">
      <div className="gallery-copy">
        <p className="eyebrow">La cancha</p>
        <h2>Una experiencia visual más editorial, liviana y adaptable.</h2>
      </div>
      <div className="gallery">
        {images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
