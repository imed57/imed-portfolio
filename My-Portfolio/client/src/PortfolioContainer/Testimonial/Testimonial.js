import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import cv from "../../img/cvv.jpg";
import ecommerce from "../../img/ecommerce.jpg";
import portfolio from "../../img/portfolio.jpg";
import shape from "../../img/shape-bg.png";

import './Testimonial.css';

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 25,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Portfolio"}
        subHeading={"My projects"}
      />
      <div className='logol'><a href="https://github.com/imed57" rel='noreferrer' target="_blank"><button className="btn highlighted-btn">View my projects</button>
      </a></div>
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}>
              <div className="testimonial-item">
                <div className="testimonial-thumb">
                  <img src={portfolio} alt="portfolio" className='photo'/>
                </div>
                <div className="testimonial-content">
                  <h3>  Portfolio</h3>
                  <p>
                    This is my portfolio website. I used React.js, Node.js, Express.js, MongoDB, and Bootstrap.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-thumb">
                  <img src={ecommerce} alt="ecommerce" className='photo'/>
                </div>
                <div className="testimonial-content">
                  <h3>  Ecommerce</h3>
                  <p>
                    E-commerce website. I used Typescript, Express, Sequelize, SQL, NodeJs for the back. React/Next for the front.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-thumb">
                  <img src={cv} alt="cv" className='photo'/>
                </div>
                <div className="testimonial-content">
                  <h3>Resume</h3>
                  <p>
                    This is my CV website. I used HTML, CSS and Javascript to do it. First web project, use of flexbox and transitions.
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}