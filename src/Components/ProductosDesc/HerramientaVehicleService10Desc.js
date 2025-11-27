import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/10.-Turbina angular 1-4″ 301B Ingersoll Rand.jpg';
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
        <h2>Turbina angular 1/4″ 301B Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 301B</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Turbina Angular Neumática de 1/4″, 0.25 h.p., 21,000 rpm., collet de 1/4″ long. 5.27″, peso 0.46 Kg.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Potencia: 0.25 hp<br/><br/>

Velocidad Max. 21,000 rpm<br/><br/>

Collet: 1/4"<br/><br/>

Peso: 0..46<br/><br/>

Consumo de Aire PROM: 3 CFM<br/><br/>

Entrada aire 1/4"NPTF<br/><br/>

Presión: 90 PSI
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc