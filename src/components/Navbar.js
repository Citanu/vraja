import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.jpg";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="absolute w-full bg-transparent flex justify-between items-center h-20 px-4 z-10 text-white">
      <div>
        <Link to="/">
          <img
            src={LOGO}
            alt=""
            className={logo ? "hidden h-16" : "block h-16"}
          />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <Link to="/">
          <li>Acasă</li>
        </Link>
        <Link to="/cazari">
          <li>Cazări</li>
        </Link>
        <Link to="/restaurante">
          <li>Restaurante</li>
        </Link>

        <a className="mt-4" href="tel:+40 745 045 506">
          {" "}
          +40 745 045 506
        </a>
      </ul>

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/*Mobile menu*/}
      <div
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <Link to="/">
            <img src={LOGO} alt="" className="h-16" />
          </Link>
          <Link to="/">
            <li className="border-b">Home</li>
          </Link>
          <Link to="/cazari">
            <li className="border-b">Cazari</li>
          </Link>
          <Link to="/restaurante">
            <li className="border-b">Restaurante</li>
          </Link>
          <div className="flex justify-between my-8">
            <a target="_blank" href="https://youtu.be/TbhbfsVaAIw">
              <FaFacebook className="icon" />
            </a>

            <a target="_blank" href="https://youtu.be/TbhbfsVaAIw">
              <FaYoutube className="icon" />
            </a>
            <a target="_blank" href="https://youtu.be/TbhbfsVaAIw">
              <FaTiktok className="icon" />
            </a>
            <a target="_blank" href="https://youtu.be/TbhbfsVaAIw">
              <FaInstagram className="icon" />
            </a>
          </div>
          <div className="text-center text-xl text-green-700">
            <a href="tel:+40 745 045 506"> +40 745 045 506</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
