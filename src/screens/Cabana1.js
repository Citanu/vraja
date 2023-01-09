import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/c1/IMG_8691.jpg";
import fundal from "../assets/c1/fundal.JPG";
import img2 from "../assets/c1/IMG_8692.jpg";
import img3 from "../assets/c1/IMG_8694.jpg";

const Cabana1 = () => {
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
    <div className="bg-gray-50">
    <Navbar />
    <div className="h-full bg-gray-50">
      <div className="relative h-[86px] w-full  bg-[#3E1900] "></div>
      <h1 className="text-[#2F1200] text-5xl text-center pt-10 font-extrabold">
        -CABANA 1-
      </h1>
      <div className="h-100 sm:w-[80%] md:w-[90%] lg:ml-24 mt-10 lg:flex mx-auto">
          <img
            className="rounded-lg w-[75%] md:w-[80%] h-[225px] sm:h-[610px] object-cover mx-auto "
            src={fundal}
            alt="/"
          />
        <div className="mt-10 lg:mt-0 md:ml-10 md:w-[50%] w-[75%] mx-auto">
          <p className="md:w-[75%] w-full">
          Langa Vila Vraja Muntelui se afla Cabana 1 unde aveti la dispozitie 4 camere - 8 locuri de cazare, living si bucatarie care se inchiriaza integral  
          </p>
        </div>
      </div>
      <div className="py-10 w-full mx-auto">
        <div className="mx-auto ">
          <Carousel
            data={data}
            time={2000}
            width="950px"
            height="500px"
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
      </div>
    </div>
    <div className="mt-0  sm:mt-16">
      <Footer />
    </div>
  </div>
  );
};

export default Cabana1;
