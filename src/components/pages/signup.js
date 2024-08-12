import React, { useState } from "react";
import "../styles/signup.css";
import Navbar from "./navbar";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    streetAddress: "",
    city: "",
    zipcode: "",
    state: "",
    country: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    if (!formData.streetAddress) errors.streetAddress = "Street address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.zipcode) errors.zipcode = "Zipcode is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.country) errors.country = "Country is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  return (
    <>
      <div id="signup-background">
        <Navbar />
        <div className="signup-parent">
          <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="username">Username:</label>
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="email">Email:</label>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="password">Password:</label>
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="streetAddress">Street/House No:</label>
                {errors.streetAddress && (
                  <p className="error">{errors.streetAddress}</p>
                )}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="city">City:</label>
                {errors.city && <p className="error">{errors.city}</p>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="zipcode">Zipcode:</label>
                {errors.zipcode && <p className="error">{errors.zipcode}</p>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="state">State:</label>
                {errors.state && <p className="error">{errors.state}</p>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label htmlFor="country">Country:</label>
                {errors.country && <p className="error">{errors.country}</p>}
              </div>

              <button type="submit">Sign Up</button>
            </form>
            <div className="signup-container">
                                <p>Already have an account?</p>
                                <a href="/Login">Login now</a>
                            </div>
          </div>

        </div>
        <div className="banner-ad">

</div>
      </div>
    </>
  );
};

export default SignupPage;
