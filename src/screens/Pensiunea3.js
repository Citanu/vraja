import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/p3/IMG_0356.JPG";
import img2 from "../assets/p3/IMG_0410.JPG";
import img3 from "../assets/p3/IMG_0576.JPG";
import img4 from "../assets/p3/IMG_0579.JPG";
import img5 from "../assets/p3/IMG_0581.JPG";
import img6 from "../assets/p3/IMG_0587.JPG";
import img7 from "../assets/p3/IMG_0590.JPG";
import img8 from "../assets/p3/IMG_0596.JPG";
import img9 from "../assets/p3/IMG_0601.JPG";
import img10 from "../assets/p3/IMG_0613.JPG";
import img11 from "../assets/p3/IMG_0617.JPG";
import img12 from "../assets/p3/IMG_0626.JPG";
import img13 from "../assets/p3/IMG_0633.JPG";
import img14 from "../assets/p3/IMG_0639.JPG";
import img15 from "../assets/p3/IMG_0646.JPG";
import img16 from "../assets/p3/IMG_0649.JPG";
import img17 from "../assets/p3/IMG_0652.JPG";
import img18 from "../assets/p3/IMG_0662.JPG";
import img19 from "../assets/p3/IMG_0666.JPG";
import img20 from "../assets/p3/IMG_0667.JPG";
import img21 from "../assets/p3/IMG_0672.JPG";

const Pensiunea3 = () => {
  const data = [

    {
      image: img4,
      caption: "",
    },
    {
      image: img3,
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
    {
      image: img13,
      caption: "",
    },
    {
      image: img14,
      caption: "",
    },
    {
      image: img15,
      caption: "",
    },
    {
      image: img16,
      caption: "",
    },
    {
      image: img17,
      caption: "",
    },
    {
      image: img18,
      caption: "",
    },
    {
      image: img19,
      caption: "",
    },
    {
      image: img20,
      caption: "",
    },
    {
      image: img21,
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
          -PENSIUNEA 3-
        </h1>
        <div className="h-100 sm:w-[80%] md:w-[90%] lg:ml-24 mt-10 lg:flex mx-auto">
          <img
            className="rounded-lg w-[75%] md:w-[80%] h-[225px] sm:h-[610px] object-cover mx-auto "
            src={img1}
            alt="/"
          />
          <div className="mt-10 lg:mt-0 md:ml-10 md:w-[50%] w-[75%] mx-auto">
            <p className="md:w-[75%] w-full">
            Pensiunea Vraja Muntelui 3 dispune de 19 camere duble cu bai proprii, TV cablu, curte mare cu locuri de parcare, terase, leagane, gratar, sala de conferinte, bucatarie utilata la dispozitie. Intre cele 2 cladiri se afla un restaurant (150 persoane), in care pot fi servite preparate traditionale, se pot organiza petreceri etc.
Pensiunea este situate in Moieciu de Sus, pe Valea Popii. la o distanta de aprox 4 km de celelalte 2 pensiuni.

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
      <div className="mt-0  sm:mt-14 md:mt-0">
        <Footer />
      </div>
    </div>
  );
};

export default Pensiunea3;
