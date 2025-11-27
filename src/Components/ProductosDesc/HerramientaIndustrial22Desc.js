import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/22.-Herramienta de pulso 35PTHH403.jpg';
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
        <h2>Herramienta de pulso 35PTHH403<br/> Cleco</h2><br/>
        <p><strong>SKU:</strong> 35PTHH403</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Cleco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Herramienta de pulso Cleco 35PTHH403 unidad cuadrada de 3/8″
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Torque Range Ft. Lbs.: 14.8 a 25.8<br/><br/>

Rango de par Nm: 20 a 35<br/><br/>

RPM de velocidad libre: 4000<br/><br/>

Entrada de aire: 1/4 "NPT<br/><br/>

Consumo de aire: 15,9 SCFM<br/><br/>

Diámetro interno recomendado de la manguera: 3/8 "
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc