
import './carruselReact.css';
import React, { Component } from "react";

/* import img2 from '../img/carrusel/81bmXNBua6L._AC_SL1500_.jpg'; */


/* import img3 from '../img/carrusel/20987-3478205.jpg'; */

/* import img5 from '../img/carrusel/engrapadora-neumatica-calibre-22-071-mm-truper-trup-13177.jpg'; */
import img6 from '../img/carrusel/LM2305A_12_B__29528.1633497880.jpg';
/* import img7 from '../img/carrusel/POCA-9-min.jpg'; */
import img8 from '../img/carrusel/nuevas/8.jpeg';
import img9 from '../img/carrusel/nuevas/9.jpeg';
/* import img10 from '../img/carrusel/nuevas/10.jpeg';
import img11 from '../img/carrusel/nuevas/11.jpeg';
import img12 from '../img/carrusel/nuevas/12.jpeg'; */
import img13 from '../img/carrusel/nuevas/13.jpeg';
import img14 from '../img/carrusel/nuevas/14.jpeg';
import img15 from '../img/carrusel/nuevas/15.jpeg';
import img16 from '../img/carrusel/nuevas/16.jpeg';

/* import img10 from '../img/carrusel/JH40C3JackHammerp001ljpg.jpg'; */
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

        <div className='soluciones_industria_der'>


          {/* ------SLIDER PRO REACT------ */}
          <div className='slider_react_2'>
              <Slider {...settings}>

              {/* <div className="img_carousel">
                <img src={img5} alt=""></img>
              </div> */}
              <div className="img_carousel">
                <img src={img6} alt=""></img>
              </div>

              {/* <div className="img_carousel">
                <img src={img7} alt=""></img>
              </div> */}
              <div className="img_carousel">
                <img src={img8} alt=""></img>
              </div>
              <div className="img_carousel">
                <img src={img9} alt=""></img>
              </div>
            {/*   <div className="img_carousel">

                <img src={img10} alt=""></img>
              </div>
              <div className="img_carousel">

                <img src={img11} alt=""></img>
              </div>
              <div className="img_carousel">

                <img src={img12} alt=""></img>
              </div> */}
              <div className="img_carousel">

                <img src={img13} alt=""></img>
              </div>
              <div className="img_carousel">

                <img src={img14} alt=""></img>
              </div>
              <div className="img_carousel">

                <img src={img15} alt=""></img>
              </div>
              <div className="img_carousel">

                <img src={img16} alt=""></img>
              </div>

            </Slider>
          </div>
        </div>
        {/* <div className='soluciones_industria_izq_2'>
          <h2><strong>Soluciones para <br />Construcción</strong></h2>
        </div> */}
      </div>

    );
  }
}