import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

// import Loader from "../Loader";

const Layout = () => {
  const [active, setActive] = useState("");
  const [show, setShow] = useState(true);
  const [isLightTheme, setLightTheme] = useState(true);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold as needed
      const scrollThreshold = 100;

      // Check if the scroll position exceeds the threshold
      if (scrollPosition > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]); // Empty dependency array ensures the effect runs only once on mount

  const toggleThemeLight = () => {
    setLightTheme((prevTheme) => !prevTheme);
    // Toggle the class on the body element
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
  };
  const toggleThemeDark = () => {
    setLightTheme((prevTheme) => !prevTheme);
    // Toggle the class on the body element
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
  };
  return (
    <>
      <header
        className={isSticky ? "header-basic is-sticky" : "header-basic"}
        id="page-header"
      >
        <div className="header-search-box">
          <div className="close-search"></div>
          <form
            className="nav-search search-form"
            role="search"
            method="get"
            action="#"
          >
            <div className="search-wrapper">
              <label className="search-lbl">Search for:</label>
              <input
                className="search-input"
                type="search"
                placeholder="Search..."
                name="searchInput"
                autofocus="autofocus"
              />
              <button className="search-btn" type="submit">
                <i className="bi bi-search icon"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <nav className="menu-navbar" id="main-nav">
            <div className="header-logo">
              <NavLink
                className="logo-link"
                to="/"
                onClick={() => setActive("home")}
                end
              >
                <img
                  className="logo-img light-logo"
                  loading="lazy"
                  src="logo.png"
                  alt="logo"
                  style={{ filter: "brightness(20)" }}
                />
                <img
                  className="logo-img  dark-logo"
                  loading="lazy"
                  src="logo.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="links menu-wrapper ">
              <ul className="d-flex  list-unstyled ">
                <li className="nav-item menu-item has-sub-menu">
                  <Link
                    className={`nav-link menu-link  ${
                      active === "home" ? "active" : ""
                    } `}
                    to="/"
                    onClick={() => setActive("home")}
                  >
                    home
                  </Link>
                </li>
                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("about")}
                >
                  <NavLink
                    className={`nav-link menu-link  ${
                      active === "about" ? "active" : ""
                    } `}
                    to="about"
                  >
                    about us{" "}
                  </NavLink>
                </li>
                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("services")}
                >
                  <Nav.Link
                    className={`nav-link menu-link  ${
                      active === "services" ? "active" : ""
                    } `}
                    href="#services"
                  >
                    services
                  </Nav.Link>
                </li>

                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("portfolio")}
                >
                  <Nav.Link
                    className={`nav-link menu-link  ${
                      active === "portfolio" ? "active" : ""
                    } `}
                    href="#portfolio"
                  >
                    portfolio{" "}
                  </Nav.Link>
                </li>
                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("pricing")}
                >
                  <Nav.Link
                    className={`nav-link menu-link  ${
                      active === "pricing" ? "active" : ""
                    } `}
                    href="#pricing"
                  >
                    pricing plans{" "}
                  </Nav.Link>
                </li>
                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("testimonials")}
                >
                  <Nav.Link
                    className={`nav-link menu-link  ${
                      active === "testimonials" ? "active" : ""
                    } `}
                    href="#testimonials"
                  >
                    testimonials{" "}
                  </Nav.Link>
                </li>
                <li
                  className="nav-item menu-item"
                  onClick={() => setActive("faq")}
                >
                  <NavLink
                    className={`nav-link menu-link  ${
                      active === "faq" ? "active" : ""
                    } `}
                    to="faq"
                  >
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item menu-item">
                  <NavLink
                    className={`nav-link menu-link  ${
                      active === "contact" ? "active" : ""
                    } `}
                    to="contact"
                    onClick={() => setActive("contact")}
                  >
                    contact us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="controls-box">
              <div className="control  menu-toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="control header-search-btn">
                <i className="bi bi-search icon"></i>
              </div>

              <div className="mode-switcher ">
                <div
                  onClick={() => {
                    setShow(false);
                    toggleThemeLight();
                  }}
                  className={
                    show === false ? "d-none" : "switch-inner go-light "
                  }
                  title="  Light Mode "
                >
                  <i className="bi bi-sun icon "></i>
                </div>
                <div
                  onClick={() => {
                    setShow(true);
                    toggleThemeDark();
                  }}
                  className={
                    show === true ? "  d-none" : "switch-inner go-dark"
                  }
                  title="  Dark Mode "
                >
                  <i className="bi bi-moon icon "></i>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />

      {/* Footer Start */}
      <footer className="page-footer dark-color-footer" id="page-footer">
        <div
          className="overlay-photo-image-bg"
          data-bg-img="assets/images/sections-bg-images/footer-bg-1.jpg"
          data-bg-opacity=".25"
        ></div>
        <div className="container">
          <div className="row footer-cols">
            <div className="col-12 col-md-8 col-lg-4  footer-col ">
              <img
                className="img-fluid footer-logo"
                loading="lazy"
                src="logo.png"
                alt="logo"
              />
              <div className="footer-col-content-wrapper">
                <p className="footer-text-about-us ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus facere modi possimus dignissimos, aliquam nobis
                  eaque? Voluptatem magnam quisquam rem.
                </p>
              </div>
              <div className="form-area ">
                <div className="mailchimp-form ">
                  <form className="one-field-form" method="post" action="#0">
                    <div className="field-group ">
                      <label className="email-label" for="email-input">
                        {" "}
                        Subscribe to our news letter
                      </label>
                      <input
                        className="email-input "
                        type="email"
                        value=""
                        name="EMAIL"
                        id="email-input"
                        placeholder="Email Address"
                        autocomplete="off"
                      />
                      <div className="cta-area">
                        <input
                          className="btn-solid subscribe-btn"
                          type="submit"
                          value="Subscribe"
                          name="subscribe"
                        />
                      </div>
                    </div>
                    <span className="email-notice">
                      *we will not share your personal info
                    </span>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2  footer-col ">
              <h2 className=" footer-col-title    ">useful links</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu ">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      Google
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      Dribbble
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      linkedIn
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      wikipedia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-2 footer-col ">
              <h2 className=" footer-col-title    ">Resources</h2>
              <div className="footer-col-content-wrapper">
                <ul className="footer-menu">
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      support
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      dashboard
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      drivers
                    </a>
                  </li>
                  <li className="footer-menu-item">
                    <i className="bi bi-arrow-right icon "></i>
                    <a className="footer-menu-link" href="#0">
                      projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12     col-lg-4 footer-col ">
              <h2 className=" footer-col-title    ">contact information</h2>
              <div className="footer-col-content-wrapper">
                <div className="contact-info-card">
                  <i className="bi bi-envelope icon"></i>
                  <a
                    className="text-lowercase  info"
                    href="mailto:ahmedmostafakhedr31@gmail.com"
                  >
                    ahmedmostafakhedr31@gmail.com
                  </a>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-geo-alt icon"></i>
                  <span className="text-lowercase  info">Cairo Egypt</span>
                </div>
                <div className="contact-info-card">
                  <i className="bi bi-phone icon"></i>
                  <a className="info" href="tel:+20123456789">
                    +20123456789{" "}
                  </a>
                </div>
                <div className="contact-info-card">
                  <div className="social-icons">
                    <div className="sc-wrapper dir-row sc-size-32">
                      <ul className="sc-list">
                        <li className="sc-item " title="Facebook">
                          <a
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-facebook-f sc-icon"></i>
                          </a>
                        </li>
                        <li className="sc-item " title="youtube">
                          <a
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-youtube sc-icon"></i>
                          </a>
                        </li>
                        <li className="sc-item " title="instagram">
                          <a
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-instagram sc-icon"></i>
                          </a>
                        </li>
                        <li className="sc-item " title="twitter">
                          <a
                            className="sc-link"
                            href="#0"
                            title="social media icon"
                          >
                            <i className="fab fa-twitter sc-icon"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 d-flex justify-content-start">
                <p className="creadits">
                  &copy; 2023 Created by:
                  <a className="link" href="#0">
                    Ahmed Mostafa
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-end">
                <div className="terms-links">
                  <a href="#0">Terms of Use </a>|{" "}
                  <a href="#0">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
