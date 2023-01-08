import React from "react";
import SelectsCard from "./SelectsCard";
import RESTAURANT1 from "../assets/r1/IMG_0969.JPG"
import RESTAURANT2 from "../assets/r2/IMG_0370.JPG"
import RESTAURANT3 from "../assets/r3/IMG_8728.jpg"

const Restaurante = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard link="/restaurant1" bg={RESTAURANT1} text="RESTAURANT 1" />
      <SelectsCard link="/restaurant2" bg={RESTAURANT2} text="RESTAURANT 2" />
      <SelectsCard link="/restaurant3" bg={RESTAURANT3} text="RESTAURANT 3" />
    </div>
  );
};

export default Restaurante;
