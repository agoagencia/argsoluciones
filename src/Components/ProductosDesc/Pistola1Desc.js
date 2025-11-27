import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/1.-Pistola de alimentacion por presion 288951.jpg';
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
        <h2>Pistola de alimentacion por presion 288951</h2><br/>
        <p><strong>SKU:</strong> 288951</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de alimentación por presión AirPro Air Spray, convencional, boquilla de 0.070 pulgadas (1.8 mm), punta SST, para aplicaciones generales de metal
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada de aire (in): 1/4<br/><br/>

Aplicación: Metal<br/><br/>

Tipo de aplicador: Manual<br/><br/>

Material compatible: CARC, esmalte, epoxis, fraguado rápido, alto contenido de sólidos, l?tex, materiales de componentes plurales, selladores, a base de solvente, uretano, a base de agua<br/><br/>

Tipo de alimentación: Alimentación a presi?n<br/><br/>

Tamaño de entrada de fluido (in): 3/8<br/><br/>

Tamaño del orificio de fluido (in): 0,070
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc