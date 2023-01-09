import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/r3/IMG_8728.jpg";
import img2 from "../assets/r3/IMG_8730.jpg";
import img3 from "../assets/r3/IMG_8731.jpg";
import img4 from "../assets/r3/IMG_8740.jpg";
import img5 from "../assets/r3/IMG_8741.jpg";

const Restaurant3 = () => {
  const data = [
    {
      image: img1,
      caption: "",
    },
    {
      image: img2,
      caption: "",
    },
    {
      image: img3,
      caption: "",
    },
    {
      image: img4,
      caption: "",
    },
    {
      image: img5,
      caption: "",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="">
      <Navbar />
      <div className="bg-gray-50 h-[800px]">
        <div className="relative h-[96px] w-full  bg-[#3E1900] "></div>
        <h1 className="text-[#2F1200] text-5xl text-center pt-10 font-extrabold h-[96px]">
          -Restaurant 3-
        </h1>
        <div className="w-full md:flex">
          <div className="md:ml-24 md:w-auto">
            <Carousel
              data={data}
              time={2000}
              width="750px"
              height="450px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
          </div>
          <div className="md:w-[50%] mx-10 mt-10 md:ml-10">
            <p>
              Intre cele 2 cladiri Vraja Muntelui 2 si 3 se afla un restaurant
              in care pot fi servite preparate traditionale, se pot organiza
              petreceri private etc.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-0  sm:mt-14 md:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Restaurant3;
