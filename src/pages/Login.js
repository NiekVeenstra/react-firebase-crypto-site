import React, { useRef, useState } from "react";
import { useAuth } from "../components/Auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="container">
        <h1 className="container__h1">Log In</h1>
        {error && (
          <div className="text-red" variant="danger">
            {error}
          </div>
        )}
        <form className="container__form" onSubmit={handleLogin}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" ref={emailRef} placeholder="Email" />
          </label>
          <label className="container__form__label">
            Password:
            <input name="password" type="password" ref={passwordRef} placeholder="Password" />
          </label>
          <button disabled={loading} className="container__form__login-button" type="submit">
            Log in
          </button>
        </form>
        <p>
          Don't have an account yet? <a href="/signup">Sign Up Now.</a>
        </p>
        <p>
          Did you forget your password? <a href="/forgot-password">Forgot Password.</a>
        </p>
      </div>
    </div>
  );
}

// export default withRouter(Login);
