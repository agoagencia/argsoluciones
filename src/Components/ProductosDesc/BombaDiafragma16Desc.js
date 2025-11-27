import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/16.-Bomba de diafragma Aro PD20A-AAP-FTT-B.jpg';
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
        <h2>Bomba de diafragma Aro PD20A-AAP-FTT-B</h2><br/>
        <p><strong>SKU:</strong>  PD20A-AAP-FTT-B</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma de 2″ metálica (aluminio con teflón), Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada / Salida: 2 - 11-1 / 2 NPTF<br/><br/>

Motor de aire: aluminio<br/><br/>

Tapas de fluido y material colector: Aluminio<br/><br/>

Sujetadores: acero plateado<br/><br/>

Material del asiento: aluminio<br/><br/>

Material de la bola: teflón<br/><br/>

Material del diafragma: teflón
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc