// FloatingButton.js
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

const FloatingButton = () => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-[20px] font-bold right-[20px] bg-black text-coral-red px-[20px] py-[10px] rounded-full dark:bg-slate-600 dark:shadow-lg dark:text-slate-200"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
};

export default FloatingButton;
