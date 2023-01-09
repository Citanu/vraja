import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import LOGO from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 pb-30 pt-4">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center mb-3">
          <div className="sm:flex text-center justify-center items-center">
            <img
              src={LOGO}
              alt=""
              className="sm:h-20 pl-4 h-28 mx-auto sm:mx-0 "
            />

            <div className="sm:flex-column text-center ml-5">
              <div>Nr telefon: <a href="tel:+40 745 045 506"> +40 745 045 506</a></div>
              <div className="mt-3">E-mail: turforest@yahoo.com</div>
            </div>
          </div>
          {/* grow */}
          <div className="flex-col items-centerr">
            <div className="flex justify-between w-full sm:max-w-[280px] mt-4 mb-4">
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

            <ul className="text-center lg:flex">
              <Link to="/">
                <li className="mr-1">Acasă</li>
              </Link>
              <Link to="/cazari">
                <li className="mx-1">Cazări</li>
              </Link>
              <Link to="/restaurante">
                <li className="ml-1">Restaurante</li>
              </Link>
            </ul>
          </div>

        </div>

      </div>
    </div >
  );
};

export default Footer;
