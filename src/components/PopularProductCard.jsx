/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { star } from "../assets/icons";
import { DarkModeContext } from "../DarkModeContext";
const PopularProductCard = ({ imgURL, name, price }) => {
  const { dark, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full bg-gray-200 shadow-lg dark:bg-slate-800 rounded-[20px] dark:shadow-slate-700 hover:scale-[1.03] transition-all duration-200 ease-in-out">
      <img src={imgURL} alt={name} className="w-full mt-2 h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat leading-normal text-slate-gray dark:dark-text-p">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:dark-text-h">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
