import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/10.-Pistola pulverizadora Devilbiss JGA-510-704-FX.jpg';
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
        <h2>Pistola pulverizadora Devilbiss JGA-510-704-FX</h2><br/>
        <p><strong>SKU:</strong> JGA-510-704-FX</p>
        <p><strong>Categorías:</strong> Carlisle-DeVilbiss, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola pulverizadora de alimentación por presión Serie JGA, rango optimo de la viscosidad de la pintura muy bajo a alto
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cuerpo forjado: aluminio<br/><br/>

Consumo del Aire: 12.0 PCM @ 45 psi<br/><br/>

Entrada de Aire: 1/4"<br/><br/>

Tamaño de la Boquilla: 0.063"/1.6mm<br/><br/>

Aplicación: diversos tipos de materiales<br/><br/>

Sistema de pulverización: por presión
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc