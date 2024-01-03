import React, { useEffect, useRef, useState } from "react";

import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import OurClients from "./OurClients";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import News from "./News";

const Home = () => {
  const tiltRef = useRef(null);
  const tiltRef2 = useRef(null);
  //1
  const handleMove = (e) => {
    const el = tiltRef.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const transformString = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1, 1, 1) `;
    el.style.transform = transformString;
  };

  const handleMouseOut = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };

  const handleMouseDown = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };

  const handleMouseUp = () => {
    const el = tiltRef.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };

  return (
    <>
      {/* Banner */}
      <Banner />
      {/* About */}
      <About />
      {/* Services */}
      <Services />
      {/* Portfolio */}
      <Portfolio />
      {/* Our Clients */}
      <OurClients />
      {/* Pricing */}
      <Pricing />
      {/* Testimonials */}
      <Testimonials />
      {/* FAQ */}
      <Faq />
      {/* News */}
      <News />
    </>
  );
};

export default Home;
