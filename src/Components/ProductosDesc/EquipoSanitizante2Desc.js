import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos sanitizantes/2.-SaniSpray HP 20 25R791.jpg';
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
        <h2>SaniSpray HP 20 25R791</h2><br/>
        <p><strong>SKU:</strong> 25R791</p>
        <p><strong>Categorías:</strong> Equipos sanitizantes, Equipos para pintura, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pulverizador desinfectante sin aire portátil inalámbrico.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capacidad de la batería (Ah): 2,0<br/><br/>

Química de la batería: Ion de litio<br/><br/>

Voltaje de la batería (V): 20V<br/><br/>

Caudal Máximo (GPM): 0.16<br/><br/>

Tamaño máximo de punta (in): 0.019<br/><br/>

Presión máxima de trabajo (psi): 1000
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc