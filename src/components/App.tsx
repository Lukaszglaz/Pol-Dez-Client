import { Router } from "./layout/Router";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header/Header";

export const App = () => (
  <div className="container__app_main">
    <Header />
    <Router />
    <Footer />
  </div>
);
