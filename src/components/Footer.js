import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import LOGO from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 pb-30 pt-4">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <img
            src={LOGO}
            alt=""
            className="sm:h-20 pl-4 h-28 mx-auto sm:mx-0 "
          />
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
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
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>
              Nr telefon: <a href="tel:+40 745 045 506"> +40 745 045 506</a>
            </li>
            <li>E-mail: turforest@yahoo.com</li>
          </ul>
          <ul className="text-right lg:flex">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/cazari">
              <li>Cazari</li>
            </Link>
            <Link to="/restaurante">
              <li>Restaurante</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
