import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import banner from "../../pages-header-background.jpg";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
const Activities = () => {
  return (
    <>
      <Helmet>
        <title>Faq</title>
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
          <h1>Faq</h1>
          <ul class="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>Faq</li>
          </ul>
        </div>
      </section>
      <section className="row">
        <Container>
          <section className="faq mega-section   " id="faq">
            <div className="shape-top-left"></div>
            <div className="shape-bottom-right"></div>
            <div className="pattern-top-end-dir"></div>
            <div className="pattern-bottom-start-dir"></div>
            <div className="container">
              <div className="row mx-auto">
                <div className="col-12 col-lg-12 mx-auto ">
                  <div className="sec-heading  ">
                    <div className="content-area text-center mx-auto">
                      <span
                        className=" pre-title   text-center mx-auto    wow fadeInUp "
                        data-wow-delay=".2s"
                      >
                        FAQs
                      </span>
                      <h2
                        className=" title    wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <span class="hollow-text">frequently </span> asked
                        questions{" "}
                      </h2>
                    </div>
                  </div>

                  <div className="faq-accordion " id="accordion">
                    <div className="card mb-2">
                      <div className="card-header " id="heading-1">
                        <h5 className="mb-0 faq-title">
                          <button
                            className="btn btn-link  faq-btn  collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-1"
                            aria-expanded="true"
                            aria-controls="collapse-1"
                          >
                            are your service easy to use?
                          </button>
                        </h5>
                      </div>
                      <div
                        className="collapse "
                        id="collapse-1"
                        aria-labelledby="collapse-1"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p className="faq-answer">
                            mhmd, Anim pariatur cliche reprehenderit, enim
                            eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat
                            skateboard dolor brunch. Food truck quinoa nesciunt
                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee
                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-header " id="heading-2">
                        <h5 className="mb-0 faq-title">
                          <button
                            className="btn btn-link  faq-btn  collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-2"
                            aria-expanded="true"
                            aria-controls="collapse-2"
                          >
                            will i receive future updates?
                          </button>
                        </h5>
                      </div>
                      <div
                        className="collapse "
                        id="collapse-2"
                        aria-labelledby="collapse-2"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p className="faq-answer">
                            mhmd, Anim pariatur cliche reprehenderit, enim
                            eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat
                            skateboard dolor brunch. Food truck quinoa nesciunt
                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee
                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-header " id="heading-3">
                        <h5 className="mb-0 faq-title">
                          <button
                            className="btn btn-link  faq-btn  collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-3"
                            aria-expanded="true"
                            aria-controls="collapse-3"
                          >
                            is this services work in my country?
                          </button>
                        </h5>
                      </div>
                      <div
                        className="collapse "
                        id="collapse-3"
                        aria-labelledby="collapse-3"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p className="faq-answer">
                            mhmd, Anim pariatur cliche reprehenderit, enim
                            eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat
                            skateboard dolor brunch. Food truck quinoa nesciunt
                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee
                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-2">
                      <div className="card-header " id="heading-4">
                        <h5 className="mb-0 faq-title">
                          <button
                            className="btn btn-link  faq-btn  collapsed "
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-4"
                            aria-expanded="true"
                            aria-controls="collapse-4"
                          >
                            How much I will pay?
                          </button>
                        </h5>
                      </div>
                      <div
                        className="collapse "
                        id="collapse-4"
                        aria-labelledby="collapse-4"
                        data-bs-parent="#accordion"
                      >
                        <div className="card-body">
                          <p className="faq-answer">
                            mhmd, Anim pariatur cliche reprehenderit, enim
                            eiusmod high life accusamus terry richardson ad
                            squid. 3 wolf moon officia aute, non cupidatat
                            skateboard dolor brunch. Food truck quinoa nesciunt
                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                            aliqua put a bird on it squid single-origin coffee
                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
};

export default Activities;
