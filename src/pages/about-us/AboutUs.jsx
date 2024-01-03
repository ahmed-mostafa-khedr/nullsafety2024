import React from "react";
import About from "../home/About.jsx";
import banner from "../../pages-header-background.jpg";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <section
        className="internal"
        style={{
          background: `url(${banner})`,
          padding: "25vh 0 10vh",
          backgroundSize: "100% 100%",

          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="col-6 d-block text-center  py-2 m-auto"
          style={{ boxShadow: "0 0 5px #fff" }}
        >
          <h1>About Us</h1>
          <ul class="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>About Us</li>
          </ul>
        </div>
      </section>
      <About />
    </>
  );
};

export default AboutUs;
