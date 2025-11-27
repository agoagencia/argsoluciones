import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaVehicleService/7.-Pistola de impacto 1-2 2235TiMAX-2.jpg';
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
        <h2>Pistola de impacto 1/2″ <br/> 2235TiMAX-2</h2><br/>
        <p><strong>SKU:</strong> 2235TiMAX-2</p>
        <p><strong>Categorías:</strong> Herramientas vehicle service, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de impacto de 1/2″ – 2235TiMAX-2 Ingersoll Rand, con un yunque extendido de 2″ es un caballo de batalla poderoso, duradero y confiable
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad máxima: 8500<br/><br/>

Entrada de aire: 1/4"<br/><br/>

Golpes por minuto: 1220<br/><br/>

Tamaño de la manguera: 3/8"
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc