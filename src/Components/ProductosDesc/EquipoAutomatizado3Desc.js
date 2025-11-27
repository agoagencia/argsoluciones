import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos automatizados/3.-Ransburg RMA-580-590.jpg';
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
        <h2>Ransburg RMA-580/590</h2><br/>
        <p><strong>SKU:</strong> RMA-580/590</p>
        <p><strong>Categorías:</strong>  Equipos automatizados, Carlisle-DeVilbiss, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El RMA-580 es un atomizador rotativo montado en un robot de desconexión rápida diseñado para aplicar electrostaticamente recubrimientos de disolvente y agua, usando un método de carga directa.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Capaz de velocidades de hasta 100.000 rpm, logrando una atomización y versatilidad óptimas para los revestimientos actuales<br/><br/>

Diseño de taza de campana serrato y no serrato, proporciona flexibilidad de aplicación y coincidencia de colores<br/><br/>

Diseño resistente que ofrece una excelente vida útil, incluso cuando se somete a los movimientos rápidos de las aplicaciones robóticas
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc