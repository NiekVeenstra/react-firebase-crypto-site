import React, { useRef, useState } from "react";
import { useAuth } from "../components/Auth";
import { useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleUpdateProfile(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="signup-page">
      <div className="container">
        <h1 className="container__h1">Update Profile</h1>
        {error && (
          <div className="text-red" variant="danger">
            {error}
          </div>
        )}
        <form className="container__form" onSubmit={handleUpdateProfile}>
          <label className="container__form__label">
            Email:
            <input
              name="email"
              type="email"
              ref={emailRef}
              defaultValue={currentUser.email}
              required
            />
          </label>
          <label className="container__form__label">
            Password:
            <input
              name="password"
              type="password"
              ref={passwordRef}
              placeholder="New Password"
              required
            />
          </label>
          <label className="container__form__label">
            Password Confirmation:
            <input
              name="password"
              type="password"
              ref={passwordConfirmRef}
              placeholder="New Password"
              required
            />
          </label>
          <button disabled={loading} className="container__form__login-button" type="submit">
            Update
          </button>
        </form>
        <p>
          <a href="/">Cancel</a>
        </p>
      </div>
    </div>
  );
}

// export default Settings;
