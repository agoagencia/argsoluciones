import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosNeumaticos/3.-Polipasto neumatico CL250K-2C10-C6U.jpg';
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
        <h2>Polipasto neumatico CL250K-2C10-C6U</h2><br/>
        <p><strong>SKU:</strong> CL250K-2C10-C6U</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Polipastos neumaticos, Manejo de materiales, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Polipasto de Cadena Neumático de 1/4″ Ton., serie CLK, control de botonera, altura de levante 10 pie. (3.05 mts.), altura de botonera 6 pies, suspensión superior de gancho y cesto porta cadena de lona.

          </p><br/><br/>
          {/* <h5>Información Técnica</h5> */}
          <div className='line'></div>
          <p>
          Polipasto de Cadena Neumático Ingersoll Rand<br/><br/>

Serie: CLK<br/><br/>

Capacidad: 1/4" tonelada<br/><br/>

Izaje: 10 ft (3 m)<br/><br/>

Caídas: 1<br/><br/>

Velocidad: 32 ft/m<br/><br/>

Suspensión Superior: Gancho<br/><br/>

Control: Botonera<br/><br/>

Con cesto porta cadena de lona
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc