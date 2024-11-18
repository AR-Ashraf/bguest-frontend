import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { tokenAction } from "../../redux/actions";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { LOGIN_API } from "../../helpers/Constants";
import './loginForm.css';

async function loginUser(credentials) {
  const encodeLoginData = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return fetch( LOGIN_API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: encodeLoginData(credentials),
  })
    .then((response) => response.json())
    .then((data) => data);
};

function LoginForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    username: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.username || !formData.password) {
      setErrorMessage("Both username and password are required");
    } else {

      // Hardcoded credentials check
    if (formData.username === "admin" && formData.password === "admin") {
      setErrorMessage("");
      const hardcodedToken = "hardcodedAdminToken";
      localStorage.setItem("saveToken", hardcodedToken);
      dispatch(tokenAction(hardcodedToken));
      navigate("/dashboard");
      return;
    }
      
      // send login data to server

      const token = await loginUser({
        username: formData.username,
        password: formData.password,
      });
  
      if (token.token) {
        setErrorMessage("");
        localStorage.setItem("saveToken", token.token);
        dispatch(tokenAction(token.token));
        navigate("/dashboard");
        
      } else {
        setErrorMessage("Username or Password is incorrect!");
        return;
      }


    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bguest__login-form">
      <form className="bguest__login-form-body" onSubmit={handleSubmit}>
        <div className="bguest__login-form-body-field">
          <label htmlFor="username">
            <input
              className="bguest__login-form-body-field-username-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
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