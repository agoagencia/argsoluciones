import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosNeumaticos/6.-Polipasto neumatico ML250K-2C10-B6U.jpg';
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
        <h2>Polipasto neumatico ML250K-2C10-B6U</h2><br/>
        <p><strong>SKU:</strong> ML250K-2C10-B6U</p>
        <p><strong>Categorías:</strong> Polipastos neumaticos, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Polipasto de Cadena Neum?tico de 1/4 Ton., control de botonera, altura de levante 10 pie. (3.05 mts.), altura de botonera 6 pie., suspension superior de gancho , gancho inferior bullard., y cesto portacadena de lona.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Polipasto de Cadena Neumático Ingersoll Rand<br/><br/>

Capacidad: ? tonelada<br/><br/>

Izaje: 10 ft (3 m)<br/><br/>

Caidas: 1<br/><br/>

Velocidad: 101 ft/m (30.78 m/min)<br/><br/>

Suspensión Superior: Gancho<br/><br/>

Control: Botonera<br/><br/>

Gancho inferior tipo bullard<br/><br/>

Con cesto portacadena de lona
         
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc