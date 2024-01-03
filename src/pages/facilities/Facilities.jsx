import React from "react";

import "./facilities.css";
import Facilities from "../home/Facilities";
import { Bounce, Fade } from "react-awesome-reveal";
const FacilitiesPage = () => {
  return (
    <>
      <section>
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
                                CLEOPARK Facilities
                              </h1>
                            </Bounce>
                            <ul className="breadcrumb">
                              <Fade direction="up" duration={2000}>
                                {" "}
                                <li>
                                  <a href="/">Home</a>
                                </li>
                                <li>Facilities</li>
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
      <section id="facilities">
        <div
          id="sc_title_235785809"
          class="sc_title color_style_default sc_title_default py-5 mb-5"
        >
          <div
            className="col-lg-6 col-12 mx-auto"
            style={{ marginTop: "24vh" }}
          >
            <h6 class="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_title_style_default">
              More than just a pool
            </h6>
            <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag pb-3">
              OUR POOL FACILITIES
            </h2>
            <p className="text-center  fs-4">
              We offer all the options that a traditional club does without an
              expensive bond required to join.
            </p>
          </div>
          <Facilities />
        </div>
      </section>
    </>
  );
};

export default FacilitiesPage;
