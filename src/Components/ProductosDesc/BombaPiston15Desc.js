import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/15.-Sistema de extrusión Aro TP0844S51FF47AA2.jpg';
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
        <h2>Sistema de extrusión Aro TP0844S51FF47AA2</h2><br/>
        <p><strong>SKU:</strong>  TP0844S51FF47AA2</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema de Extrusión para manejo de Sellos y Silicones hasta de 1 Millon de Cps.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tipo de conexión entrada/salida: FNPT<br/><br/>

Tamaño de salida: 1 in<br/><br/>

Flujo máximo: 38 gpm. (14.4 lpm.)<br/><br/>

Rango de presión de entrada de aire: 30 - 120 psi (2.07 - 8.27 bar)<br/><br/>

Tipo: Chop check<br/><br/>

Rango de presión de fluido: 1320 - 5964 psi (91 - 273 bar)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc