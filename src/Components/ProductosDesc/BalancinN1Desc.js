import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/BalancinesNeumaticos/1.-Balancin neumatico BW015080.jpg';
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
        <h2>Balancin neumático BW015080</h2><br/>
        <p><strong>SKU:</strong> BW015080</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Manejo de materiales, Ingersoll Rand, Balancines neumáticos</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Balancín neumático Serie B sin control Zimmerman Ingersoll Rand

Si necesita más información no dude en llamarnos
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Recorrido vertical: 2032 mm.<br/><br/>

Capacidad a 100 psi kg: 68<br/><br/>

Desplazamiento vertical: 80 in.<br/><br/>

Peso neto / kg: 29
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc