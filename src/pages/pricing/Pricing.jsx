import React from "react";

import "./pricing.css";
import { Container } from "react-bootstrap";
import { Bounce, Fade } from "react-awesome-reveal";

const Pricing = () => {
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
                                CLEOPARK Pricing
                              </h1>
                            </Bounce>
                            <ul className="breadcrumb">
                              <Fade direction="up" duration={2000}>
                                <li>
                                  <a href="/">Home</a>
                                </li>

                                <li>Pricing</li>
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
          <div class="vc_row wpb_row vc_row-fluid pt-5">
            <div class="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
              <div class="vc_column-inner">
                <div class="wpb_wrapper">
                  <div
                    id="sc_title_235785809"
                    class="sc_title color_style_default sc_title_default pb-5"
                  >
                    <div className="col-lg-6 col-12 mx-auto">
                      <h6 class="sc_item_subtitle sc_title_subtitle sc_align_center sc_item_title_style_default">
                        Lorem ipsum dolor
                      </h6>
                      <h2 class="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag pb-3">
                        price plans
                      </h2>
                      <p className="text-center  fs-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>

                  <div
                    id="sc_content_664796611"
                    class="sc_content color_style_default sc_content_default sc_float_center  vc_custom_1502446345581"
                  >
                    <div class="sc_content_container">
                      <div
                        id="sc_price_1370606057"
                        class="sc_price color_style_default sc_price_default"
                      >
                        <div class="sc_price_columns_wrap sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                          <div class="trx_addons_column-1_3">
                            <div class="sc_price_item sc_price_item_default">
                              <div class="sc_price_item_info">
                                <div class="price-header">
                                  <div class="sc_price_item_price">
                                    <span class="sc_price_item_price_value">
                                      $900
                                    </span>
                                  </div>
                                  <h3 class="sc_price_item_title">
                                    <span>Family Season Pass</span>
                                  </h3>
                                </div>
                                <div class="sc_price_item_details">
                                  <ul class="trx_addons_list trx_addons_list_square">
                                    <li>Up to 5 people</li>
                                    <li>3 month</li>
                                    <li>Unlimited Visits</li>
                                    <li>Drinks Discount</li>
                                  </ul>
                                </div>
                                <a
                                  href="#."
                                  class="sc_price_item_link sc_button sc_button_hover_slide_left sc_button_hover_style_extra"
                                >
                                  learn more
                                </a>
                              </div>
                            </div>
                          </div>

                          <div class="trx_addons_column-1_3">
                            <div class="sc_price_item sc_price_item_default">
                              <div className="price-overlay"></div>
                              <div class="sc_price_item_info  ">
                                <div class="price-header">
                                  <div class="sc_price_item_price">
                                    <span class="sc_price_item_price_value">
                                      $700
                                    </span>
                                  </div>
                                  <h3 class="sc_price_item_title">
                                    <span>Couple Season Pass</span>
                                  </h3>
                                </div>
                                <div class="sc_price_item_details">
                                  <ul class="trx_addons_list trx_addons_list_square">
                                    <li>2 people</li>
                                    <li>3 month</li>
                                    <li>Unlimited Visits</li>
                                    <li>Drinks Discount</li>
                                  </ul>
                                </div>
                                <a
                                  href="#."
                                  class="sc_price_item_link sc_button  sc_button_hover_slide_left sc_button_hover_style_extra"
                                >
                                  learn more
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="trx_addons_column-1_3">
                            <div class="sc_price_item sc_price_item_default">
                              <div class="sc_price_item_info">
                                <div class="price-header">
                                  <div class="sc_price_item_price">
                                    <span class="sc_price_item_price_value">
                                      $500
                                    </span>
                                  </div>
                                  <h3 class="sc_price_item_title">
                                    <span>Individual Season Pass</span>
                                  </h3>
                                </div>
                                <div class="sc_price_item_details">
                                  <ul class="trx_addons_list trx_addons_list_square">
                                    <li>1 person</li>
                                    <li>3 month</li>
                                    <li>Unlimited Visits</li>
                                    <li>Drinks Discount</li>
                                  </ul>
                                </div>
                                <a
                                  href="#."
                                  class="sc_price_item_link sc_button sc_button_hover_slide_left sc_button_hover_style_extra"
                                >
                                  learn more
                                </a>
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
