import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/3.-Bomba de diafragma Aro 666053-344.jpg';
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
        <h2>Bomba de diafragma Aro 666053-344</h2><br/>
        <p><strong>SKU:</strong>  666053-344</p>
        <p><strong>Categorías:</strong>Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de diafragma Aro https://www.arozone.com/es-es/diaphragm-pumps?utm_source=google&utm_medium=cpc&ad_account=ARO&utm_campaign=LATAM-ES-Search&campaign_id=293030953&ad_group_id=102534284873&keyword=%2Bbomba%20%2Baro&ad_position=&gclid=Cj0KCQjwkruVBhCHARIsACVIiOw1mS05u9dpYkmZA2HS5zWWFzD8FFIe28hJFe7y0s5Vq-qO0rpkNmIaAvD5EALw_wcBNo-Metálica de 1/2″, puertos roscados, construcción motor partes húmedas y asientos de polipropileno, bolas y diafragmas de teflón

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada/Salida: 1/2"<br/><br/>

Flujo: 10 gpm<br/><br/>

Max. Flujo GPM: 13<br/><br/>

Max. Flujo de Aire: 19 cfm<br/><br/>

Max. Presion PSI: 100<br/><br/>

Material de Contruccion: Polipropileno<br/><br/>

Material de Diafragma: PTFE<br/><br/>

Material de Bola: PTFE<br/><br/>

Asiento Check Material: Polipropileno<br/><br/>

Entrada de Aire (F)NPT: 1/4"<br/><br/>

Conexion de Manifold
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc