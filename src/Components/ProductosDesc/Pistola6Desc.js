import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/6.-Pistola pulverizadora 2465-18CN-14V0.jpg';
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
        <h2>Pistola pulverizadora 2465-18CN-14V0</h2><br/>
        <p><strong>SKU:</strong> 2465-18CN-14V0</p>
        <p><strong>Categorías:</strong> Carlisle-Binks, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola Pulverizadora Serie Trophy de Binks
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Pistola de riego convencional<br/><br/>

Materiales: Materiales abrasivos, vidriados, enlucidos, cerámicos, esmaltes de porcelana<br/><br/>

Pressure 1.8<br/><br/>

Boquilla de fluido x 14 air cap
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc