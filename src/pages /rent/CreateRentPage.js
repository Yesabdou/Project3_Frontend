import React from "react";
import Navigation from "../../components/Navigation";
import AddRent from "../../components/rent/CreateRent";

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const AddRentPage = () => {
  return (
    <div>
      <Navigation />
      <AddRent />
    </div>
  );
};

export default AddRentPage;
