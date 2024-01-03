import React, { useState } from "react";
import loginImage from "../images/login.jpg";
import InputText from "../components/inputText";
import BouncingDotsLoader from "../Animations/BouncingLoader/BouncingLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // sign in button click
  const onClick = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    if (!email || !password) {
      return;
    }

    setFormValid(true);
  };

  return (
    <div className="flex ">
      <div className="w-2/4 hidden md:block">
        <img src={loginImage} alt="Login Image" />
      </div>
      <form className="px-8 py-8 md:pt-0  md:px-20 flex flex-col justify-center md:w-2/4 w-full">
        <h1 className="text-3xl font-semibold mb-3">Log In</h1>
        <p className="text-sm text-gray-600 mb-8">
          Enter your email and password to login our dashboard
        </p>

        <InputText
          fieldName="Email"
          type="email"
          placeholder="Email Address"
          value={email}
          error={emailError}
          onChange={(e) => {
            if (e.target.value) {
              setEmailError(false);
            } else {
              setEmailError(true);
            }

            setEmail(e.target.value);
          }}
        />

        <InputText
          fieldName="Password"
          placeholder="Password"
          type="password"
          error={passwordError}
          value={password}
          onChange={(e) => {
            if (e.target.value) {
              setPasswordError(false);
            } else {
              setPasswordError(true);
            }

            setPassword(e.target.value);
          }}
        />

        <button
          onClick={onClick}
          className="w-full md:w-3/4 py-3 text-white hover:bg-blue-700 px-3  mt-3 bg-blue-600"
        >
          {formValid ? <BouncingDotsLoader /> : `Sign In`}
        </button>

        <p className="mt-4 text-sm text-gray-600 mb-8">
          Don't have an account? Signup
        </p>
        <p
          className="mt-1
         text-sm text-gray-600 mb-8"
        >
          Forgot Password
        </p>
      </form>
    </div>
  );
};

export default Login;
