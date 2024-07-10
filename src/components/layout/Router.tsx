import { Route, Routes } from "react-router-dom";
import { Home } from "../../views/Home/Home";
import { AboutUs } from "../../views/AboutUs/AboutUs";
import { Panel } from "../../views/Panel/Panel";
import { Login } from "../../views/Login/Login";
import { SignUp } from "../../views/SignUp/SignUp";
import { ForgotPassword } from "../../views/ForgotPassword/ForgotPassword";
import { PageNotFound } from "../../views/PageNotFound/PageNotFound";
import { ProtectedRoutes } from "../ProtectedRoutes";
import { CompleteSignUp } from "../../views/CompleteSignUp/CompleteSignUp";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />

    <Route path="/panel" element={<ProtectedRoutes />}>
      <Route path="/panel" element={<Panel />} />
    </Route>

    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/complete-signup" element={<CompleteSignUp />} />

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
