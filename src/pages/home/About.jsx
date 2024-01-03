import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const About = () => {
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
  //2
  const handleMove2 = (e) => {
    const el = tiltRef2.current;
    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;

    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);

    const transformString = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1, 1, 1) `;
    el.style.transform = transformString;
  };

  const handleMouseOut2 = () => {
    const el = tiltRef2.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };

  const handleMouseDown2 = () => {
    const el = tiltRef2.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };

  const handleMouseUp2 = () => {
    const el = tiltRef2.current;
    el.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)  ";
  };
  return (
    <section className="about mega-section" id="about">
      <div className="container">
        <div className="content-block  ">
          <div className="row">
            <div
              className="col-12 col-lg-6 d-flex align-items-center order-1 order-lg-0 about-col pad-end  wow fadeInUp "
              data-wow-delay="0.6s"
            >
              <div className="text-area ">
                <div className="sec-heading  light-title ">
                  <div className="content-area">
                    <span
                      className=" pre-title       wow fadeInUp "
                      data-wow-delay=".2s"
                    >
                      about Us
                    </span>
                    <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                      <span className="hollow-text">trusted</span> by worldwide
                      clients since
                      <span className="featured-text">
                        {" "}
                        1980.{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 500 150"
                          preserveaspectratio="none"
                        >
                          <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                        </svg>
                      </span>
                    </h2>
                  </div>
                </div>
                <p className=" about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  officia molestiae dolorum tempora ut accusamus cupiditate!
                  Nesciunt tempora reiciendis libero voluptate!
                </p>
                <div className="info-items-list ">
                  <div className="row ">
                    <div className="col-9 col-xl-6">
                      <div className="info-item">
                        <i className="flaticon-medal  info-icon"></i>
                        <div className="info-content">
                          <h5 className="info-title">first on field </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, iste
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 col-xl-6">
                      <div className="info-item">
                        <i className="flaticon-game-console info-icon"></i>
                        <div className="info-content">
                          <h5 className="info-title">easy to reach </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, iste
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 col-xl-6">
                      <div className="info-item">
                        <i className="flaticon-map info-icon"></i>
                        <div className="info-content">
                          <h5 className="info-title">worldwide services </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, iste
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-9 col-xl-6">
                      <div className="info-item">
                        <i className="flaticon-technical-support-1  info-icon"></i>
                        <div className="info-content">
                          <h5 className="info-title">24/7 support </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur, iste
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cta-area">
                  <a className=" btn-solid reveal-start" href="#0">
                    Get in touch
                  </a>
                  <div className="signature ">
                    <div className="signature-img"></div>
                    <div className="signature-name">CEO &amp; Founder </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1 about-col  wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div
                className="img-area  "
                data-tilt=""
                ref={tiltRef}
                id="tilt"
                onMouseMove={handleMove}
                onMouseOut={handleMouseOut}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <div className="image   ">
                  <img
                    className="about-img img-fluid "
                    loading="lazy"
                    src="assets/images/about/3.png"
                    alt="Our vision"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block  ">
          <div className="row">
            <div
              className="col-12 col-lg-6 d-flex align-items-center about-col  wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="img-area  ">
                <div
                  className="image  "
                  data-tilt=""
                  ref={tiltRef2}
                  id="tilt2"
                  onMouseMove={handleMove2}
                  onMouseOut={handleMouseOut2}
                  onMouseDown={handleMouseDown2}
                  onMouseUp={handleMouseUp2}
                >
                  <img
                    className="about-img img-fluid "
                    loading="lazy"
                    src="assets/images/about/1.png"
                    alt="about"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 d-flex align-items-center about-col pad-start  wow fadeInUp "
              data-wow-delay="0.6s"
            >
              <div className="text-area ">
                <div className="sec-heading  light-title ">
                  <div className="content-area">
                    <span
                      className=" pre-title       wow fadeInUp "
                      data-wow-delay=".2s"
                    >
                      why choose us
                    </span>
                    <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                      Why our <span className="hollow-text">customers</span>{" "}
                      choose{" "}
                      <span className="featured-text">
                        working{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 500 150"
                          preserveaspectratio="none"
                        >
                          <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                        </svg>
                      </span>{" "}
                      with us
                    </h2>
                  </div>
                </div>
                <p className=" about-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  officia molestiae dolorum tempora ut accusamus cupiditate!
                  Nesciunt tempora reiciendis libero voluptate!
                </p>
                <div className="info-items-list">
                  <div className="row ">
                    <div className="col-12 ">
                      <div className="info-item">
                        <span className="info-number ">01.</span>
                        <div className="info-content">
                          <h5 className="info-title">latest technologies </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="info-item">
                        <span className="info-number ">02.</span>
                        <div className="info-content">
                          <h5 className="info-title">uniqe solutions </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="info-item">
                        <span className="info-number ">03.</span>
                        <div className="info-content">
                          <h5 className="info-title">powerful strategies </h5>
                          <p className="info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque repellendus minima reiciendis nobis
                            dolore obcaecati.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cta-area ">
                  <a className=" btn-solid " href="#0">
                    get in toutch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
