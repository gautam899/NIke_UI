/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { DarkModeContext } from "../DarkModeContext";

const SpecialOffer = () => {
  const {dark, toggleDarkMode} = useContext(DarkModeContext);
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className=" flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize lg:max-w-lg font-bold dark:dark-text-h">
          <span className="text-coral-red ">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:dark-text-p">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text dark:dark-text-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quidem?
          Nihil ut cupiditate eligendi doloremque. Aliquid recusandae officia
          doloremque! Vero!{" "}
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="Shop Now" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-color"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
