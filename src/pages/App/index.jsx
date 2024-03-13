/* eslint-disable no-unused-vars */
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { Certificate } from "../Certificate";
import { NotFound } from "../NotFound";
import { BurgerMenuProvider } from "../../contexts/BurgerMenu";
import "./media.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/certificate", element: <Certificate /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BurgerMenuProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </BurgerMenuProvider>
  );
}

export default App;
