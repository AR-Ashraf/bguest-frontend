import React from "react";
import { Title } from "../../components";
import LoginForm from "../../containers/login_form/LoginForm";
import "./login.css";

function Login() {
  return (
    <div className="bguest__login">
    <div className="bguest__login-body">
    <Title
      firstLineText="Login"
      highlightedWord="Login"
    />
    <div className="bguest__login-form">
      <LoginForm/>
    </div>
    </div>
    </div>
  );
}

export default Login;
