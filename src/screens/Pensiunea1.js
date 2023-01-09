import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Carousel } from "react-carousel-minimal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/p1/IMG_0828.JPG";
import img2 from "../assets/p1/IMG_0833.JPG";
import img3 from "../assets/p1/IMG_0834.JPG";
import img4 from "../assets/p1/IMG_0837.JPG";
import img5 from "../assets/p1/IMG_0839.JPG";
import img6 from "../assets/p1/IMG_0846.JPG";
import img7 from "../assets/p1/IMG_0851.JPG";
import img8 from "../assets/p1/IMG_0854.JPG";
import img9 from "../assets/p1/IMG_0865.JPG";
import img10 from "../assets/p1/IMG_0869.JPG";
import img11 from "../assets/p1/IMG_0871.JPG";
import img12 from "../assets/p1/IMG_0873.JPG";
import img13 from "../assets/p1/IMG_0874.JPG";
import img14 from "../assets/p1/IMG_0879.JPG";
import img15 from "../assets/p1/IMG_0882.JPG";
import img16 from "../assets/p1/IMG_0887.JPG";
import img17 from "../assets/p1/IMG_0895.JPG";
import img18 from "../assets/p1/IMG_0902.JPG";
import img19 from "../assets/p1/IMG_0903.JPG";
import img20 from "../assets/p1/IMG_0910.JPG";
import img21 from "../assets/p1/IMG_0913.JPG";
import img22 from "../assets/p1/IMG_0916.JPG";
import img23 from "../assets/p1/IMG_0921.JPG";
import img24 from "../assets/p1/IMG_0923.JPG";
import img25 from "../assets/p1/IMG_0931.JPG";
import img26 from "../assets/p1/IMG_0937.JPG";
import img27 from "../assets/p1/IMG_0940.JPG";
import img28 from "../assets/p1/IMG_0942.JPG";
import img29 from "../assets/p1/IMG_0946.JPG";
import img30 from "../assets/p1/IMG_0948.JPG";
import img31 from "../assets/p1/IMG_0949.JPG";
import img32 from "../assets/p1/IMG_0955.JPG";
import img33 from "../assets/p1/IMG_0992.JPG";

const Pensiunea1 = () => {
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
    {
      image: img22,
      caption: "",
    },
    {
      image: img23,
      caption: "",
    },
    {
      image: img24,
      caption: "",
    },
    {
      image: img25,
      caption: "",
    },
    {
      image: img26,
      caption: "",
    },
    {
      image: img27,
      caption: "",
    },
    {
      image: img28,
      caption: "",
    },
    {
      image: img29,
      caption: "",
    },
    {
      image: img30,
      caption: "",
    },
    {
      image: img31,
      caption: "",
    },
    {
      image: img32,
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
          -PENSIUNEA 1-
        </h1>
        <div className="h-100 sm:w-[80%] md:w-[90%] lg:ml-24 mt-10 lg:flex mx-auto">
          <img
            className="rounded-lg w-[75%] md:w-[80%] h-[225px] sm:h-[610px] object-cover mx-auto "
            src={img33}
            alt="/"
          />
          <div className="mt-10 lg:mt-0 md:ml-10 lg:w-[50%] w-[75%] mx-auto">
            <p className="md:w-[75%] w-full ">
              Pensiunea Vraja Muntelui 1 va ofera: <br></br>- parcare proprie, - gratar
              in curte, terasa acoperita, <br></br>- bar de zi, carma, restaurant rustic
              cu mancaruri traditionale, <br></br>- sala multifunctionala, <br></br>- loc de joaca
              pentru copii, <br></br>- 23 de camere duble, <br></br>- 2 apartamente cu 4 locuri
              fiecare <br></br>- 1 camera dubla cu jacuzzi, <br></br>- mese festive cu lautari, <br></br>-
              foc de tabara langa rau, <br></br>- plimbari cu sania, caruta, descoperirea
              activitatilor de la ferma sa a traditiilor locale Toate camerele
              au baie proprie, TV color, balcon, incalzire centrala.
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

export default Pensiunea1;
