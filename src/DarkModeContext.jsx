import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarModeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  
  const toggleDarkMode = () => {
    const newTheme = !dark ? "dark" : "light";
    setDark(!dark);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", !dark);
  };
  return (
    <DarkModeContext.Provider value={{ dark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
