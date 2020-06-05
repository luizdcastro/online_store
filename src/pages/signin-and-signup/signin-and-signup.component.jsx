import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

import "./signin-and-signup.syles.scss";

const SigninAndSignupPage = () => (
  <div className="signin-and-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignupPage;
