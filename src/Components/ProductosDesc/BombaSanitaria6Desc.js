import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/6.-Bomba de doble diafragma SaniForce 2150 Graco.jpg';
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
        <h2>Bomba de doble diafragma SaniForce 2150 Graco</h2><br/>
        <p><strong>SKU:</strong>  Saniforce 2150</p>
        <p><strong>Categorías:</strong>  Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de doble diafragma sanitaria de 2 pulgadas con caudales de hasta 150 gpm (568 lpm)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 8 bares, 0.8 MPa<br/><br/>

Rango de operación de presión de aire: 1.4?8 bar, 0.14?0.8 MPa<br/><br/>

Consumo máximo de aire: 1.4 m? / minuto<br/><br/>

Consumo de aire a 70 psi, 20 gpm: 1.2 m? / minuto<br/><br/>

Entrega máxima de flujo libre: 159 lpm<br/><br/>

Velocidad máxima de la bomba: 256 cpm<br/><br/>

Galones / litros por ciclo *: 0.57L<br/><br/>

Altura máxima de succión: 8.8 m húmedo, 4.9 m seco<br/><br/>

Sólidos bombeables de tamaño máximo: 3.2 milímetros
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc