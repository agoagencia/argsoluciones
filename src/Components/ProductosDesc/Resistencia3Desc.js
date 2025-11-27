import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/resistenciasConLogo/3.-Resistencia tipo cartucho.jpg';
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
        <h2>Resistencia tipo cartucho</h2><br/>
        <p><strong>SKU:</strong></p>
        <p><strong>Categorías:</strong> Resistencias</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las resistencias tipo cartucho se fabrican en 1/4, 5/16, 3/8, 1/2, 7/16, 5/8, 3/4, 7/8  y  1″.  También los fabricamos sobre pedido en medidas milimétricas.

Pueden ser en acero inoxidable o latón.<br/><br/>

Principalmente se utilizan en moldes. También se pueden fabricar para calentar líquidos y aire.

No dude en llamarnos!
          </p><br/><br/>
          {/* <h5>Información Técnica</h5> */}
          <div className='line'></div>
          <p>

          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc