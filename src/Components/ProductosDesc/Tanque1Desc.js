import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Tanques/1.-Olla de presion 236152.jpg';
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
        <h2>Olla de presion 236152</h2><br/>
        <p><strong>SKU:</strong> 236152</p>
        <p><strong>Categorías:</strong>  Tanques, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Olla de alta presión de 5 galones (HVLP) con agitador, regulada a 100 psi, clasificación ASME, 30.5 in (77.5 cm), 74 lbs (34 kg), SST

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada (in): 1/4"<br/><br/>

Tipo de rosca de entrada: NPT<br/><br/>

Capacidad máxima de volumen (gal): 5<br/><br/>

Presión máxima de trabajo (MPa): 0.7<br/><br/>

Presión máxima de trabajo (psi): 100<br/><br/>

Tamaño de salida (in): 3/8<br/><br/>

Tipo de rosca de salida: NPSM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc