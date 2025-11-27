import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Herramienta de Torque/TIPO PLUMA.png';
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
        <h2>TIPO PLUMA</h2><br/>
      {/*   <p><strong>SKU:</strong> G3A100RP106</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p> */}
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2><hr/>
          <p>
          Brazo Jib<br/><br/>
El Jib Arm funciona para cubrir áreas pequeñas en donde no tiene acceso un sistema de rieles, su cobertura radial es de 4 a 20 ft con un giro de 220º y 360º grados, cuenta con el riel ergonómico de aluminio Cormac®.<br/><br/>

Incluye trolley de carga para polipasto.
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