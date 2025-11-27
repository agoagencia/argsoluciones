import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/2.-Pistola de pintura automática 24A755.jpg';
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
        <h2>Pistola de pintura automática 24A755</h2><br/>
        <p><strong>SKU:</strong> 24A755</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de Pintura HVLP, automatica, boquilla de 0.042 in., para materiales de mediana a baja viscosidad (15 – 30 cps).
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo: HVLP

Boquilla: 0.042 in (1.1 mm)

Viscosidad de material: ligero-medio

Flujo: 8-14 oz/min (0.24-0.42 l/min)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc