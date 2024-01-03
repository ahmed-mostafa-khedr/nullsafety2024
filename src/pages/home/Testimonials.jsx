import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerGroup: 1, // Add this line to define slidesPerGroup
    prevArrow: (
      <div class="swiper-button-prev">
        <div class="left-arrow">
          <i class="bi bi-chevron-left icon "></i>
        </div>
      </div>
    ),
    nextArrow: (
      <div class="swiper-button-next">
        <div class="right-arrow">
          <i class="bi bi-chevron-right icon "></i>
        </div>
      </div>
    ),
  };
  return (
    <section
      className="testimonials testimonials-1-col has-dark-bg mega-section"
      id="testimonials"
    >
      <div
        className="overlay-photo-image-bg parallax"
        data-bg-img="assets/images/sections-bg-images/1.jpg"
        data-bg-opacity=".25"
      ></div>
      <div className="container">
        <div className="sec-heading centered">
          <div className="content-area">
            <span className="pre-title wow fadeInUp" data-wow-delay=".2s">
              testimonials
            </span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              customers <span className="hollow-text">testimonials</span>
            </h2>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-10 mx-auto">
            <Slider
              {...settings}
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testmonial-card d-flex align-items-center justify-content-center">
                <div className="testimonial-content">
                  <div className="customer-img">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="assets/images/testimonials/1.png"
                      alt="First Slide"
                    />
                  </div>
                  <div className="customer-testimonial">
                    <div className="content">
                      <p className="testimonial-text">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        id sequi aut qui est ab, corporis quis maiores
                        reiciendis explicabo odio tenetur nulla sint vel.
                      </p>
                    </div>
                  </div>
                  <div className="customer-info">
                    <div className="customer-details">
                      <p className="customer-name">Yusuf amin</p>
                      <p className="customer-role">founder</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testmonial-card d-flex align-items-center justify-content-center">
                <div className="testimonial-content">
                  <div className="customer-img">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="assets/images/testimonials/2.png"
                      alt="First Slide"
                    />
                  </div>
                  <div className="customer-testimonial">
                    <div className="content">
                      <p className="testimonial-text">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        id sequi aut qui est ab, corporis quis maiores
                        reiciendis explicabo odio tenetur nulla sint vel.
                      </p>
                    </div>
                  </div>
                  <div className="customer-info">
                    <div className="customer-details">
                      <p className="customer-name">fouad osman</p>
                      <p className="customer-role">officer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testmonial-card d-flex align-items-center justify-content-center">
                <div className="testimonial-content">
                  <div className="customer-img">
                    <img
                      className="img-fluid"
                      loading="lazy"
                      src="assets/images/testimonials/3.png"
                      alt="First Slide"
                    />
                  </div>
                  <div className="customer-testimonial">
                    <div className="content">
                      <p className="testimonial-text">
                        ipsum dolor sit amet consectetur adipisicing elit. Quod,
                        id sequi aut qui est ab, corporis quis maiores
                        reiciendis explicabo odio tenetur nulla sint vel.
                      </p>
                    </div>
                  </div>
                  <div className="customer-info">
                    <div className="customer-details">
                      <p className="customer-name">fairouz mhmd</p>
                      <p className="customer-role">manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
