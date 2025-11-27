import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/13.-Pistola pulverizadora por gravedad 2466-18CN-12SG.jpg';
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
        <h2>Pistola pulverizadora por gravedad 2466-18CN-12SG</h2><br/>
        <p><strong>SKU:</strong> 2466-18CN-12SG</p>
        <p><strong>Categorías:</strong> Carlisle-Binks, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola pulverizadora Binks Trophy principal para usar en aplicaciones de pulverización de alimentación por gravedad y establece un nuevo estándar en durabilidad, ergonomía y atomización
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de aire: 140 psi / 9.6 bar (P-1)<br/><br/>

Cuerpo de pistola: aluminio<br/><br/>

Tamaño de entrada de fluido: 3/8 "- 19 NPS / BSP (f)<br/><br/>

Tamaño de entrada de aire: 1/4 "NPS / BSP (m)<br/><br/>

Peso de la pistola: 13.8 oz. / 394 gramos
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc