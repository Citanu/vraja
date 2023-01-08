import React from "react";
import Cazare from "../components/Cazare";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Restaurante from "../components/Restaurante";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cazare />
      <div className="mt-10">
        <Restaurante />
      </div>
      <Destinations />
      <Footer />
    </div>
  );
};

export default HomeScreen;
