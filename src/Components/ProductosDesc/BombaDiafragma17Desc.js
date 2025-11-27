import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/17.-Bomba de diafragma Aro PD20A-AAP-GGG-B.jpg';
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
        <h2>Bomba de diafragma Aro PD20A-AAP-GGG-B</h2><br/>
        <p><strong>SKU:</strong>  PD20A-AAP-GGG-B</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma aro de 2″ de aluminio, Marca Aro
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada / Salida: 2 - 11-1 / 2 NPTF<br/><br/>

Motor neumático : aluminio<br/><br/>

Tapas de fluido y material del colector: aluminio<br/><br/>

Sujetadores: acero chapado<br/><br/>

Material del asiento: nitrilo<br/><br/>

Material de la bola: nitrilo<br/><br/>

Material d
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc