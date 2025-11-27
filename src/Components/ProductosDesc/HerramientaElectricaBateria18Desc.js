import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/18.-Multicortador inalambrico DCO180Z.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Multicortador inalambrico<br/> DCO180Z</h2><br/>
        <p><strong>SKU:</strong> DCO180Z</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Makita</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Cuerpo ergonómico con recubrimiento antideslizante
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tensión de la batería: 18 V<br/><br/>

R.p.m: 30.000 Rpm<br/><br/>

Diámetro de pinza: 3,18 - 6,35 mm.<br/><br/>

Profundidad máx de corte: 7,5 - 31,5 mm.<br/><br/>

Dimensiones: LxAnxAl 309 x 77 x 118 mm.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc