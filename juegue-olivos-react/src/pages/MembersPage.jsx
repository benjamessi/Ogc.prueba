import { MemberAccess } from "../components/MemberAccess.jsx";

export function MembersPage({ page, member, memberArea, onLogin }) {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
        </div>
        <p>{page.intro}</p>
      </section>
      <MemberAccess member={member} memberArea={memberArea} onLogin={onLogin} />
    </>
  );
}
