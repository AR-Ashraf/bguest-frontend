import React, { useState } from "react";
import { Button } from "../../components";
import './form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required");
    } else {
      setErrorMessage("");
      // send form data to server
    }
  };

  return (
    <div className="bguest__contact-form">
      <form className="bguest__contact-form-body" onSubmit={handleSubmit}>
        <div className="bguest__contact-form-body-field">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{ width: "100%", padding: "1rem", border: "none" }}
            />
          </label>
        </div>
        <div className="bguest__contact-form-body-field">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={{ width: "100%", padding: "1rem", border: "none" }}
            />
          </label>
        </div>
        <div className="bguest__contact-form-body-field">
          <label htmlFor="message">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              style={{ width: "100%", padding: "1rem", border: "none" }}
            />
          </label>
        </div>
        <Button className="bguest__contact-form-body-button" text="Submit"/>
      </form>
      {errorMessage && (
        <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
      )}
    </div>
  );
}

export default Form;
