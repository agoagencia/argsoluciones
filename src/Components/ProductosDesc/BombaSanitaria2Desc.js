import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/2.-Bomba de diafragma electrica SaniForce 2150e Graco.jpg';
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
        <h2>Bomba de diafragma electrica SaniForce 2150e Graco</h2><br/>
        <p><strong>SKU:</strong> Saniforce 2150e</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba eléctrica de desplazamiento positivo de 2 pulgadas

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Flujo máximo de fluido: 142 gpm (537 l / min)<br/><br/>

Presión máxima de trabajo del fluido: 100 psi (6.9 bar, 0.69 MPa)<br/><br/>

Sólidos bombeables de tamaño máximo: 1/4 pulg. (6.3 mm)<br/><br/>

Desplazamiento de fluido por ciclo: 0.6 g (2.27 litros)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc