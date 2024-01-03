import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./membership.css";
import { Bounce, Fade } from "react-awesome-reveal";
const Membership = () => {
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
                              <h1 className="sc_layouts_title_caption">
                                ClEOPARK Membership
                              </h1>
                            </Bounce>
                            <ul class="breadcrumb">
                              <Fade direction="up" duration={2000}>
                                <li>
                                  <Link to="/">Home</Link>
                                </li>

                                <li>Membership</li>
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
      <article class="post_item_single post_type_page post-91 page type-page status-publish hentry ">
        <div class="post_content entry-content ">
          <div class="wpb-content-wrapper ">
            <section
              className="membership-first-section"
              style={{ marginTop: "14vh" }}
            >
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="false"
                class="vc_row wpb_row vc_row-fluid vc_custom_1498994231680 vc_row-has-fill  "
                style={{ paddingBottom: "25vh" }}
              >
                <Container>
                  <div class="wpb_column vc_column_container vc_col-sm-6 vc_col-md-5 sc_layouts_column_icons_position_left ">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper" style={{ marginTop: "25vh" }}>
                        <div
                          id="sc_title_1985876374"
                          class="sc_title color_style_default sc_title_default"
                        >
                          <h6 class="sc_item_subtitle sc_title_subtitle sc_align_right sc_item_title_style_default">
                            Explore our membership options
                          </h6>
                          <h2 class="sc_item_title sc_title_title sc_align_right sc_item_title_style_default sc_item_title_tag">
                            Individual Season Pass
                          </h2>
                        </div>

                        <div class="wpb_text_column wpb_content_element ">
                          <div class="wpb_wrapper">
                            <p className="text-end mt-4">
                              from
                              <span class="trx_addons_accent_big">$500</span>
                              <br />
                              Explore our membership options, see upcoming
                              events, and view our Gallery to learn more about
                              the plans for our new facility.
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link
                        to="/pricing"
                        class="d-flex align-items-center mt-5  ms-auto sc_button color_style_default sc_button_default sc_item_button sc_item_button_default sc_title_button sc_button_size_normal sc_button_icon_left sc_button_size_small  "
                      >
                        <span class="sc_button_title">view more</span>
                      </Link>
                    </div>
                  </div>
                </Container>
                <div class="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left mt-0">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper"></div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div
                data-vc-full-width="true"
                data-vc-full-width-init="false"
                class="vc_row wpb_row vc_row-fluid vc_custom_1498994565285 vc_row-has-fill"
              >
                <div class="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div
                        class="vc_empty_space  vc_custom_1502804526567 height_huge"
                        style={{ height: "32px" }}
                      >
                        <span class="vc_empty_space_inner"></span>
                      </div>
                      <div
                        id="sc_action_841212805"
                        class="sc_action color_style_default scheme_dark sc_action_default"
                      >
                        <h2 class="sc_item_title sc_action_title sc_align_center sc_item_title_style_default">
                          advantages <i>for</i> members
                        </h2>
                        <div class="sc_action_content sc_item_content">
                          <div class="sc_action_item sc_action_item_default sc_action_item_mc"></div>
                        </div>
                      </div>
                      <div
                        class="vc_empty_space  height_small"
                        style={{ height: "32px" }}
                      >
                        <span class="vc_empty_space_inner"></span>
                      </div>
                      <div class="sc_item_button sc_button_wrap sc_align_center">
                        <Link
                          href="#."
                          id="sc_button_2065966194"
                          class="sc_button color_style_default sc_button_alternative sc_button_size_large sc_button_icon_left sc_button_size_small"
                        >
                          <span class="sc_button_text">
                            <span class="sc_button_title">view details</span>
                          </span>
                        </Link>
                      </div>
                      <div
                        class="vc_empty_space  vc_custom_1502804583177 height_huge"
                        style={{ height: "32px" }}
                      >
                        <span class="vc_empty_space_inner"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <Container>
                <div class="vc_row wpb_row vc_row-fluid">
                  <div class="wpb_column vc_column_container vc_col-sm-12 sc_layouts_column_icons_position_left">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div
                          class="vc_empty_space  height_large"
                          style={{ height: "32px" }}
                        >
                          <span class="vc_empty_space_inner"></span>
                        </div>
                        <div
                          id="sc_content_1157617237"
                          class="sc_content color_style_default sc_content_grey sc_float_center"
                        >
                          <div class="sc_content_container">
                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                              <div class="wpb_column vc_column_container vc_col-sm-6 sc_layouts_column_icons_position_left">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div
                                      id="sc_price_724565927"
                                      class="sc_price color_style_default sc_price_horizontal"
                                    >
                                      <div class="sc_price_content sc_item_content">
                                        <div class="sc_price_item sc_price_item_horizontal">
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
                                            <Link
                                              href="#."
                                              class="sc_price_item_link sc_button"
                                            >
                                              learn more
                                            </Link>
                                          </div>
                                        </div>
                                        <div class="sc_price_item sc_price_item_horizontal">
                                          <div class="sc_price_item_info">
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
                                            <Link
                                              href="#"
                                              class="sc_price_item_link sc_button"
                                            >
                                              learn more
                                            </Link>
                                          </div>
                                        </div>
                                        <div class="sc_price_item sc_price_item_horizontal">
                                          <div class="sc_price_item_info">
                                            <div class="price-header">
                                              <div class="sc_price_item_price">
                                                <span class="sc_price_item_price_value">
                                                  $500
                                                </span>
                                              </div>
                                              <h3 class="sc_price_item_title">
                                                <span>
                                                  Individual Season Pass
                                                </span>
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
                                            <Link
                                              href="#"
                                              class="sc_price_item_link sc_button"
                                            >
                                              learn more
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="wpb_column vc_column_container vc_col-sm-6 vc_col-md-offset-1 vc_col-md-5 sc_layouts_column_icons_position_left">
                                <div class="vc_column-inner">
                                  <div class="wpb_wrapper">
                                    <div
                                      id="sc_title_1364120733"
                                      class="sc_title color_style_default sc_title_default"
                                    >
                                      <h6 class="sc_item_subtitle sc_title_subtitle sc_align_left sc_item_title_style_default">
                                        Our packages
                                      </h6>
                                      <h2 class="sc_item_title sc_title_title sc_align_left sc_item_title_style_default sc_item_title_tag">
                                        Explore our membership options
                                      </h2>
                                      <div class="sc_item_descr sc_title_descr sc_align_left">
                                        <p>
                                          With a full-size Olympic swimming pool
                                          as well as a kiddie pool with water
                                          feature, whether you are a single
                                          professional looking for somewhere to
                                          relax, swim, and sun bath or a family
                                          looking for fun for the kids and
                                          adults, you’ve come to the right club.
                                          On top of all that we also offer all
                                          the amenities of a private resort,
                                          right in your backyard.
                                        </p>
                                      </div>
                                      <div class="sc_item_button sc_button_wrap sc_align_left">
                                        <Link
                                          href="/about-us-style-2/"
                                          id="sc_button_2129179581"
                                          class="sc_button color_style_default sc_button_default sc_item_button sc_item_button_default sc_title_button sc_button_size_normal sc_button_icon_left sc_button_size_small  "
                                        >
                                          <span class="sc_button_title">
                                            view more
                                          </span>
                                        </Link>
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
                </div>
              </Container>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default Membership;
