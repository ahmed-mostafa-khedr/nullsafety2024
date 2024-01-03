import React, { useState } from "react";
import { Bounce } from "react-awesome-reveal";
const WelcomeSection = () => {
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
    <section
      className="portfolio portfolio-blocks mega-section   "
      id="portfolio"
    >
      <div className="container">
        <div className="sec-heading  ">
          <div className="content-area">
            <span
              className=" pre-title       wow fadeInUp "
              data-wow-delay=".2s"
            >
              portfolio
            </span>
            <h2 className=" title    wow fadeInUp" data-wow-delay=".4s">
              Awesome <span class="hollow-text">portfolio</span>
            </h2>
          </div>
          <div className=" cta-area   wow fadeInUp" data-wow-delay=".8s">
            <a className="cta-btn btn-solid    " href="#.">
              see more
              <i className="bi bi-arrow-right icon "></i>
            </a>
          </div>
        </div>
        <div className="portfolio-wrapper  ">
          <ul className="portfolio-btn-list wow fadeInUp" data-wow-delay=".2s">
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
                  (item) => activeFilter === "*" || item.filter === activeFilter
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
  );
};

export default WelcomeSection;
