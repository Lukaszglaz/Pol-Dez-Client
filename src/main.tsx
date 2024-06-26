// import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
  /* </React.StrictMode> */
);
