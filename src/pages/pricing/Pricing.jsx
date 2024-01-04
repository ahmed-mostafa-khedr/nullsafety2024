import React from "react";

import "./pricing.css";
import { Container, NavLink } from "react-bootstrap";
import { Bounce, Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import banner from "../../pages-header-background.jpg";
import Pricing from "./../home/Pricing.jsx";
import { Link } from "react-router-dom";
const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing</title>
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
          <h1>Pricing</h1>
          <ul class="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>Pricing</li>
          </ul>
        </div>
      </section>
      <section className="pricing mega-section  " id="pricing">
        <div className="container">
          <div className="sec-heading  ">
            <div className="content-area mx-auto text-center">
              <span
                className=" pre-title mx-auto    wow fadeInUp "
                data-wow-delay=".2s"
              >
                pricing plans
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                <span className="hollow-text">affordable</span> pricing plans
              </h2>
              <p className="subtitle   wow fadeInUp " data-wow-delay=".6s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis{" "}
                <br />
                id atque dignissimos repellat quae ullam.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12  col-md-6 col-xl-3  mx-auto price-plan ">
              <div className="plan    wow fadeInUp  " data-wow-delay=".1s ">
                <div className="plan-head">
                  <i className="flaticon-nft-1 plan-icon"></i>
                  <h4 className="plane-name">free plan</h4>
                  <div className="plan-price">
                    <h3 className="price">
                      00<sup className="currency-symbol">$</sup>
                    </h3>
                    <span className="per">per project</span>
                  </div>
                </div>
                <div className="plan-details">
                  <ul className="plan-list">
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        150 Lorem, ipsum dolor.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        20 Lorem ipsum dolor sit .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        Lorem ipsum dolor sit.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        free Lorem ipsum dolor .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        added Lorem ipsum dolor.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a className="cta-btn btn-outline " href="#0">
                    select plan{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12  col-md-6 col-xl-3  mx-auto price-plan ">
              <div className="plan    wow fadeInUp  " data-wow-delay=".3s ">
                <div className="plan-head">
                  <i className="flaticon-virtual-reality plan-icon"></i>
                  <h4 className="plane-name">standerd plan</h4>
                  <div className="plan-price">
                    <h3 className="price">
                      85<sup className="currency-symbol">$</sup>
                    </h3>
                    <span className="per">per project</span>
                  </div>
                </div>
                <div className="plan-details">
                  <ul className="plan-list">
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        150 Lorem, ipsum dolor.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        20 Lorem ipsum dolor sit .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        Lorem ipsum dolor sit.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        free Lorem ipsum dolor .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        added Lorem ipsum dolor.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a className="cta-btn btn-outline " href="#0">
                    select plan{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12  col-md-6 col-xl-3  mx-auto price-plan ">
              <div
                className="plan   featured  wow fadeInUp  "
                data-wow-delay=".5s "
              >
                <div className="plan-head">
                  <i className="flaticon-box plan-icon"></i>
                  <h4 className="plane-name">pro plan</h4>
                  <div className="plan-price">
                    <h3 className="price">
                      150<sup className="currency-symbol">$</sup>
                    </h3>
                    <span className="per">per project</span>
                  </div>
                </div>
                <div className="plan-details">
                  <ul className="plan-list">
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        150 Lorem, ipsum dolor.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        20 Lorem ipsum dolor sit .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        Lorem ipsum dolor sit.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        free Lorem ipsum dolor .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        added Lorem ipsum dolor.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a className="cta-btn btn-outline " href="#0">
                    select plan{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12  col-md-6 col-xl-3  mx-auto price-plan ">
              <div className="plan    wow fadeInUp  " data-wow-delay=".6s ">
                <div className="plan-head">
                  <i className="flaticon-basic-shapes plan-icon"></i>
                  <h4 className="plane-name">ultimate plan</h4>
                  <div className="plan-price">
                    <h3 className="price">
                      210<sup className="currency-symbol">$</sup>
                    </h3>
                    <span className="per">per project</span>
                  </div>
                </div>
                <div className="plan-details">
                  <ul className="plan-list">
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        150 Lorem, ipsum dolor.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        20 Lorem ipsum dolor sit .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        Lorem ipsum dolor sit.{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        free Lorem ipsum dolor .{" "}
                      </span>
                    </li>
                    <li className="plan-feat ">
                      {" "}
                      <span className="feat-text">
                        {" "}
                        added Lorem ipsum dolor.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-cta">
                  <a className="cta-btn btn-outline " href="#0">
                    select plan{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
