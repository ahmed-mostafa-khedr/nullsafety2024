import React, { useState } from "react";

import banner from "../../pages-header-background.jpg";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";
const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    // Your portfolio items array
    // Each item should have a "filter" property matching the data-filter values
    {
      id: 1,
      filter: "mobile",
      imgUrl: "assets/images/portfolio/1.jpg",
      title: "Mobile Apps",
    },
    {
      id: 2,
      filter: "web",
      imgUrl: "assets/images/portfolio/2.jpg",
      title: "Cloud",
    },
    {
      id: 3,
      filter: "data",
      imgUrl: "assets/images/portfolio/3.jpg",
      title: "Data Analysis",
    },
    {
      id: 4,
      filter: "mobile",
      imgUrl: "assets/images/portfolio/4.jpg",
      title: "Hosting",
    },
    {
      id: 5,
      filter: "hosting",
      imgUrl: "assets/images/portfolio/5.jpg",
      title: "SEO",
    },
    {
      id: 6,
      filter: "mobile",
      imgUrl: "assets/images/portfolio/6.jpg",
      title: "Other",
    },
  ];
  return (
    <>
      {" "}
      <Helmet>
        <title>Projects</title>
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
          <h1>Our Projects</h1>
          <ul class="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>Portfolio</li>
          </ul>
        </div>
      </section>
      <section
        className="portfolio portfolio-blocks mega-section   "
        id="portfolio"
      >
        <div className="container">
          <div className="sec-heading  ">
            <div className="content-area mx-auto text-center">
              <span
                className=" pre-title   mx-auto    wow fadeInUp "
                data-wow-delay=".2s"
              >
                portfolio
              </span>
              <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
                Our <span class="hollow-text">Projects</span>
              </h2>
            </div>
          </div>
          <div className="portfolio-wrapper  ">
            <ul
              className="portfolio-btn-list wow fadeInUp"
              data-wow-delay=".2s"
            >
              <li
                className={`portfolio-btn ${
                  activeFilter === "*" ? "active" : ""
                }`}
                data-filter="*"
                onClick={() => handleFilterClick("*")}
              >
                All
              </li>
              <li
                className={`portfolio-btn ${
                  activeFilter === "mobile" ? "active" : ""
                }`}
                data-filter="mobile"
                onClick={() => handleFilterClick("mobile")}
              >
                mobile apps
              </li>
              <li
                className={`portfolio-btn ${
                  activeFilter === "web" ? "active" : ""
                }`}
                data-filter="web"
                onClick={() => handleFilterClick("web")}
              >
                cloud
              </li>
              <li
                className={`portfolio-btn ${
                  activeFilter === "data" ? "active" : ""
                }`}
                data-filter="data"
                onClick={() => handleFilterClick("data")}
              >
                data analysis
              </li>
              <li
                className={`portfolio-btn ${
                  activeFilter === "hosting" ? "active" : ""
                }`}
                data-filter="hosting"
                onClick={() => handleFilterClick("hosting")}
              >
                hosting
              </li>
            </ul>
            <div className="portfolio-group wow fadeIn" data-wow-delay=".4s">
              <div className="row">
                {portfolioItems
                  .filter(
                    (item) =>
                      activeFilter === "*" || item.filter === activeFilter
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className={`col-12 col-md-6 col-lg-4 portfolio-item ${item.filter}`}
                    >
                      <Bounce cascade delay={0.5}>
                        <div className="item">
                          <a
                            className="portfolio-img-link"
                            href={item.imgUrl}
                            data-fancybox=".show-in-fancybox"
                          >
                            <img
                              className="portfolio-img img-fluid"
                              loading="lazy"
                              src={item.imgUrl}
                              alt={`Portfolio ${item.id}`}
                            />
                          </a>
                          <div className="item-info">
                            <h3 className="item-title">{item.title}</h3>
                            <i className="bi bi-eye icon"></i>
                          </div>
                        </div>
                      </Bounce>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
