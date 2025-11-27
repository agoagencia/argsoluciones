import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/6.-Bomba de diafragma Aro 666151-2EB-C.jpg';
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
        <h2>Bomba de diafragma Aro 666151-2EB-C</h2><br/>
        <p><strong>SKU:</strong>  666151-2EB-C</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma metálica serie pro 1 – 1/2″, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material del diafragma: Santopreno<br/><br/>

Material de la bola: Santopreno<br/><br/>

Material del asiento: acero inoxidable 316<br/><br/>

Entrada / salida máxima de aire: 120 psi (8.3 bar) / 120 psi (8.3 bar)<br/><br/>

Tasa de flujo: 47 gpm. (177.9 lpm.)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc