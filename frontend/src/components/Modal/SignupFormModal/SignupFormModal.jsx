import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import * as sessionActions from "../../../store/session";
import s from "./SignupForm.module.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { closeModal } = useModal();

  const isEmptySpaces = (string) => {
    if (string.length === 0) return true;
    for (const char of string) {
      if (char !== " ") return false;
    }
    return true;
  };

  useEffect(() => {
    const newErrors = {};
    if (isEmptySpaces(email) || !email.includes("@")) {
      newErrors.email = "Not a valid email";
    }
    if (isEmptySpaces(username)) {
      newErrors.username = "Username is required";
    }
    if (isEmptySpaces(firstName)) {
      newErrors.firstName = "First name is required";
    }
    if (isEmptySpaces(lastName)) {
      newErrors.lastName = "Last name is required";
    }
    if (isEmptySpaces(password)) {
      newErrors.password = "Password is required";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Must match password";
    }
    setErrors(newErrors);
  }, [email, username, firstName, lastName, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (!Object.keys(errors).length) {
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then((res) => {
          if (res.errors) {
            setErrors(res.errors);
          } else {
            closeModal();
          }
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword:
        "Confirm Password field must be the same as the Password field",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <h1 className={s.title}>Sign Up</h1>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      {isSubmitted && errors.email && (
        <span className={s.error}>{errors.email}</span>
      )}

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />

      {isSubmitted && errors.username && <span>{errors.username}</span>}

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />

      {isSubmitted && errors.firstName && <span>{errors.firstName}</span>}

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />

      {isSubmitted && errors.lastName && <span>{errors.lastName}</span>}

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {isSubmitted && errors.password && <span>{errors.password}</span>}

      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />

      {isSubmitted && errors.confirmPassword && (
        <span>{errors.confirmPassword}</span>
      )}
      <button
        type="submit"
        disabled={Object.keys(errors).length && isSubmitted}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupFormModal;
