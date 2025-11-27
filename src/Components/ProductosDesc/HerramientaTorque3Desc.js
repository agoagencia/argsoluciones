import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Herramienta de Torque/ANTI TORQUE2.png';
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
        <h2>ANTI TORQUE </h2><br/>
        {/* <p><strong>SKU:</strong> G3A100RP106</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p> */}
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2><hr/>
          <p>
          Dispositivo Neumático o Eléctrico para jalar o empujar cargas en un sistema de rieles de aluminio.

Le da la facilidad al operador de desplazar cargas en forma horizontal sin tener que hacer esfuerzos, solo con movimientos naturales, ya que con oprimir un botón puedes desplazar una carga para adelante o hacia atrás en forma transversal o longitudinal.
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