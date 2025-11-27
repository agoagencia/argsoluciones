import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/3.-Atornillador de cable angular QE8AT400FA8S12.jpg';
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
        <h2>Atornillador de cable angular<br/> QE8AT400FA8S12</h2><br/>
        <p><strong>SKU:</strong> QE8AT400FA8S12</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Atornillador angular eléctrico QE Series, motor 8 size, trigger start, Torque max. 400 Nm., Mounting flanged carcase, Cabezal tamaño A8, cuadro de 3/4″
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cobertura de par de 1 a 400 Nm<br/><br/>

El control transducerizado de circuito cerrado completo ofrece<br/><br/>

excelente capacidad y trazabilidad Controles compactos, de alta velocidad y de fácil acceso<br/><br/>
Anillo reverso fácil de usar<br/><br/>

Se ejecuta sin problemas en controladores ICD o ICM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc