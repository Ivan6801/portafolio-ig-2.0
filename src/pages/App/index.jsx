/* eslint-disable no-unused-vars */
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Home } from "../Home";
import { Projects } from "../../components/Projects";
import { Experience } from "../../components/Experience";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { NotFound } from "../NotFound";
import { BurgerMenuProvider } from "../../contexts/BurgerMenu";
import "./media.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BurgerMenuProvider>
      <BrowserRouter>
        <div style={{ background: "#fafafa" }}>
          <Header />
          <Hero />
          <Projects />
          <Experience />
        </div>
        <Contact />
        <Footer />
      </BrowserRouter>
    </BurgerMenuProvider>
  );
}

export default App;
