import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/17.-Destornillador neumatico 19TTA15Q.jpg';
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
        <h2>Destornillador neumatico <br/>19TTA15Q Cleco</h2><br/>
        <p><strong>SKU:</strong> 19TTA15Q</p>
        <p><strong>Categorías:</strong>  Herramienta industrial, Cleco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Destornillador neumático Cleco 19TTA15Q con empuñadura de pistola
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Activación: Inicio del gatillo - Mango en T<br/>

Portabrocas: portabrocas de cambio rápido de 1/4 "<br/>

Embrague: apagado automático "Clecomatic"<br/>

RPM: 260<br/>

Entrada de aire: 1/4 "<br/>

Consumo de aire: 11 SCFM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc