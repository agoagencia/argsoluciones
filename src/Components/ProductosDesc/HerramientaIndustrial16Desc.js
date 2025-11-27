import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/16.-Destornillador en línea QS1P10S1D.jpg';
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
        <h2>Destornillador en línea QS1P10S1D <br/>Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> QS1P10S1D</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Ingersoll Rand Automotriz, Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El Destornillador de Embrague del Cierre de Precisión ajustable ofrece el control de la torsión precisa
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Recomendado para uniones donde el control de la torsión preciso se requiere.<br/><br/>

Variedad de la torsión (empate suave): 3. 0 a 47. 8 in. -libras. / 0. 3 - 5. 4 Nm<br/><br/>

Velocidades: 250 A 2800 RPM<br/><br/>

El diseño ergonómico reduce la fatiga del operador<br/><br/>

Las mesas de la especificación incluyen ejemplos de nues
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc