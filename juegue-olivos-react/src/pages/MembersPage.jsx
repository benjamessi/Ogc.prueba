import { MemberAccess } from "../components/MemberAccess.jsx";

export function MembersPage({ member, memberArea, onLogin }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Socios</p>
          <h1>Acceso privado del club.</h1>
        </div>
        <p>
          Esta pantalla queda lista para evolucionar a login real, perfiles, reservas internas, torneos y comunicaciones
          exclusivas.
        </p>
      </section>
      <MemberAccess member={member} memberArea={memberArea} onLogin={onLogin} />
    </>
  );
}
