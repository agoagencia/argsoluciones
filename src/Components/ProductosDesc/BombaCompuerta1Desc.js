import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de compuertas/1.-Bomba de compuertas de 2” Aro PF20A-AAS-SAA-B.jpg';
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
        <h2>Bomba de compuertas de 2″ Aro PF20A-AAS-SAA-B</h2><br/>
        <p><strong>SKU:</strong> PF20A-AAS-SAA-B</p>
        <p><strong>Categorías:</strong> Bombas de compuertas, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de compuertas de aluminio 2″

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales de la carcasa de la bomba: Aluminio<br/><br/>

Materiales del diafragma: Santopreno<br/><br/>
Peso:45.1 kg
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc