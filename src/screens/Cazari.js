import React from "react";
import Cazare from "../components/Cazare";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import locatie from "../assets/locatie.jpg"

const Cazari = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[86px] w-full  bg-[#3E1900] "></div>
      <h1 className="text-[#2F1200] text-5xl text-center pt-10 font-extrabold">
        -CAZARI-
      </h1>
      <Cazare />
      <div className="pb-16 pt-20"></div>
      <div className="">
        <h1 className="text-[#2F1200] text-3xl text-center pt-10 font-extrabold relative">
            <a href="https://goo.gl/maps/gwKSMvJhTLRxBnuG8" target="blank_">
              <img className="w-screen h-full" src={locatie} alt="" />
            </a>
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Cazari;