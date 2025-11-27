import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos automatizados/2.-Dosificador de desplazamiento positivo Promix PD.jpg';
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
        <h2>Dosificador de desplazamiento<br/> positivo Promix PD</h2><br/>
        <p><strong>SKU:</strong> Promix PD</p>
        <p><strong>Categorías:</strong> Equipos automatizados, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Capaz de manejar hasta 4 bombas diferentes para que usted pueda dosificar diferentes productos químicos y gestionar varios aplicadores en un mismo sistema
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Caudal: 20 y 800 cc/min* *Los caudales de 3K o 4K podrían ser superiores en función del tamaño de la bomba y de la relación<br/><br/>

Presión de trabajo máxima del fluido: Sistemas de baja presión MC1000/AC1000: 21 bar (2,1 MPa, 300 psi)<br/><br/>

Sistemas de alta presión MC2000/AC2000: 105 bar (10,5 MPa, 1500 psi)<br/><br/>

Requisitos de presión de suministro del fluido: Baja presión  75?% de presión de pulverización/salida Alta presión  80?% presión de pulverización/salida<br/><br/>

Presión de trabajo máxima del aire: 7 bar (0,7 MPa, 100 psi)<br/><br/>

Presión máx. de suministro: 7 bar (100 psi)<br/><br/>

Rango de presiones: 6 bar - 7 bar (85-100 psi)<br/><br/>

Tamaño de filtración para lógica de aire: 5 micras<br/><br/>

Tamaño de filtración para aire de pistola de pulverización: 30 micras Consumo de aire: Controles de PD2K: 1 scfm máx<br/><br/>

Tamaño de entrada del filtro de aire: 3/8 npt(f)<br/><br/>

Filtración de aire: Lógica de aire (suministrada por Graco): mínimo de 5 micras limpio/seco<br/><br/>

Aire para atomizar (suministrado por el usuario): Rango de relación de mezcla<br/><br/>

Rango de relación de 2K: 0,1:1 y 50:1, ? 1?%<br/><br/>

Rango de relación de 3K: 0,1:1 y 100:1, ? 1?%<br/><br/>

Fluidos admitidos: Epoxis, uretanos, metálicos, no metálicos, adpro, imprimador, mano de acabado, transparentes, base agua, base disolvente
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc