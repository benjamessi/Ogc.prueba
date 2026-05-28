import { useState } from "react";

const initialCredentials = {
  email: "",
  password: ""
};

export function MemberAccess({ member, memberArea, onLogin }) {
  const [credentials, setCredentials] = useState(initialCredentials);
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const result = onLogin(credentials);
    if (!result.ok) {
      setError(result.message);
      return;
    }
    setError("");
    setCredentials(initialCredentials);
    setIsPasswordVisible(false);
  }

  function updateField(event) {
    const { name, value } = event.target;
    setCredentials((current) => ({ ...current, [name]: value }));
  }

  return (
    <section className="section member-section" id="socios" aria-labelledby="socios-title">
      <div className="member-panel">
        <div>
          <div className="section-kicker">{memberArea.kicker}</div>
          <h2 id="socios-title">{memberArea.title}</h2>
          <p>{memberArea.intro}</p>
        </div>

        {member ? (
          <div className="member-dashboard" aria-label={memberArea.dashboardAria}>
            <p className="welcome">{memberArea.welcome}, {member.name}</p>
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
              {memberArea.emailLabel}
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={credentials.email}
                onChange={updateField}
                placeholder={memberArea.emailPlaceholder}
                required
              />
            </label>
            <label>
              {memberArea.passwordLabel}
              <span className="password-field">
                <input
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  value={credentials.password}
                  onChange={updateField}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-pressed={isPasswordVisible}
                  onClick={() => setIsPasswordVisible((current) => !current)}
                >
                  {isPasswordVisible ? memberArea.hidePassword : memberArea.showPassword}
                </button>
              </span>
            </label>
            {error ? <p className="form-error">{error}</p> : null}
            <button className="button primary full" type="submit">
              {memberArea.submit}
            </button>
            <div className="login-links">
              <a href="#recuperar">{memberArea.forgotPassword}</a>
              <a href="#contacto">{memberArea.contactSecretary}</a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
