import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/8.-Aprietatuercas angular 19RAA04AM2.jpg';
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
        <h2>Aprietatuercas angular <br/>19RAA04AM2 Cleco</h2><br/>
        <p><strong>SKU:</strong> 19RAA04AM2</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Cleco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          CLECO 1/4″ ANGLE NUTRUNNER, 19RAA04AM2 12-42 EN LIBRAS 950 RPM
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Rango de par (en lbs): 12 - 42<br/><br/>

Velocidad libre: 950 RPM<br/><br/>

Entrada de aire: 1/8 "<br/><br/>

Min Manguera: 3/16 "<br/><br/>

Consumo de aire: 11 SCFM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc