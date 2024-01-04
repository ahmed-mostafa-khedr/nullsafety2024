import React from "react";
import { Link, NavLink } from "react-router-dom";

const News = () => {
  return (
    <section class="blog blog-home mega-section  " id="blog">
      <div class="container ">
        <div class="sec-heading  ">
          <div class="content-area">
            <span class=" pre-title       wow fadeInUp " data-wow-delay=".2s">
              News
            </span>
            <h2 class=" title    wow fadeInUp" data-wow-delay=".4s">
              latest <span class="hollow-text">news</span>
            </h2>
          </div>
          <div class=" cta-area  cta-area  wow fadeInUp" data-wow-delay=".8s">
            <Link class="cta-btn btn-solid   cta-btn btn-solid  " to="news">
              see all news<i class="bi bi-arrow-right icon "></i>
            </Link>
          </div>
        </div>
        <div class="row ">
          <div class="col-12 ">
            <div class="posts-grid ">
              <div class="row">
                <div class="col-12 col-lg-4 ">
                  <div class="post-box">
                    {" "}
                    <a
                      class="post-link"
                      href="#0"
                      title="How litespeed technology works to speed up your site "
                    >
                      <div class="post-img-wrapper  ">
                        <img
                          class=" parallax-img   post-img"
                          loading="lazy"
                          src="assets/images/blog/post-images/1.jpg"
                          alt=""
                        />
                        <span class="post-date">
                          <span class="day">05</span>oct 2024{" "}
                        </span>
                      </div>
                    </a>
                    <div class="post-summary">
                      <div class="post-info">
                        <a class="info post-cat" href="#">
                          {" "}
                          <i class="bi bi-bookmark icon"></i>hosting
                        </a>
                        <a class="info post-author" href="#">
                          {" "}
                          <i class=" bi bi-person icon"></i>Ahmed Mostafa
                        </a>
                      </div>
                      <div class="post-text">
                        <a class="post-link" href="#0">
                          <h2 class="post-title">
                            {" "}
                            How litespeed technology works to speed up your site{" "}
                          </h2>
                        </a>
                        <p class="post-excerpt">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Iure nulla dolorem, voluptates molestiae
                        </p>
                        <a
                          class="read-more"
                          href="#0"
                          title="How litespeed technology works to speed up your site "
                        >
                          read more<i class="bi bi-arrow-right icon "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 ">
                  <div class="post-box">
                    {" "}
                    <a
                      class="post-link"
                      href="#0"
                      title="give your website a new look and feel with themes"
                    >
                      <div class="post-img-wrapper  ">
                        <img
                          class=" parallax-img   post-img"
                          loading="lazy"
                          src="assets/images/blog/post-images/2.jpg"
                          alt=""
                        />
                        <span class="post-date">
                          <span class="day">15</span>sep 2024{" "}
                        </span>
                      </div>
                    </a>
                    <div class="post-summary">
                      <div class="post-info">
                        <a class="info post-cat" href="#">
                          {" "}
                          <i class="bi bi-bookmark icon"></i>web dev
                        </a>
                        <a class="info post-author" href="#">
                          {" "}
                          <i class=" bi bi-person icon"></i>mohamed amin
                        </a>
                      </div>
                      <div class="post-text">
                        <a class="post-link" href="#0">
                          <h2 class="post-title">
                            {" "}
                            give your website a new look and feel with themes
                          </h2>
                        </a>
                        <p class="post-excerpt">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Iure nulla dolorem, voluptates molestiae
                        </p>
                        <a
                          class="read-more"
                          href="#0"
                          title="give your website a new look and feel with themes"
                        >
                          read more<i class="bi bi-arrow-right icon "></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-4 ">
                  <div class="post-box">
                    {" "}
                    <a
                      class="post-link"
                      href="#0"
                      title="the role of domain names in SEO world explained "
                    >
                      <div class="post-img-wrapper  ">
                        <img
                          class=" parallax-img   post-img"
                          loading="lazy"
                          src="assets/images/blog/post-images/3.jpg"
                          alt=""
                        />
                        <span class="post-date">
                          <span class="day">27</span>aug 2024{" "}
                        </span>
                      </div>
                    </a>
                    <div class="post-summary">
                      <div class="post-info">
                        <a class="info post-cat" href="#">
                          {" "}
                          <i class="bi bi-bookmark icon"></i>SEO
                        </a>
                        <a class="info post-author" href="#">
                          {" "}
                          <i class=" bi bi-person icon"></i>yusuf amin
                        </a>
                      </div>
                      <div class="post-text">
                        <a class="post-link" href="#0">
                          <h2 class="post-title">
                            {" "}
                            the role of domain names in SEO world explained{" "}
                          </h2>
                        </a>
                        <p class="post-excerpt">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.Iure nulla dolorem, voluptates molestiae
                        </p>
                        <a
                          class="read-more"
                          href="#0"
                          title="the role of domain names in SEO world explained "
                        >
                          read more<i class="bi bi-arrow-right icon "></i>
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
    </section>
  );
};

export default News;
