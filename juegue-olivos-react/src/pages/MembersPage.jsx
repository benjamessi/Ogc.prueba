import { MemberAccess } from "../components/MemberAccess.jsx";

export function MembersPage({ member, memberArea, onLogin }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Socios</p>
          <h1>Acceso socios</h1>
        </div>
        <p>Ingreso al área privada para socios del club.</p>
      </section>
      <MemberAccess member={member} memberArea={memberArea} onLogin={onLogin} />
    </>
  );
}
