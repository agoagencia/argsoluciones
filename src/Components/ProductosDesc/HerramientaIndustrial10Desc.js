import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/10.-Aprietatuercas reversible 75RNL-2X-6.jpg';
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
        <h2>Aprietatuercas reversible <br/> 75RNL-2X-6 Cleco</h2><br/>
        <p><strong>SKU:</strong> 75RNL-2X-6</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Cleco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          
          CLECO 75RNL-2X-6 Apretador reversible
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Max Torque 325 Ft. Lbs.<br/><br/>

440 Nm<br/><br/>

Velocidad libre: 90 RPM<br/><br/>

Altura de la cabeza: 2.8 "| 70 MM<br/><br/>

Entrada de aire: 1/2 "NPT<br/><br/>

Min. ID de manguera 1/2"
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc