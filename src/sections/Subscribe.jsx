/* eslint-disable no-unused-vars */
import { useContext } from "react";
import Button from "../components/Button";
import { DarkModeContext } from "../DarkModeContext";

const Subscribe = () => {
  const {dark, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact us"
    >
      <h2 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold dark:dark-text-h">
        Sign Up for <span className="text-coral-red">Updates </span>& Newsletter
      </h2>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Enter Your Email" className="input dark:bg-slate-800 rounded-full p-3 dark:text-white dark:placeholder-white dark:placeholder" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
