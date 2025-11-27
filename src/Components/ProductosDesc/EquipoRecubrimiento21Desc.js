import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/21.-Pistola automática AG361E.jpg';
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
        <h2>Pistola automática AG361E</h2><br/>
        <p><strong>SKU:</strong>AG361E</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Cerámica, Madera, Carlisle-Devilbiss Cerámica, Carlisle-Devilbiss Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de pulverización automática de atomización de aire de baja presión para la industria de cerámica y esmalte
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Peso AG-361E: 668 g<br/><br/>

Presión entrada aire: (P1)7 bar Máx.<br/><br/>

Presión entrada fluido: (P2)7 bar<br/><br/>

Máx. temperatura ambiente de ejercicio: 40?C nominal<br/><br/>

Material cuerpo pistola: Aluminio - Revestimiento QuickClean
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc