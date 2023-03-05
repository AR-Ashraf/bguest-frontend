import React, { useState } from "react";
import { Button } from "../../components";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import './loginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage("Both email and password are required");
    } else {
      setErrorMessage("");
      // send login data to server
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bguest__login-form">
      <form className="bguest__login-form-body" onSubmit={handleSubmit}>
        <div className="bguest__login-form-body-field">
          <label htmlFor="email">
            <input
              className="bguest__login-form-body-field-email-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </label>
        </div>
        <div className="bguest__login-form-body-field">
          <label htmlFor="password">
            <div className="password" >
              <input
                className="bguest__login-form-body-field-password-input"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <div onClick={handleTogglePassword}>
              {
                showPassword 
                ? <BsEyeFill className="bguest__login-form-body-field-icon"/>
                :
                <BsEyeSlashFill className="bguest__login-form-body-field-icon"/>
              }
              </div>
            </div>
          </label>
        </div>
        <div className="bguest__login-form-body-button">
        <Button  
        width="50%"
        height="50px"
        borderRadius="25px"
        fontSize="18px"
        text="Login"/>
        </div>
      </form>
      <div className="bguest__login-form-error">
      {errorMessage && (
        <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
      )}
      </div>
    </div>
  );
}

export default LoginForm;