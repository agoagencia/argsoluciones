import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/8.-Bomba de diafragma Aro 6662A3-344-C.jpg';
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
        <h2>Bomba de diafragma Aro 6662A3-344-C</h2><br/>
        <p><strong>SKU:</strong>   6662A3-344-C</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de diafragma, puertos brindados de 1 1/2″ sección motor en aluminio, partes húmedas , manifolds y asientos en polipropileno, bolas y diafragmas de teflón.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Radio: 1:1<br/><br/>

Fluido máximo: 145 g.p.m. (548.8 l.p.m.)<br/><br/>

Desplazamiento por ciclo: 0.72 gal. (2.7 lt.)<br/><br/>

Entrada y salida de fluido: 2" Brida
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc