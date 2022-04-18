import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProviderWrapper } from "./context/auth.context"; 

ReactDOM.render(
  <React.StrictMode>
  <AuthProviderWrapper> 
    <App />
    </AuthProviderWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
