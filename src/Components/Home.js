import React from 'react'
import './home.css';
import imgServ1 from '../img/servicios/asesoria_especializada.png'
import imgServ2 from '../img/servicios/capacitacion.png'
import imgServ3 from '../img/servicios/ingenieria.png'
import imgServ4 from '../img/servicios/integracion_de_equipos.png'
import imgServ5 from '../img/servicios/reparaciones_correcciones_y_preventivos.png'



import logoCarousel from '../img/ARG sin fondo-02.png'
import HomeCarousel from './HomeCarousel';
import CarruselReact from './CarruselReact';
import CarruselReactCopy from './CarruselReactCopy.js'

function Home() {

    return (
        <div className='home'>
            <HomeCarousel/>
            <div className='home_content'>
                <div className='logo_carousel'><img src={logoCarousel} alt=''></img></div>
            </div>
           
            <div className='carrusel1'>
              <CarruselReact/>
             <div className='img_home_midle'></div>
              <CarruselReactCopy/>
             </div>
             <div className='servicios_home'>
                 <h2 className='servicios_titulo'>Nuestros servicios</h2>
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
                 <img src={imgServ5}></img>Reparaciones, correcciones y preventivos
                 </div>
                 
            </div>
            </div>
        </div>
    )
}

export default Home;




        /* <div className='home'>
            <div className='home_content' id='opacar'>
                    <h1>Bienvenido a <span className='blue'>ARG</span>Soluciones</h1>
                    <button type="button" class="btn btn-primary">Primary</button>
                <div className='home_content_p'>
                    <p>Encuentra lo mejor para tu empresa....</p>
                    <div className='button_home'>   Ver más</div>
                </div>
            </div>


            <div className='sdf'>Otra cosas</div>
            <a href='' className='btn btn-primary'>botonasdfasdfasf</a>
        </div> */










  /*           <div className='conocenos'>
                <div className='conocenos_1'>
                        <h2>Quienes Somos?</h2>
                        <div className='line'></div>
                        <p>ARG Soluciones, impulsada por un espíritu emprendedor y una mentalidad de propiedad, se crea con el compromiso de impulsar la mejora continua y facilitar los procesos productivos en industria, minería y construcción. 
                           Brinda productos y equipos innovadores y además servicios de misión crítica, diseñados para sobresalir incluso en las condiciones más complejas de los procesos.
                           ARG Soluciones, supera los desafios y se adapta a un entorno en constante cambio, pese la situación mundial.
                           Se distingue por su experiencia, productividad y mejoras en la eficiencia ¡Somos facilitadores de procesos!
</p>
                </div>
                <div className='conocenos_2'>
                         <h2>Quienes Somos?</h2>
                        <p>Lorem20 ASDFHAKSHDFA  AKSDHFLKAJHSDKJFHAK  HKALS HDFKHAKSDHFAS HKJASHDKJFH AKJSDHFA SDF HAKSDHFALHSDFH</p> 
                </div>
            </div> */