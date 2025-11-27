import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Herramienta de Torque/ZERO GRAVITY 1.png';
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
        <h2>ZERO GRAVITY</h2><br/>
       {/*  <p><strong>SKU:</strong> G3A100RP106</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p> */}
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2><hr/>
          <p>
          ZG Zero Gravity<br/><br/>
Este balancín es ideal para colgar pistolas para soldar o herramientas de peso constante.<br/><br/>
Las ventajas son muchas:<br/><br/>

Mantener la herramienta en posición.<br/><br/>
Mínimo esfuerzo para subir y bajar.<br/><br/>
Mantenimiento mínimo requerido.<br/><br/>
Diseño robusto + operación confiable. Nuestros balancines son construidos por especialistas usando materiales de alta calidad que aseguran una larga vida útil.<br/><br/>

Fácil de operar.<br/><br/>
Rápida instalación.<br/><br/>
Nuestros balancines permiten a los operadores elevar y posicionar las cargas de una manera ergonómica sin esfuerzo utilizando movimientos naturales.<br/><br/>

Combinado con nuestro sistema de riel de aluminio Cormac® se obtiene un sistema completo para una estación de trabajo ergonómico.
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