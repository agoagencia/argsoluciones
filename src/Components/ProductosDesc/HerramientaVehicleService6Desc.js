import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/6.-Matraca neumatica 1105MAX-D2.jpg';
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
        <h2>Matraca neumatica 1105MAX-D2</h2><br/>
        <p><strong>SKU:</strong> 1105MAX-D2</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Matraca neumática Ingersoll Rand 1105MAX-D2, Con la matraca de aire de la serie 1105MAX, obtienes la mejor potencia y velocidad en su clase.

 
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Nombre del modelo: 1105MAX-D2<br/><br/>

Consumo de aire de velocidad: 20 (566)<br/><br/>

Velocidad libre: 300RPM<br/><br/>

Entrada de aire: 1/4"<br/><br/>

Torque máximo: 30 (41) ft/lb
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc