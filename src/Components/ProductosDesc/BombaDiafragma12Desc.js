import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/12.-Bomba de diafragma Aro PD10A-AAP-FTT.jpg';
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
        <h2>Bomba de diafragma Aro PD10A-AAP-FTT</h2><br/>
        <p><strong>SKU:</strong>  PD10A-AAP-FTT</p>
        <p><strong>Categorías:</strong> Cerámica, Aro Cerámica, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba metálica de 1″ (teflón con santopreno) 52.2 gpm. Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          52.2 GPM (197.6 LPM)<br/><br/>

Tapa de fluido / Colector: Aluminio<br/><br/>

Sección central: Aluminio<br/><br/>

Material de asiento / bola: aluminio / Teflón<br/><br/>

Material del diafragma: Teflón con respaldo de Santopreno<br/><br/>

Kit de servicio de la sección a?rea: 637397<br/><br/>

Kit de sección de fluido: 637401-TT<br/><br/>

Conexión de fluido: 1" NPTF
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc