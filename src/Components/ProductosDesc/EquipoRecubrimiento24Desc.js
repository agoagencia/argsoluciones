import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/24.-Pistola manual Compact.jpg';
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
        <h2>Pistola manual Compact</h2><br/>
        <p><strong>SKU:</strong> Compact-X</p>
        <p><strong>Categorías:</strong>  Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Vidrio, Carlisle-Devilbiss Vidrio</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Trans-Tech, HVLP y tecnologías avanzadas convencionales para una combinación óptima de rendimiento, ergonomía y eficiencia
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El diseño compacto da como resultado un flujo de aire laminar o aerodinámico que permite una atomización eficiente y efectiva<br/><br/>

Utilizando la dinámica de fluidos computacional (CFD), el flujo de aire en la nueva pistola de pulverización compacta se modela para reducir la turbulencia y mejorar el proceso de atomización<br/><br/>

Construido para la comodidad ergonómica, el ahorro de energía y la responsabilidad medioambiental<br/><br/>

Pequeño y liviano que reduce la fatiga del operador<br/><br/>

Nuevo mango curvo para comodidad del operador<br/><br/>

Maneja materiales a base de solventes y agua, incluidos altos sólidos y 2k
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc