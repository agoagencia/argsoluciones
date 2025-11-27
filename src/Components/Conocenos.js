import React from 'react';
import './conocenos.css';
import whatsappIcon from '../img/icons/whatsapp.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutubeSquare} from '@fortawesome/free-brands-svg-icons';
import imgRight from '../img/img_conocenos/r12.PNG'
import imgRight2 from '../img/img_conocenos/r11.PNG'
import imgMap from '../img/mapa-arg.png'
import HomeVideoCopy from './HomeVideo'


function Conocenos() {
  return <div className='conocenos' id='conocenos'>
            <div className='conocenos_img'>
            <div className="productos_title">
        <h2>Conócenos</h2>
      </div>

        
            </div>
          <div className='homeVideoCopy'>  
           <HomeVideoCopy/>
           </div>
                <div className='quienes_somos'>
                  {/* <div className='line'></div> */}
                  {/* <div className='line'></div> */}
                  <p>ARG Soluciones brinda productos, equipos innovadores y servicios de misión crítica, diseñados para sobresalir incluso en las condiciones más complejas de los procesos. 
                      Se distingue por su experiencia, productividad y mejoras en la eficiencia ¡Somos facilitadores de procesos!
                  </p>
                </div>



                <div className='conocenos_mapa'>
                  <div className='conocenos_mapa_flex'>
                      <div className='conocenos_mapa_1'>
                        <h2>Envíos a toda la República Mexicana</h2>
                        <div className='line'></div>
                        <p>Nos encontramos en Hermosillo sonora, lo que nos permite abastecer de manera directa la zona Noroeste de nuestro país y cumplir en tiempo y forma a los requerimientos de nuestros clientes, realizando envíos a cualquier parte de la República Mexicana.</p>
                      

                      </div>
                      <div className='conocenos_mapa_2'>
                        <img src={imgMap}></img>
                      </div>
                  </div>
                </div>


            <div className='mision_vision_valores'>
               <div className='mision_vision_valores_flex'>
                  <div className='box_mision_left'>
                                  <h2>Nuestra misión</h2>
                                  <div className='line'></div>
                                  <p>
</p>  
Facilitar los procesos productivos brindando equipos de innovación para ingeniería avanzada, minería y productos comerciales para construcción. Coadyuvar en el crecimiento económico y sostenible de nuestros clientes.  
                  </div>
                  <div className='box_mision_right'>
                    <div className='box_mision_right_img'>
                    <img src={imgRight2}></img>
                    </div>
                    </div>
                </div>
             
               <div className='mision_vision_valores_flex'>
              
                  <div className='box_mision_right'>
                    <img src={imgRight}></img>
                    </div>
                    <div className='box_mision_left'>
                                  <h2>Nuestra visión</h2>
                                  <div className='line'></div>
                                  <p>Ser líder en ventas de herramientas y equipos especializados para industria, minería y construcción en México. Mantener la calidad e innovación en nuestros productos. Mantener sólidas alianzas con nuestros clientes.</p>  
                  </div>
                 
                </div>
             
                     {/*    <div className='box_mision center'>
                          <h2>Nuestros valores</h2>
                          <div className='line'></div>
                          <p>Confianza, Respeto, Honestidad, Justicia y Responsabilidad.</p>
                        </div> */}
               {/*            <div className='box_mision right'>
                            <div className='box_mision_1 fondo'></div>
                            <div className='box_mision_2'>
                          <h2>Nuestra visión</h2>
                            <div className='line'></div>
                            <p>Ser líder nacional en las marcas que distribuimos, contando 
                              con un personal comprometido con nuestros clientes, 
                              que les brinde un servicio profesional e integral.</p>
                              </div>
                          </div> */}
      
                        <div className='box_mision'><h2>Redes sociales</h2><div className='line'></div><div className='flex_p'><p>Siguenos en nuestras redes sociales.</p>    
                        <div className='redes_sociales'>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/argsolucionesmx"><FontAwesomeIcon icon={faFacebook}/></a>&nbsp;&nbsp;&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/argsolucionesmx/"><FontAwesomeIcon icon={faInstagram}/></a>&nbsp;&nbsp;&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/arg-soluciones/"><FontAwesomeIcon icon={faLinkedin}/></a>&nbsp;&nbsp;&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zsHajxVZwKs/"><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                          
                          
                          </div>
                        </div>
                        </div>
                  </div>
        <div className='whatsapp_contact'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526624515925?text=Contactar%20con%20un%20asesor"><img src={whatsappIcon}></img></a>
                                
            </div>
               </div>
                
         
}

export default Conocenos;
