import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/21.-Bomba de diafragma Graco DF3311.jpg';
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
        <h2>Bomba de diafragma Graco DF3311</h2><br/>
        <p><strong>SKU:</strong> DF3311</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de Diafragma Metálica puertos roscados NPTF de 2″, sección motor y partes húmedas en aluminio, asientos de acero inoxidable, bolas y diafragmas de teflón.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Serie: Husky 2150<br/><br/>

Entrada / Salida: 2?<br/><br/>

Partes Húmedas: Aluminio<br/><br/>

Asientos: Acero Inoxidable<br/><br/>

Bolas y diafragmas de teflón<br/><br/>

Presión máxima : 120 psi<br/><br/>

Entrada de aire : 1/2 NPT (F)<br/><br/>

Máxima flujo: 150 gpm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc