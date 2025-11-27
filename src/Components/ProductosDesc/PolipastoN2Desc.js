import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosNeumaticos/2.-Polipasto neumatico 7776E-2C10-C6S.jpg';
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
        <h2>Polipasto neumatico 7776E-2C10-C6S</h2><br/>
        <p><strong>SKU:</strong> 7776E-2C10-C6S</p>
        <p><strong>Categorías:</strong> Polipastos neumaticos, Manejo de materiales, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Polipasto de cadena neumático de 1 tonelada, control de botonera, levante de 10 pies, (3.05 mts.), altura de botonera 6 pies (1.83mts.), con cesto metálico porta cadena.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capacidad: 1 tonelada<br/><br/>

Izaje: 10 ft (3 m)<br/><br/>

Caídas: 2 |Velocidad: 21 ft/m<br/><br/>

Suspensión Superior:Gancho<br/><br/>

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