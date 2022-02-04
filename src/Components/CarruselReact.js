
import './carruselReact.css';
import React, { Component } from "react";
import img1 from '../img/carrusel/25T820_1280x1280__70848.1631035046.jpg';
import img2 from '../img/carrusel/81bmXNBua6L._AC_SL1500_.jpg';
import img3 from '../img/carrusel/20987-3478205.jpg';
import img4 from '../img/carrusel/bo5030-lijadora-rotorbital-125mm-700x675.jpg';
import img5 from '../img/carrusel/DHS711Z.jpg';
import img6 from '../img/carrusel/engrapadora-neumatica-calibre-22-071-mm-truper-trup-13177.jpg';
import img7 from '../img/carrusel/LM2305A_12_B__29528.1633497880.jpg';
import img8 from '../img/carrusel/POCA-9.jpg';
import img9 from '../img/carrusel/jga-510.jpg';
/* import img10 from '../img/carrusel/JH40C3JackHammerp001ljpg.jpg'; */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
     
    };
    return (
      <div className='soluciones_industria_mineria'>
         <div className='soluciones_industria_izq'>
           <h2>SOLUCIONES PARA <br/>INDUSTRIA Y MINERÍA</h2>
         
        </div>
         <div className='soluciones_industria_der'>


        {/* ------SLIDER PRO REACT------ */}
      <div className='slider_react'>
        {/* <h2>Pause On Hover</h2> */}
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
          <div className="img_carousel">
            <img src={img5} alt=""></img>
          </div>
          <div className="img_carousel">
            <img src={img6} alt=""></img>
          </div>
          <div className="img_carousel">
            <img src={img7} alt=""></img>
          </div>
          <div className="img_carousel">
            <img src={img8} alt=""></img>
          </div>
          <div className="img_carousel">
            <img src={img9} alt=""></img>
          </div>
          {/* <div className="img_carousel">
            <img src={img10} alt=""></img>
            </div> */}
        </Slider>
      </div>
      </div>
      </div>
      
      );
    }
  }
 