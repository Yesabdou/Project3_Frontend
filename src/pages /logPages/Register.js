import React from "react";
import Navigation from "../../components/Navigation";
import RegisterForm from "../../components/Log/RegisterForm";
import NewRegisterForm from "../../components/Log/NewRegisterForm";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Register = () => {
  return (
    <div>
      <Navigation />
      <RegisterForm />
      {/* <NewRegisterForm /> */}
    </div>
  );
};

export default Register;
