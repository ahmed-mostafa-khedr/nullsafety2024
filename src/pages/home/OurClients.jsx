import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const OurClients = () => {
  return (
    <section
      className="our-clients  mega-section   wow fadeInUp"
      id="our-clients"
      data-wow-delay="0.2s"
    >
      <div className="container">
        <div className="sec-heading   centered ">
          <div className="content-area">
            <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
              trusted by +500 clients around the world
            </h2>
          </div>
        </div>
        <div className=" clients-logos d-flex align-items-center justify-content-around flex-wrap">
          <Swiper
            spaceBetween={40}
            slidesPerView={6}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop
          >
            <SwiperSlide className="swiper-slide">
              <div className="client-logo  ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/1-white.png"
                    alt="client"
                  />
                </a>
              </div>
              client
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/2-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/3-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/4-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/5-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/6-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="client-logo ">
                <a href="#0">
                  <img
                    className="img-fluid logo "
                    loading="lazy"
                    src="assets/images/clients-logos/7-white.png"
                    alt="client"
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
