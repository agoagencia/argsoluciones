import React from 'react'
import './servicios.css'
import {Link} from "react-router-dom";
import whatsappIcon from '../img/icons/whatsapp.png'
import ServiciosImg1 from "../img/ServiciosImg/1.jpg"
import ServiciosImg2 from "../img/ServiciosImg/2.jpg"
import ServiciosImg3 from "../img/ServiciosImg/3.jpg"
import ServiciosImg4 from "../img/ServiciosImg/4.jpg"
import imgServ1 from '../img/servicios/asesoria.png'
import imgServ2 from '../img/servicios/capacitacion1.png'
import imgServ3 from '../img/servicios/ingenieria1.png'
import imgServ4 from '../img/servicios/integracion.png'
import imgServ5 from '../img/servicios/reparaciones.png'

function Servicios() {
  return (
    <div className='servicios'>
        <div className='servicios_header'>
           <div className='servicios_header_img'>
           <div className="productos_title">
        <h2>Servicios</h2>
      </div>
               
           </div>
           <div className='servicios_servicios'>
               {/*   <h1 className='servicios_titulo'>Nuestros servicios</h1>
                 <hr/> */}
                <br/><br/><br/><br/><br/><br/><br/><br/>
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
           <div className='servicios_contenedor'>
               <div className='servicios_flex'>
                   <div className='servicios_flex_1'>
                   <h2>Categorías que aplican para los servicios:</h2><br/>
                   {/* <div className='line'></div> */}
                   <ul>
                       <li>Herramientas neumáticas</li>
                       <li>Herramientas de ensamble</li>
                       <li>Manejo de materiales</li>
                       <li>Sisemas de pintura</li>
                       <li>Manejo de fluidos</li>
                       <li>Sistemas de suministro de sellante y adhesivos</li>
                       
                       
                   </ul>
                   </div>
                   <div className='servicios_flex_2'>
                   Somos distribuidores autorizados por la fábrica lo que nos da soporte y permite respaldar sus productos en el proceso de instalación y mantenimiento técnico para así brindarles la atención personalizada que su empresa necesita para mantener su funcionamiento. 
                   </div>
             
               </div>
               <div className='servicios_imgs'>
                   <div className='servicios_imgs_flex'>
                        <img src={ServiciosImg2}></img>
                        <img src={ServiciosImg4}></img>
                        <img src={ServiciosImg1}></img>
                        <img src={ServiciosImg3}></img>
                   </div>
               </div>
           </div>
           <div className='servicios_contenedor2'>
               <p>Nuestro enfoque se encuentra en equipos para minas y de ingeniería avanzada, además de productos para construcción. Brindar calidad y formar sólidas alianzas con nuestros clientes. 
Somos un proveedor confiable con la capacidad de comprometernos con los proyectos más exigentes en cualquier lugar del país.<br/><br/> 
<Link to="contacto"><span className='blue'>¡Contáctanos!</span></Link> 
</p>
<br/><br/>
           </div>
        </div>
        <div className='whatsapp_contact'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526624515925?text=Contactar%20con%20un%20asesor"><img src={whatsappIcon}></img></a>
            </div>
        
    </div>
  )
}

export default Servicios