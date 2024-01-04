import React from "react";
import Services from "../home/Services.jsx";
import banner from "../../pages-header-background.jpg";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
const ServicesPage = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>Our Services</title>
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
          <h1>Our Services</h1>
          <ul class="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>Services</li>
          </ul>
        </div>
      </section>
      <section className="services services-boxed mega-section  " id="services">
        <div className="container">
          <div className="sec-heading  ">
            <div className="content-area mx-auto text-center">
              <span
                className=" pre-title    mx-auto   wow fadeInUp "
                data-wow-delay=".2s"
              >
                services
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                <span className="hollow-text">services</span> we offer
              </h2>
              <p className="subtitle   wow fadeInUp " data-wow-delay=".6s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis{" "}
                <br />
                id atque dignissimos repellat quae ullam.
              </p>
            </div>
          </div>
          <div className="row gx-4 gy-4 services-row ">
            <div className="col-12 col-md-12  col-lg-12 mx-auto ">
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay=".1s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-web-development font-icon"></i>
                </div>
                <span className="service-num hollow-text ">1 </span>
                <div className="service-content text-center mx-auto">
                  <h3 className="service-title">web development</h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit,Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 mx-auto ">
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay=".2s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-nanotechnology font-icon"></i>
                </div>
                <span className="service-num hollow-text">2 </span>
                <div className="service-content mx-auto text-center">
                  <h3 className="service-title">Digital Marketing</h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 mx-auto  ">
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay=".3s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-web-domain font-icon"></i>
                </div>
                <span className="service-num hollow-text">3 </span>
                <div className="service-content mx-auto text-center">
                  <h3 className="service-title">SaaS products </h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 mx-auto  ">
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay=".4s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-profile font-icon"></i>
                </div>
                <span className="service-num hollow-text">4 </span>
                <div className="service-content mx-auto text-center">
                  <h3 className="service-title">Apps development</h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 mx-auto  ">
              <div
                className="box service-box  wow fadeInUp reveal-start"
                data-wow-offset="0"
                data-wow-delay=".5s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-search font-icon"></i>
                </div>
                <span className="service-num hollow-text">5 </span>
                <div className="service-content mx-auto text-center">
                  <h3 className="service-title">SEO services</h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-12 mx-auto  ">
              <div
                className="box service-box  wow fadeInUp  reveal-start"
                data-wow-offset="0"
                data-wow-delay=".6s"
              >
                <div className="service-icon mx-auto text-center">
                  <i className="flaticon-strategy font-icon"></i>
                </div>
                <span className="service-num hollow-text">6 </span>
                <div className="service-content mx-auto text-center">
                  <h3 className="service-title">data analysis</h3>
                  <p className="service-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
