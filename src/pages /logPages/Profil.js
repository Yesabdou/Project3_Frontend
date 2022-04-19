import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
const Profil = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
    </div>
  );
};

export default Profil;
