import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/c2/IMG_0388.JPG";
import fundal from "../assets/c2/fundal.JPG";
import img2 from "../assets/c2/IMG_0674.JPG";
import img3 from "../assets/c2/IMG_0682.JPG";
import img4 from "../assets/c2/IMG_0689.JPG";
import img5 from "../assets/c2/IMG_0693.JPG";
import img6 from "../assets/c2/IMG_0732.JPG";
import img7 from "../assets/c2/IMG_0738.JPG";
import img8 from "../assets/c2/IMG_0748.JPG";
import img9 from "../assets/c2/IMG_0756.JPG";
import img10 from "../assets/c2/IMG_0770.JPG";
import img11 from "../assets/c2/IMG_0771.JPG";
import img12 from "../assets/c2/IMG_0774.JPG";

const Cabana2 = () => {
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
    {
      image: img6,
      caption: "",
    },
    {
      image: img7,
      caption: "",
    },
    {
      image: img8,
      caption: "",
    },
    {
      image: img9,
      caption: "",
    },

    {
      image: img10,
      caption: "",
    },
    {
      image: img11,
      caption: "",
    },
    {
      image: img12,
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
          -CABANA 2-
        </h1>
        <div className="h-100 sm:w-[80%] md:w-[90%] lg:ml-24 mt-10 lg:flex mx-auto">
          <img
            className="rounded-lg w-[75%] md:w-[80%] h-[225px] sm:h-[610px] object-cover mx-auto "
            src={fundal}
            alt="/"
          />
          <div className="mt-10 lg:mt-0 md:ml-10 md:w-[50%] w-[75%] mx-auto">
            <p className="md:w-[75%] w-full">
            Langa pensiunile Vraja Muntelui 2 si 3 la 50m, se afla Cabana 2 care dispune de 4 camere duble dotate cu tv, baie si balcon propriu care se inchiriaza integral.
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
      <div className="mt-0  sm:mt-14 ">
        <Footer />
      </div>
    </div>
  );
};

export default Cabana2;
