import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/1.-Amortiguador de pulsaciones Aro SB20A-AAP-A.jpg';
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
        <h2>Amortiguador de pulsaciones Aro SB20A-AAP-A</h2><br/>
        <p><strong>SKU:</strong>  SB20A-AAP-A</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Amortiguador o Supresor de Pulsaciones para Bombas de Diafragma ARO, disponibles para Bombas de 1/2 a 3″.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Ajuste automático de aire: compensaciones por fluctuaciones en la presión del fluido sin intervención del operador<br/><br/>

Reducción significativa de la pulsación:los bloqueadores de choque ofrecen una reducción promedio de la pulsación del 60 al 80% en aplicaciones de alta presión<br/><br/>

Diseñado para aplicaciones de fluidos agresivos y de alto flujo: los modelos de 2 "pueden manejar un volumen máximo de líquido de hasta 159 pulgadas cúbicas, y los modelos de 3" hasta un volumen máximo de líquido de 509 pulgadas cúbicas<br/><br/>
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc