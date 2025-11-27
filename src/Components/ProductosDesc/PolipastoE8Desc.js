import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/manejoDeMateriales/PolipastosElectricos/8.-Trolley-(chain-driven).jpg';
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
        <h2>Trolley-(chain-driven)</h2><br/>
        <p><strong>SKU:</strong> Serie ST Electrico</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Adaptadores</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Polipastos Hitachi por su excelencia en diseño, calidad, confiabilidad y desempeño lo han posicionado como una marca líder en la industria del levantamiento de cargas. Ampliamente utilizado en la industria en general, automotriz y plantas de manufactura, as? como en almacenes y talleres.

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