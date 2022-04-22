import React from "react";
import Navigation from "../../components/Navigation";
import NewRegisterForm from "../../components/Log/UpdateProfileForm";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const UpdateProfile = () => {
  return (
    <div>
      <Navigation />
      <NewRegisterForm />
    </div>
  );
};

export default UpdateProfile;
