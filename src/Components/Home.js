import React from 'react'
import './home.css';
import imgServ1 from '../img/servicios/asesoria.png'
import imgServ2 from '../img/servicios/capacitacion1.png'
import imgServ3 from '../img/servicios/ingenieria1.png'
import imgServ4 from '../img/servicios/integracion.png'
import imgServ5 from '../img/servicios/reparaciones.png'
import { Link } from "react-router-dom"
import whatsappIcon from '../img/icons/whatsapp.png'
import Contact from './Contact';




import HomeCarousel from './HomeCarousel';
import CarruselReact from './CarruselReact';
import CarruselReactCopy from './CarruselReactCopy.js'
import logo from "../img/logos/ARG-LOGOx.png"
/* import VideoHeader from '../Video/WIPHQ.mp4' */
import HomeVideo from './HomeVideo';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; */


function Home() {

    return (
        <div className='home'>

            <div className='btns_home'>
                <div className='btn_conocenos'>
                    <Link to="/conocenos">Conócenos</Link>

                </div>
                <div className='btn_cotizanos'>
                    <Link to="/contacto">Cotiza</Link>
                </div>
            </div>
            <div className='home_content'>
                <HomeCarousel />
                <div className='logo_carousel'><img src={logo} alt=''></img></div>
            </div>
            <div className='whatsapp_contact'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526621113020?text=Contactar%20con%20un%20asesor"><img src={whatsappIcon}></img></a>
            </div>




            <div className='carrusel1'>
                <div className='text_home_welcome'>
                    <p>ARG Soluciones brinda equipos, productos y servicios innovadores diseñados para facilitar los procesos en industria, minería y construcción.</p>
                </div>
                <CarruselReact />
                {/* <div className='img_home_midle'></div> */}
                <div className='text_home'>
                    <div className='text_home_flex'>
                        <div className='text_home_flex_left'>
                            <h2>Soluciones para Industria, Minería y Construcción</h2>
                            <hr/>
                            <p>Brindamos equipos y productos de calidad e innovación
                                con atención personalizada. Damos soporte técnico y respaldo
                                a tus productos en el proceso de instalación y mantenimiento.</p>
                        </div>
                        <div className='text_home_flex_right'>
                            <HomeVideo />
                        </div>
                    </div>
                </div>
                <CarruselReactCopy />
                <br /><br /><br /><br />
            </div>
            <div className='img_home_midle'></div>
            


            <div className='servicios_fondo'>
                <div className='servicios_seccion_home'>
                    <div className='servicios_content'>
                        <div className='servicios_content1'>

                        </div>
                        <br />
                        <div className='servicios_content2'>
                            <h2><strong>Servicio Integral</strong></h2>
                            <hr />
                            <p> -Atención personalizada</p>
                            <p> -Venta</p>
                            <p> -Selección</p>
                            <p> -Postventa</p>
                        </div>

                    </div>

                    <div className='servicios_content_2'>
                        <div className='servicios_content_10'>
                            <h2><strong>Personal Capacitado</strong></h2>
                            <hr />
                            <p> -Soporte técnico</p>
                            <p> -Servicio técnico en planta</p>
                            <p> -Instalación</p>
                            <p> -Capacitaciones y asesoría técnica de los equipos</p>
                        </div>
                        <br />
                        <div className='servicios_content_20'>

                        </div>

                    </div>
                </div>
            </div>
            <div className='servicios_home'>
                <div className='servicios_img'>
                    <div className='serv_img'>
                        <img src={imgServ1}></img>Asesoría especializada
                    </div>
                    <div className='serv_img'>
                        <img src={imgServ2}></img>Capacitación                 </div>
                    <div className='serv_img'>
                        <img src={imgServ3}></img>Ingeniería
                    </div>
                    <div className='serv_img'>
                        <img src={imgServ4}></img>Integración de equipos
                    </div>
                    <div className='serv_img'>
                        <img src={imgServ5}></img>Reparaciones y preventivos
                    </div>

                </div>
            </div>
            {/* <HomeVideo /> */}
            <Contact />
           {/*  <Link to="/contacto"> <div className='btn_cotizanos btn_margin'>Cotiza</div></Link> */}


        </div>
    )
}

export default Home;














