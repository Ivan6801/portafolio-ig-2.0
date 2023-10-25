/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const BurgerMenuContext = createContext();

export const BurgerMenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <BurgerMenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};
