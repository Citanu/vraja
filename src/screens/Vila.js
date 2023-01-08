import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/pv/IMG_0821.JPG";
import fundal from "../assets/pv/fundal.jpg";
import img2 from "../assets/pv/IMG_1482.JPG";
import img3 from "../assets/pv/IMG_1519.JPG";
import img4 from "../assets/pv/IMG_1541.JPG";
import img5 from "../assets/pv/IMG_1545.png";
import img6 from "../assets/pv/IMG_8645.jpg";
import img7 from "../assets/pv/IMG_8672.jpg";
import img8 from "../assets/pv/IMG_8676.jpg";
import img9 from "../assets/pv/IMG_8679.jpg";
import img10 from "../assets/pv/IMG_8685.jpg";
import img11 from "../assets/pv/IMG_8686.jpg";
import img12 from "../assets/pv/IMG_8695.jpg";
import img13 from "../assets/pv/IMG_8702.png";
import img14 from "../assets/pv/IMG_8725.jpg";
import img15 from "../assets/pv/IMG_8736.jpg";
import img16 from "../assets/pv/IMG_8755.jpg";
import img17 from "../assets/pv/IMG_8758.jpg";

const Vila = () => {
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
          -VILA-
        </h1>
        <div className="h-100 sm:w-[80%] md:w-[90%] lg:ml-24 mt-10 lg:flex mx-auto">
          <img
            className="rounded-lg w-[75%] md:w-[80%] h-[225px] sm:h-[610px] object-cover mx-auto "
            src={fundal}
            alt="/"
          />
          <div className="mt-10 lg:mt-0 md:ml-10 md:w-[50%] w-[75%] mx-auto">
            <p className="md:w-[75%] w-full">
            Vila Vraja Muntelui de 27 saptii de cazare in camere duble si triple, un mic centru spa cu sauna umeda si sauna uscata si cateva aparate pentru fitness.
Punem la dispozitia turistilor: foisor, gratar, loc de joaca pentru copii, sala de conferinte, internet wireless, TV ,un mic centru spa, partie de sanie, ski si tubing.
La parter se afla un mic restaurant(60 locuri) unde se serveste micul dejun, dar pot fi organizate si petreceri private.Vila Vraja Muntelui se afla in imediata apropiere a Pensiunii Vraja Muntelui 1 si este situata pe un deal, langa partia cu acelasi nume.

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
      <div className="mt-0  sm:mt-20 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Vila;
