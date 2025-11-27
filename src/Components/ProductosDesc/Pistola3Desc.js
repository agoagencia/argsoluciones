import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/3.-Pistola de pulverización 24A753.jpg';
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
        <h2>Pistola de pulverización 24A753</h2><br/>
        <p><strong>SKU:</strong> 24A753</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de pulverización convencional Graco
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo de pulverización: Convencional<br/><br/>

Boquilla: 1,4 mm (0,055 in)<br/><br/>

Viscosidad del material: media<br/><br/>

Flujo: 0,36-0,54 l/min (12 oz-18 min)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc