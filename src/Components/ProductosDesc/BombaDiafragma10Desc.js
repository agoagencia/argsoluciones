import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/10.-Bomba de diafragma Aro PD03P-APS-PCC.jpg';
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
        <h2>Bomba de diafragma Aro PD03P-APS-PCC</h2><br/>
        <p><strong>SKU:</strong>  PD03P-APS-PCC</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de Diafragma ARO 3/8″ PD03P-APS-PCC no metálica
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada / Salida: 3/8 - 18 NPTF - 1<br/><br/>

Motor neumático: polipropileno<br/><br/>

Tapas de fluido y material colector: polipropileno (un puerto)<br/><br/>

Sujetadores: acero inoxidable<br/><br/>

Material del asiento: polipropileno<br/><br/>

Material de la bola: Hytrel<br/><br/>

Diafragma: Hytrel
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc