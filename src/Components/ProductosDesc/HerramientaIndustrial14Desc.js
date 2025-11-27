import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/14.-Desarmador neumatico QA4AALS.jpg';
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
        <h2>Desarmador neumatico QA4AALS Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> QA4AALS</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Desarmador neumático próxima generación de productividad: los nuevos apiladores de aire de la serie QA4 proporcionan mejoras espectaculares en velocidad, tamaño, durabilidad y ergonomía.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Rango de par: 5 a 55 Nm / 3.7 a 40.6 ft-lbs<br/><br/>

Velocidades: 200 a 1025 RPM<br/><br/>

Las tablas de especificaciones incluyen ejemplos de nuestros modelos más populares
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc