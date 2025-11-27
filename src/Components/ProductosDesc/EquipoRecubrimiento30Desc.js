import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/30.-Tanque de presión Binks Serie 183G.jpg';
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
        <h2>Tanque de presión Binks Serie 183G</h2><br/>
        <p><strong>SKU:</strong> 183G</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Cerámica, Automotriz, Carlisle-Binks Automotriz, Carlisle-Binks</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los tanques alimentados a presión de Binks están destinados para ser utilizados como un recipiente a presión para suministrar materiales a una presión constante prefijada hasta un máximo de 110 psi. Los tanques son fabricados siguiendo las especificaciones de ASME
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Acero: Galvanizado<br/><br/>

183G-2,5,10,15: 2,5,10,15: Galones<br/><br/>

183G-XYZ:Regulador Y, Agitación Z (P1) Presión Máx: 110 psi<br/><br/>

Opciones Aire: Sin regulación (sólo manómetro de aire<br/><br/>

Regulación única estándar<br/><br/>

Regulación doble estándar<br/><br/>

Regulación extra sensible<br/><br/>

Regulación extra sensible<br/><br/>

Regulación extra sensible con regulación de pistola estándar<br/><br/>

Agitación: Sin agitación, Agitación con impulsión directa, Agitación con impulsión de engranaje reducido
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc