import React from "react";
import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1502891735920 vc_row-has-fill scheme_dark py-5"
    >
      <div className="contact"></div>
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-offset-2 vc_col-md-8 sc_layouts_column_icons_position_left">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div
              id="sc_title_1778128106"
              className="sc_title color_style_default sc_title_default"
            >
              <h2 className="sc_item_title sc_title_title sc_align_center sc_item_title_style_default sc_item_title_tag">
                contact info
              </h2>
            </div>
            <div
              className="vc_empty_space  vc_custom_1502891126697 height_medium"
              style={{ height: "32px" }}
            >
              <span className="vc_empty_space_inner"></span>
            </div>
            <div
              id="sc_icons_897172485"
              className="sc_icons sc_icons_default sc_icons_size_medium sc_align_center"
            >
              <div className="sc_icons_columns_wrap sc_item_columns trx_addons_columns_wrap columns_padding_bottom">
                <div className="trx_addons_column-1_4">
                  <div className="sc_icons_item sc_icons_item_linked">
                    <div
                      id="sc_icons_897172485_icon-icon_phone"
                      className="sc_icons_icon sc_icon_type_ icon-icon_phone"
                    >
                      <span className="sc_icon_type_ icon-icon_phone"></span>
                    </div>
                    <h4 className="sc_icons_item_title">
                      <span className="text-main">
                        Call Us Today (+20)1553142006
                      </span>
                    </h4>
                    <Link
                      to="tel:tel:+201553142006"
                      className="sc_icons_item_link"
                    ></Link>
                  </div>
                </div>
                <div className="trx_addons_column-1_4">
                  <div className="sc_icons_item">
                    <div
                      id="sc_icons_897172485_icon-icon_clock"
                      className="sc_icons_icon sc_icon_type_ icon-icon_clock"
                    >
                      <span className="sc_icon_type_ icon-icon_clock"></span>
                    </div>
                    <h4 className="sc_icons_item_title">
                      <span>Work Time 10:00 - 17:00</span>
                    </h4>
                  </div>
                </div>
                <div className="trx_addons_column-1_4">
                  <div className="sc_icons_item">
                    <div
                      id="sc_icons_897172485_icon-icon_pin"
                      className="sc_icons_icon sc_icon_type_ icon-icon_pin"
                    >
                      <span className="sc_icon_type_ icon-icon_pin"></span>
                    </div>
                    <h4 className="sc_icons_item_title">
                      <span> Sharm el-Sheikh, Egypt</span>
                    </h4>
                  </div>
                </div>
                <div className="trx_addons_column-1_4">
                  <div className="sc_icons_item sc_icons_item_linked">
                    <div
                      id="sc_icons_897172485_icon-icon_envelope"
                      className="sc_icons_icon sc_icon_type_ icon-icon_envelope"
                    >
                      <span className="sc_icon_type_ icon-icon_envelope"></span>
                    </div>
                    <h4 className="sc_icons_item_title">
                      <Link
                        className="__cf_email__ "
                        href="mailto:cleoparkegy@outlook.com"
                      >
                        <span className=" text-main ">
                          cleoparkegy@outlook.com
                        </span>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
