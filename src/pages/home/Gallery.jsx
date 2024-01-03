import React from "react";
import { Link } from "react-router-dom";
import Fancybox from "../../components/fancybox-library/fancybox";
import { Container } from "react-bootstrap";
import styles from "./css/gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Gallery = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="false"
      data-vc-stretch-content="true"
      className="vc_row wpb_row vc_row-fluid vc_row-no-padding"
    >
      <div className="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              id="sc_title_264593310"
              className="sc_title color_style_default sc_title_default mb-5 pb-5"
            >
              <h6 className="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_title_style_default">
                Enjoyment and activities that never end
              </h6>
              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag">
                <Link to="gallery" className={styles.titleLink}>
                  visit gallery page
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-up-right-from-square"
                    className={`ms-2 text-sec ${styles.arrow}`}
                  />
                </Link>
              </h2>
            </div>

            <article
              className="myportfolio-container esg-grid-wrap-container minimal-light esg-entry-skin-playa source_type_post"
              id="esg-grid-1-1-wrap"
              data-alias="Home Gallery"
            >
              <div
                className={styles.gallery}
                style={{ margin: "auto", textAlign: "center" }}
              >
                <Fancybox
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-18.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition`}
                  >
                    <a
                      class={`eg-playa-element-0 eg-post-157 esgbox esgboxffssii ${styles.egplayaelement0a}`}
                      href="images/06/image-18.jpg"
                    >
                      <i className="eg-icon-plus"></i>
                    </a>
                    <img
                      alt=""
                      src="images/06/image-18.jpg"
                      width="368"
                      height="368"
                    />
                  </a>
                  <a
                    data-fancybox="gallery"
                    href="images/06/image-17.jpg"
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition`}
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
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition`}
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
                    className={`esg-center  eg-post-157 eg-playa-element-0  esg-transition`}
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
                </Fancybox>
              </div>
              <div
                id="esg-grid-1-1"
                className="esg-grid"
                style={{
                  background: "transparent",
                  padding: "0px 0px 0px 0px",
                  boxSizing: "border-box",
                  mozBoxSizing: "border-box",
                  webkitBoxSizing: "border-box",
                  display: "none",
                }}
              ></div>
            </article>
            <div className="clear"></div>

            <div
              className="vc_empty_space  vc_custom_1502888674091 height_medium"
              style={{ height: "32px" }}
            >
              <span className="vc_empty_space_inner"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
