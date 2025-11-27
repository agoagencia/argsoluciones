import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/10.-Filtro regulador lubricador C38341-600.jpg';
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
        <h2>Filtro regulador lubricador C38341-600</h2><br/>
        <p><strong>SKU:</strong> C38341-600</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Unidades de Mantenimiento de Aire: Filtro-Regulador-Lubricador. Desde 1/4 a 3″.

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