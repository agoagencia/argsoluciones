import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/15.-Bomba de diafragma Aro PD15P-FPS-PAA.jpg';
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
        <h2>Bomba de diafragma Aro PD15A-AAP-FTT</h2><br/>
        <p><strong>SKU:</strong> PD15A-AAP-FTT</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de diafragma, puertos roscados NPTF de 1 1/2″ sección motor en aluminio, partes húmedas, manifolds y asientos en aluminio, tornillería de acero galvanizado bolas y diafragmas de teflón.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Radio: 1:1<br/><br/>

Fluido máximo: 123 g.p.m. (465 l.p.m.)<br/><br/>

Desplazamiento por ciclo: 0.617 gal. (2.34 lt.)<br/><br/>

Entrada de aire: 1/2 - 14 N.P.T.<br/><br/>

Entrada y salida de fluido: 1-1/2? - 11-1/2 N.P.T.F.-1<br/><br/>

Máxima presión operacional: 120-psi (8.3-bar)<br/><br/>

Máximos sólidos: 1/4-inch (6.4-mm)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc