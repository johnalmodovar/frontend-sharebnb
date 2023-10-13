import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

/** Renders form to register user.
 *
 * Props:
 * - signup(): function that submits form data to server (from parent)
 *
 * State:
 * - signupData: { username, firstName, lastName, password, email, phone }
 * - formErrors: ["error", ...]
 *
 * RoutesList -> SignupForm
 */
function SignupForm({ signup }) {
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  /** handleChange: updates signup information in state as user types in input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignupData(l => ({ ...l, [name]: value }));
  }

  /** Handles signup form submit
     * Calls signup function and sends data to App
     * OR
     * if errors, displays errors
     */
  async function handleSubmit(evt) {
    evt.preventDefault();
    setFormErrors([]);

    try {
      await signup(signupData);
      navigate("/");
    } catch (err) {
      let errors = err[0].message;
      setFormErrors(errors);
    }
  }

  return (
    <div className="SignupForm">
      <h2>Register:</h2>
      <form onSubmit={handleSubmit}>
        <div className="SignupForm-username">
          <label htmlFor="username" className="form-control">Username</label>
          <input
            name="username"
            value={signupData.username}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="SignupForm-firstName">
          <label htmlFor="firstName" className="form-control">First Name</label>
          <input
            name="firstName"
            value={signupData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="SignupForm-lastName">
          <label htmlFor="lastName" className="form-control">Last Name</label>
          <input
            name="lastName"
            value={signupData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="SignupForm-password">
          <label htmlFor="password" className="form-control">Password</label>
          <input
            name="password"
            value={signupData.password}
            onChange={handleChange}
            className="form-control"
            required
            type="password"
          />
        </div>
        <div className="SignupForm-email">
          <label htmlFor="email" className="form-control">Email Address</label>
          <input
            name="email"
            value={signupData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="SignupForm-phone">
          <label htmlFor="phone" className="form-control">Phone Number</label>
          <input
            name="phone"
            value={signupData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      {formErrors.length !== 0 && <Alert messages={formErrors} type={"danger"} />}
    </div>
  );

}

export default SignupForm;