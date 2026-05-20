import { useState } from "react";

const initialCredentials = {
  email: "",
  password: ""
};

export function MemberAccess({ member, memberArea, onLogin }) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const result = onLogin(credentials);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    setCredentials(initialCredentials);
  }

  function updateField(event) {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  }

  return (
    <section className="section member-section" id="socios" aria-labelledby="socios-title">
      <div className="member-panel">
        <div>
          <div className="section-kicker">Exclusivo socios</div>
          <h2 id="socios-title">Inicio de sesión</h2>
          <p>
            Esta demo permite probar el acceso de socios. Para producción debe conectarse con autenticación real.
          </p>
          <div className="demo-credentials" id="editar">
            <strong>Demo</strong>
            <span>{memberArea.demoEmail}</span>
            <span>Clave: {memberArea.demoPassword}</span>
          </div>
        </div>

        {member ? (
          <div className="member-dashboard" aria-label="Área privada de socios">
            <p className="welcome">Bienvenido, {member.name}</p>
            <div className="member-card-grid">
              {memberArea.cards.map((card) => (
                <article className="member-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <form className="login-card" onSubmit={handleSubmit}>
            <label>
              Email de socio
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={credentials.email}
                onChange={updateField}
                placeholder="socio@olivos.test"
                required
              />
            </label>
            <label>
              Contraseña
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={updateField}
                placeholder="olivos"
                required
              />
            </label>
            {error ? <p className="form-error">{error}</p> : null}
            <button className="button primary full" type="submit">
              Iniciar sesión
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
