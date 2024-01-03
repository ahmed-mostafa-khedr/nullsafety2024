import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Fancybox from "../../components/fancybox-library/fancybox";
import styles from "../home/css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated } from "react-spring";
import "./gallery.css";
import { Bounce, Fade } from "react-awesome-reveal";
const Gallery = () => {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  const toggleView = () => {
    setTimeout(() => {
      setIsHidden(!isHidden);
    }, 200);
  };

  // Define the spring animation
  const animation = useSpring({
    opacity: isHidden ? 1 : 1,
    transform: `translateY(${isHidden ? "50px" : "0px"})`, // Adjust the values as needed
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 770,
      behavior: "smooth", // Add smooth scrolling behavior for a nicer effect
    });
  };
  return (
    <>
      <section id="less">
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1502376432008 vc_row-has-fill sc_layouts_row sc_layouts_row_type_normal sc_layouts_hide_on_frontpage scheme_dark">
          <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column sc_layouts_column_align_center sc_layouts_column_icons_position_left">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div
                  id="sc_content_1271549084"
                  className="sc_content color_style_default sc_content_default sc_content_width_1_1 sc_float_center"
                >
                  <div className="sc_content_container">
                    <div className="sc_layouts_item">
                      <div
                        id="sc_layouts_title_520295187"
                        className="sc_layouts_title with_content"
                      >
                        <div className="sc_layouts_title_content">
                          <div className="sc_layouts_title_title">
                            <Bounce headShake duration={2000}>
                              {" "}
                              <h1 className="sc_layouts_title_caption">
                                CLEOPARK Gallery
                              </h1>
                            </Bounce>
                            <ul className="breadcrumb">
                              <Fade direction="up" duration={2000}>
                                <li>
                                  <a href="/">Home</a>
                                </li>

                                <li>Gallery</li>
                              </Fade>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="first-section mb-5 pb-5">
        <Container>
          <div className="sc_title color_style_default sc_title_default mb-5 pb-5">
            <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag">
              <a
                href="#."
                className={`text-main  ${styles.titleLink}`}
                style={{ color: "#00516f" }}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-photo-film"
                  className={`me-2 txt-sec  `}
                />
                OUR Gallery
              </a>
            </h2>
          </div>

          <div
            className={styles.gallery}
            style={{ margin: "auto", textAlign: "center" }}
          >
            <Fancybox>
              <div className="d-block">
                <div className="gallery-page d-flex flex-wrap">
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-18.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii  ${styles.egplayaelement0a}`}
                      href="images/06/image-18.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img alt="" src="images/06/image-18.jpg" />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-17.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-17.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img
                      alt=""
                      src="images/06/image-17.jpg"
                      width="368"
                      height="368"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                    href="images/06/image-16.jpg"
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-16.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img
                      alt=""
                      src="images/06/image-16.jpg"
                      width="368"
                      height="368"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-15.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-17.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img
                      alt=""
                      src="images/06/image-15.jpg"
                      width="368"
                      height="368"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-19.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-19.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img alt="" src="images/06/image-19.jpg" />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-20.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-20.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img alt="" src="images/06/image-20.jpg" />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-21.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-21.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img alt="" src="images/06/image-21.jpg" />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-22.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-22.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img alt="" src="images/06/image-22.jpg" />
                  </a>
                </div>
                <div className="container-more d-block">
                  <animated.div
                    className={`items-container ${
                      isHidden ? "hidden" : "visible mb-2"
                    }`}
                    style={animation}
                  >
                    <Fancybox>
                      <div className="gallery-page d-flex flex-wrap">
                        <a
                          id="more"
                          data-fancybox="gallery"
                          href="images/06/image-18.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii  ${styles.egplayaelement0a}`}
                            href="images/06/image-18.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img alt="" src="images/06/image-18.jpg" />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-17.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-17.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img
                            alt=""
                            src="images/06/image-17.jpg"
                            width="368"
                            height="368"
                          />
                        </a>
                        <a
                          data-fancybox="gallery"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                          href="images/06/image-16.jpg"
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-16.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img
                            alt=""
                            src="images/06/image-16.jpg"
                            width="368"
                            height="368"
                          />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-15.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-17.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img
                            alt=""
                            src="images/06/image-15.jpg"
                            width="368"
                            height="368"
                          />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-19.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-19.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img alt="" src="images/06/image-19.jpg" />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-20.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-20.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img alt="" src="images/06/image-20.jpg" />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-21.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-21.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img alt="" src="images/06/image-21.jpg" />
                        </a>
                        <a
                          data-fancybox="gallery"
                          href="images/06/image-22.jpg"
                          className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition col-3`}
                        >
                          <a
                            class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                            href="images/06/image-22.jpg"
                          >
                            <i className="eg-icon-plus"></i>
                          </a>
                          <img alt="" src="images/06/image-22.jpg" />
                        </a>
                      </div>
                    </Fancybox>
                  </animated.div>
                  <button
                    className="bg-main sc_button_icon_left sc_button_size_small d-block  m-auto text-center"
                    onClick={() => {
                      toggleView();
                      !isHidden ? scrollToTop() : navigate("#more");
                    }}
                  >
                    {isHidden ? "View More" : "View Less"}
                  </button>
                </div>
              </div>
            </Fancybox>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
