import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/5.-Bomba de doble diafragma SaniForce 1590 Graco.jpg';
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
        <h2>Bomba de doble diafragma SaniForce 1590 Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 1590</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de doble diafragma sanitaria de 1-1/2 pulgadas con caudales de hasta 90 gpm (341 lpm)

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 8 bar, 0.8 MPa<br/><br/>

Material compatible: Aceite comestible, alimentos y cuidado personal<br/><br/>

Rango de operación de presión de aire: 1.4?8 bar, 0.14?0.8 MPa<br/><br/>

Consumo máximo de aire: 3.7 m? / minuto<br/><br/>

Consumo de aire a 70 psi, 50 gpm: 1.2 m? / minuto<br/><br/>

Entrega máxima de flujo libre: 379 lpm<br/><br/>

Velocidad máxima de la bomba: 200 cpm<br/><br/>

Galones / litros por ciclo *: 1.9 litros<br/><br/>

Altura máxima de succión: 8.8 m húmedo, 4.9 m seco<br/><br/>

Sólidos bombeables de tamaño máximo: 4.8 milímetros
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc