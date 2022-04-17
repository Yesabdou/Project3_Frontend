import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htm lFor="email">
            Nom de l'association
          </label>
          <input type="text" name="pseudo" id="pseudo" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="finess">Finess</label>
          <input type="text" name="finess" id="finess" />
        </div>
        <div>
          <label htmlFor="phone">Telephone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="bio"> Présentation </label>
          <input type="text" name="bio" id="bio" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
