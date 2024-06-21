import { DarkModeContext } from "../DarkModeContext";
import { hamburger, close, search } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useContext, useState } from "react";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { dark, toggleDarkMode } = useContext(DarkModeContext);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const handleClick = () => {
    setSearchVisible(!isSearchVisible);
  };
  return (
    <header className="padding-x fixed py-8 z-20 w-full dark:bg-slate-800 bg-slate-200">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`font-montserrat leading-normal text-lg font-semibold text-slate-gray ${
                  dark ? "text-white" : "text-slate-gray"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col relative">
          <img
            src={search}
            title="Search"
            alt="searchIcon"
            height={30}
            width={30}
            onClick={handleClick}
            // Toggle the visibility of search icon
            className="cursor-pointer"
          />
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search Item"
              className="block rounded-xl placeholder-black bg-slate-300 px-5 py-2 mt-2 absolute top-10 right-[-50px] outline-none border-[1px] border-rose-500"
            />
          )}
        </div>

        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger"
            title="More Options"
            width={30}
            height={30}
            className="cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          {toggleMenu && (
            <div className="flex justify-center items-center fixed bg-black flex-col w-full h-full top-0 left-0 transition duration-1000 ease-in-out dark:bg-slate-800">
              <img
                src={close}
                title="close"
                height={25}
                width={25}
                className="cursor-pointer absolute top-[35px] right-[50px] "
                onClick={() => setToggleMenu(!toggleMenu)}
              />
              <ul className="flex-1 flex justify-center items-center gap-16 flex-col">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[30px] font-montserrat leading-normal text-white font-bold tracking-wide"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
