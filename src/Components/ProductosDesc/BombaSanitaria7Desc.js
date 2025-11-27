import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/7.-Bomba de doble diafragma SaniForce 3150 3A Graco.jpg';
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
        <h2>Bomba de doble diafragma SaniForce 3150 3A Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 3150 3A</p>
        <p><strong>Categorías:</strong>Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Con una conexión Tri-clamp de hasta 4,0 pulgadas, esta bomba neumática de doble diafragma sanitaria, de desarmado rápido y fácil de limpiar, tiene caudales de hasta 150 gpm (568 lpm) y tiene certificación 3A

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 8 bar, 0.8 MPa<br/><br/>

Rango de operación de presión de aire: 1.4?8 bar, 0.14?0.8 MPa<br/><br/>

Consumo máximo de aire: 5.0 m? / minuto<br/><br/>

Consumo de aire a 70 psi, 60 gpm: 1.4 m? / minuto<br/><br/>

Entrega máxima de flujo libre: 570 lpm<br/><br/>

Velocidad máxima de la bomba: 145 cpm<br/><br/>

Galones / litros por ciclo *: 3.9L<br/><br/>

Tamaño de entrada de aire: 0.5 en npt (f)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc