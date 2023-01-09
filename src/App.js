import React from "react";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Cabana1 from "./screens/Cabana1";
import Cabana2 from "./screens/Cabana2";
import HomeScreen from "./screens/HomeScreen";
import Pensiunea1 from "./screens/Pensiunea1";
import Pensiunea2 from "./screens/Pensiunea2";
import Pensiunea3 from "./screens/Pensiunea3";
import Vila from "./screens/Vila";
import Cazari from "./screens/Cazari";
import Restaurant1 from "./screens/Restaurant1";
import Restaurant2 from "./screens/Restaurant2";
import Restaurant3 from "./screens/Restaurant3";
import Restaurant from "./screens/Restaurant";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cazari" element={<Cazari />} />
          <Route path="/restaurante" element={<Restaurant />} />
          <Route path="/pensiunea1" element={<Pensiunea1 />} />
          <Route path="/restaurant1" element={<Restaurant1 />} />
          <Route path="/pensiunea2" element={<Pensiunea2 />} />
          <Route path="/restaurant2" element={<Restaurant2 />} />
          <Route path="/pensiunea3" element={<Pensiunea3 />} />
          <Route path="/restaurant3" element={<Restaurant3 />} />
          <Route path="/cabana1" element={<Cabana1 />} />
          <Route path="/cabana2" element={<Cabana2 />} />
          <Route path="/vila" element={<Vila />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
