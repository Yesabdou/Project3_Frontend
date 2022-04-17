import React, { useState } from "react";

const User = () => {
  const [register, setRegister] = useState();
  const [signIn, setSignIn] = useState();

  return (
    <div className="userConnection">
      <div className="userConnectionContainer">
        <ul>
          <li>S'incrire </li>
          <li>Se connecter </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
