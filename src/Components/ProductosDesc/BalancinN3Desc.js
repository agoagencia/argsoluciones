import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesNeumaticos/3.-Balancin neumatico ZAW035080.jpg';
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
        <h2>Balancin neumático ZAW035080</h2><br/>
        <p><strong>SKU:</strong> ZAW035080</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Manejo de materiales, Ingersoll Rand, Balancines neumáticos</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Balancín neumático con botonera serie ZA Zimmerman Ingersoll Rand
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Recorrido vertical: 2032 mm.<br/><br/>

Capacidad a 100 psi kg: 158<br/><br/>

Desplazamiento vertical: 80 in.<br/><br/>c

Peso neto / kg: 28
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc