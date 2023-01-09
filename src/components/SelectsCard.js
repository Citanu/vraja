import React from "react";
import { Link } from "react-router-dom";

const SelectsCard = (props) => {
  return (
    <div className="relative card-zoom">
      <img className="card-zoom-image object-cover " src={props.bg} alt="/" />
      <Link to={props.link}>
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full text-center">
          <h1 className="-translate-x-1/2 -translate-y-1/2 left-1/2 bottom-1/2 text-2xl font-bold text-white absolute">
            {props.text}
          </h1>
          <button className="-translate-x-1/2 -translate-y-1/2 left-1/2 bottom-1/4 absolute bg-transparent hover:bg-white hover:text-black text-white text-2xl border w-20 h-10 rounded-md">
            View
          </button>
        </div>
      </Link>
    </div>
  );
};

export default SelectsCard;
