import React, { useRef, useState } from "react";
import { useAuth } from "../components/Auth";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup-page">
      <div className="container">
        <h1 className="container__h1">Sign up</h1>
        {error && (
          <div className="text-red" variant="danger">
            {error}
          </div>
        )}
        <form className="container__form" onSubmit={handleSignUp}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" ref={emailRef} placeholder="Email" required />
          </label>
          <label className="container__form__label">
            Password:
            <input
              name="password"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </label>
          <label className="container__form__label">
            Password Confirmation:
            <input
              name="password"
              type="password"
              ref={passwordConfirmRef}
              placeholder="Password"
              required
            />
          </label>
          <button disabled={loading} className="container__form__login-button" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login Now.</a>
        </p>
        <p>
          Did you forget your password? <a href="/forgot-password">Forgot Password.</a>
        </p>
      </div>
    </div>
  );
}

// export default withRouter(SignUp);
