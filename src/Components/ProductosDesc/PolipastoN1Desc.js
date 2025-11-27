import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosNeumaticos/1.-Polipasto de cadena neumatico 7756E-2C10-C6S.jpg';
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
        <h2>Polipasto de cadena neumatico 7756E-2C10-C6S</h2><br/>
        <p><strong>SKU:</strong> 7756E-2C10-C6S</p>
        <p><strong>Categorías:</strong> Cerámica, Automotriz, Aro Automotriz, Aro Cerámica,</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Polipasto de cadena neumatico de 1/2 tonelada, control de botonera, levante de 10 pies, (3.05 mts.), altura de botonera 6 pies (1.83mts.) con cesto metalico portacadena.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capacidad: ? tonelada <br/><br/>

Izaje: 10 ft (3 m)<br/><br/>

Caidas: 1 |Velocidad: 41 ft/m (12.5 m/min)<br/><br/>

Suspensión Superior: Gancho<br/><br/>

Control: Botonera<br/><br/>

Contenedor: Acero
         
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc