import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/5.-Bomba de diafragma Aro 666100-344-C.jpg';
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
        <h2>Bomba de diafragma Aro 666100-344-C</h2><br/>
        <p><strong>SKU:</strong>  666100-344-C</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Manejo de fluidos, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de diafragma puertos roscados NPTF de 1″, partes húmedas y manifolds en aluminio, tornillería de acero, asientos de polipropileno bolas y diafragmas de teflón, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Radio: 1:1<br/><br/>

Fluido máximo: 35 g.p.m. (133 l.p.m.)<br/><br/>

Desplazamiento por ciclo: 0.16 gal. (0.60 lt.)<br/><br/>

Entrada de aire: 1/4 - 18 N.P.T.F. - 1<br/><br/>

Entrada y salida de fluido: 1 - 11-1/2 N.P.T.F. - 1<br/><br/>
M?xima presi?n operacional: 120-psi (8.3-bar)<br/><br/>

Máximos sólidos: 1/8-inch (3.2-mm)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc