import logo from "../../images/logo.svg";
import burger from "../../images/icon-hamburger.svg";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <nav className="bg-[#3ebfff]">
        <div className="flex justify-between items-center p-8">
          <img src={logo} alt="Logo" className="h-[24px] w-[128px]" />
          <img
            src={burger}
            alt="button"
            onClick={handleToggle}
            className="tablet:hidden"
          />
          <ul className="hidden tablet:flex items-center min-w-[400px] text-White">
            <li className="cursor-pointer w-[120px] hover:text-[#70ceff] duration-200">
              About
            </li>
            <li className="cursor-pointer  w-[120px] hover:text-[#70ceff] duration-200">
              Services
            </li>
            <li className="cursor-pointer  w-[120px] hover:text-[#70ceff] duration-200">
              Projects
            </li>
            <li className="cursor-pointer bg-White w-[120px] h-[50px] rounded-full grid place-content-center m-auto font-Fraunces text-Very-dark-desaturated-blue hover:bg-[#70ceff] hover:text-White duration-200">
              CONTACT
            </li>
          </ul>
        </div>
        {toggle && (
          <ul className="bg-white w-[300px] h-[300px] absolute right-10 m-auto top-24 flex flex-col space-y-5 font-bold text-center justify-evenly after:content-[''] after:absolute after:top-[-30px] after:right-0 after:border-[16px] after:border-white after:border-t-transparent after:border-l-transparent text-xl text-Very-dark-grayish-blue">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer bg-Yellow w-[140px] h-[56px] rounded-full grid place-content-center m-auto font-Fraunces text-Very-dark-desaturated-blue">
              CONTACT
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
