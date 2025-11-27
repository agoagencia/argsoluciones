import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Sistema de Suministro/2.-Sistemas de suministro de fusion en templado Warm Melt.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

//falta descripción: 
// 1, 8, 



function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Sistemas de suministro de fusion en templado Warm Melt</h2><br/>
        <p><strong>SKU:</strong> Warm Melt</p>
        <p><strong>Categorías:</strong> Sistemas de suministro, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Diseñados específicamente para sellantes o adhesivos que necesitan calentarse a más de 100 C (212 F), Ideal para aplicaciones de acondicionamiento de temperatura. Una excelente alternativa a las soluciones con camisa de agua

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Bomba de desplazamiento: Consulte la bomba de desplazamiento Check-Mate y los paquetes de bombas para conocer las piezas en contacto con el medio, el peso, el caudal y la presión máxima de trabajo de fluido y aire<br/><br/>

Temperatura máxima de funcionamiento (sistema de suministro): 70?C<br/><br/>

Unidades de alimentación de CA 220-250 Vac, 50/60 Hz, monofásico, 57 amperios de corriente a plena carga
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc