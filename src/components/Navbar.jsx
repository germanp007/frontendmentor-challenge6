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
      <nav className="bg-[#3ebfff] ">
        <div className="flex justify-between p-5">
          <img src={logo} alt="Logo" />
          <img src={burger} alt="button" onClick={handleToggle} />
        </div>
        {toggle && (
          <ul className="bg-white w-[330px] h-[300px] absolute left-0 right-0 m-auto top-24 flex flex-col space-y-5 font-bold text-center justify-evenly after:content-[''] after:absolute after:top-[-30px] after:right-0 after:border-[16px] after:border-white after:border-t-transparent after:border-l-transparent text-xl text-Very-dark-grayish-blue">
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
