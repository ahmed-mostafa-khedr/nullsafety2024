import { Button, Container, Form, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../pages-header-background.jpg";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
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
          <h1>Conatact Us</h1>
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>

            <li>Conatct Us</li>
          </ul>
        </div>
      </section>
      <section class="contact-us  mega-section  pb-0" id="contact-us">
        <div class="container">
          <section class="contact-us-form-section  mega-section  ">
            <div class="row">
              <div class="col-12 ">
                <div class="contact-form-panel">
                  <div class="sec-heading centered    ">
                    <div class="content-area">
                      <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
                        Have any questions? Let's answer them
                      </h2>
                    </div>
                  </div>
                  <div
                    class="contact-form-inputs wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="custom-form-area input-boxed">
                      <form
                        class="main-form"
                        id="contact-us-form"
                        action="php/send-mail.php"
                        method="post"
                      >
                        <span class="done-msg"></span>
                        <div class="row ">
                          <div class="col-12 col-lg-6">
                            <div class="   input-wrapper">
                              <input
                                class="text-input"
                                id="user-name"
                                name="UserName"
                                type="text"
                              />
                              <label class="input-label" for="user-name">
                                {" "}
                                Name <span class="req">*</span>
                              </label>
                              <span class="b-border"></span>
                              <span class="error-msg"></span>
                            </div>
                          </div>
                          <div class="col-12 col-lg-6">
                            <div class="   input-wrapper">
                              <input
                                class="text-input"
                                id="user-email"
                                name="UserEmail"
                                type="email"
                              />
                              <label class="input-label" for="user-email">
                                {" "}
                                E-mail <span class="req">*</span>
                              </label>
                              <span class="b-border"></span>
                              <span class="error-msg"></span>
                            </div>
                          </div>
                          <div class="col-12 ">
                            <div class="   input-wrapper">
                              <input
                                class="text-input"
                                id="msg-subject"
                                name="subject"
                                type="text"
                              />
                              <label class="input-label" for="msg-subject">
                                {" "}
                                Subject <span class="req">*</span>
                              </label>
                              <span class="b-border"></span>
                              <span class="error-msg"></span>
                            </div>
                          </div>
                          <div class="col-12 ">
                            <div class="   input-wrapper">
                              <textarea
                                class=" text-input"
                                id="msg-text"
                                name="message"
                              ></textarea>
                              <label class="input-label" for="msg-text">
                                {" "}
                                your message <span class="req">*</span>
                              </label>
                              <span class="b-border"></span>
                              <i></i>
                              <span class="error-msg"></span>
                            </div>
                          </div>
                          <div class="col-12 submit-wrapper">
                            <button
                              class=" btn-solid"
                              id="submit-btn"
                              type="submit"
                              name="UserSubmit"
                            >
                              Send your message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="locations-section  mega-section ">
            <div class="sec-heading centered  ">
              <div class="content-area">
                <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
                  our offices around the world
                </h2>
              </div>
            </div>
            <div class=" contact-info-panel ">
              <div class="info-section ">
                <div class="row">
                  <div class="col-12 col-lg-4">
                    <div class="info-panel  wow fadeInUp" data-wow-delay=".4s ">
                      <h4 class="location-title">New york</h4>
                      <div class="line-on-side "> </div>
                      <p class="location-address">Nasr City, Egypt.</p>
                      <div class="location-card  ">
                        <i class="flaticon-email icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">email:</h6>
                          <a
                            class="email link"
                            href="mailto:ahmedmostafakhedr31@gmail.com"
                          >
                            ahmedmostafakhedr31@gmail.com
                          </a>
                        </div>
                      </div>
                      <div class="location-card  ">
                        <i class="flaticon-phone-call icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">phone:</h6>
                          <a class="tel link" href="tel:01090723497">
                            +201090723497
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="info-panel  wow fadeInUp" data-wow-delay=".6s">
                      <h4 class="location-title">London</h4>
                      <div class="line-on-side "> </div>
                      <p class="location-address">Cairo, Egypt.</p>
                      <div class="location-card  ">
                        <i class="flaticon-email icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">email:</h6>
                          <a
                            class="email link"
                            href="mailto:ahmedmostafakhedr31@gmail.com"
                          >
                            ahmedmostafakhedr31@gmail.com
                          </a>
                        </div>
                      </div>
                      <div class="location-card  ">
                        <i class="flaticon-phone-call icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">phone:</h6>
                          <a class="tel link" href="tel:01090723497">
                            +201090723497
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-4">
                    <div class="info-panel  wow fadeInUp" data-wow-delay=".8s">
                      <h4 class="location-title">tokio</h4>
                      <div class="line-on-side "> </div>
                      <p class="location-address">Maadi, Egypt.</p>
                      <div class="location-card  ">
                        <i class="flaticon-email icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">email:</h6>
                          <a
                            class="email link"
                            href="mailto:ahmedmostafakhedr31@gmail.com"
                          >
                            ahmedmostafakhedr31@gmail.com
                          </a>
                        </div>
                      </div>
                      <div class="location-card  ">
                        <i class="flaticon-phone-call icon"></i>
                        <div class="card-content">
                          <h6 class="content-title">phone:</h6>
                          <a class="tel link" href="tel:01090723497">
                            +201090723497
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="container-fluid">
          <section class="map-section ">
            <div class="map-box  wow fadeInUp" data-wow-delay=".6s">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    class="map-iframe"
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27649.23412021774!2d31.2603598099121!3d29.97499629955591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458386385feeaf5%3A0x713c1e0d0ddc436a!2sT.I.T%20Solutions!5e0!3m2!1sen!2seg!4v1704055303976!5m2!1sen!2seg"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
