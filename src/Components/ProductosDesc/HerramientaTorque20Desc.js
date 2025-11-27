import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Herramienta de Torque/Rieles Ergonomicos.png';
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
        <h2>Rieles Ergonómicos</h2><br/>
      {/*   <p><strong>SKU:</strong> G3A100RP106</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p> */}
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2><hr/>
          <p>
          Sistema de rieles de aluminio ligeros, ergonómicos, robustos y seguros.<br/><br/>
Son la respuesta a sus necesidades de manejo de materiales.<br/><br/>
Desarrollados para superar los estándares de la industria.<br/><br/>
Probados y certificados para garantizar hasta 5 veces la capacidad especificada.<br/><br/>
Se instalan de manera fácil y rápida, obteniendo un ahorro en tiempo y costo.<br/><br/>
No llevan pintura y son libres de corrosión.<br/><br/>
Su parte interna por ser cerrada, minimiza la acumulación de suciedad.<br/><br/>
Facilitan operaciones reduciendo esfuerzo con un deslizamiento suave y silencioso.<br/><br/>
Cuentan son T-Slots en ambos lados lo cual facilita su montaje y unión.
          </p><br/><br/>
     {/*      <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad libre máxima: 10000<br/><br/>

Longitud: 244 mm<br/><br/>

Peso: 2.2 kg<br/><br/>

Consumo de aire: 33 cfm
          </p> */}
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc