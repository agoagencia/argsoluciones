
import './carruselReact.css';
import React, { Component } from "react";
import img1 from '../img/carrusel/nuevas/1.jpeg';
import img2 from '../img/carrusel/nuevas/2.jpeg';
import img3 from '../img/carrusel/nuevas/3.jpeg';
import img4 from '../img/carrusel/nuevas/4.jpeg';
/* import img5 from '../img/carrusel/nuevas/5.jpeg';
import img6 from '../img/carrusel/nuevas/6.jpeg';
import img7 from '../img/carrusel/nuevas/7.jpeg'; */
import img8 from '../img/carrusel/jga-510.jpg';
import img9 from '../img/carrusel/LM2305A_12_B__29528.1633497880.jpg';
import img10 from '../img/carrusel/20987-3478205.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,

    };
    return (
      <div className='soluciones_industria_mineria'>
      {/*   <div className='soluciones_industria_izq'>
          <h2><strong>Soluciones para <br />Industria y Minería</strong></h2>

        </div> */}
        <div className='soluciones_industria_der'>

          {/* ------SLIDER PRO REACT------ */}
          <div className='slider_react'>
            <Slider {...settings}>

              <div className="img_carousel">
              <img src={img1} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img2} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img3} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img4} alt=""></img>
              </div>
           {/*    <div className="img_carousel">
                <img src={img5} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img6} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img7} alt=""></img>
              </div> */}
              <div className="img_carousel">
                <img src={img8} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img9} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img10} alt=""></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>

    );
  }
}
