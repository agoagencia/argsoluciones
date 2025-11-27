import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/6.-Controlador IC12D1A1AWS.jpg';
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
        <h2>Controlador IC12D2A1AWS</h2><br/>
        <p><strong>SKU:</strong> IC12D2A1AWS</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Los controladores de la serie IC12D le ofrecen un control de bucle cerrado completo en un tamaño completo líder de la industria. Con características como pantalla de color VGA 1/4 e interfaz de programación intuitiva, las unidades IC12D proporcionan un rendimiento y un valor sin precedentes. Estos controladores tienen capacidad completa de comunicación utilizando Ethernet, RS232, Fieldbus o E/S estándar. Las unidades se pueden programar ya sea mediante un teclado o PC que ejecute software ICS. Los controladores IC12D se autoidentificarán y operarán toda la serie QE y QM de herramientas que facilitan la instalación y la operación.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cable de alimentación: 220 VAC<br/><br/>

Montaje: Pared Estandard<br/><br/>

Parámetro: S?<br/><br/>

CPN: 4.7090279E7<br/><br/>

Fieldbus: No
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc