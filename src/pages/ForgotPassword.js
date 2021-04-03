import React, { useRef, useState } from "react";
import { useAuth } from "../components/Auth";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePasswordResetRequest(e) {
    e.preventDefault();
    console.log({ error, message, loading });
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="forgot-password-page">
      <div className="container">
        <h1 className="container__h1">Forgot Password</h1>
        <form className="container__form" onSubmit={handlePasswordResetRequest}>
          <label className="container__form__label">
            Email:
            <input name="email" type="email" ref={emailRef} placeholder="Email" />
          </label>
          <button className="container__form__login-button" type="submit">
            Send request
          </button>
        </form>
      </div>
    </div>
  );
}

// export default ForgotPassword;
