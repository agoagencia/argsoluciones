import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/11.-Bomba de diafragma Aro PD10A-AAP-AAA.jpg';
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
        <h2>Bomba de diafragma Aro PD10A-AAP-AAA</h2><br/>
        <p><strong>SKU:</strong>  PD10A-AAP-AAA</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba metálica de 1″ (santopreno) 52.2 gpm. Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          52.2 GPM (197.6 LPM)<br/><br/>

Tapa de fluido / Colector: Aluminio<br/><br/>

Sección central: Aluminio<br/><br/>

Material de asiento / bola: Santoprene<br/><br/>

Material del diafragma: Santoprene<br/><br/>

Kit de servicio de la sección a?rea: 637397<br/><br/>

Kit de sección de fluido: 637401-AA<br/><br/>

Conexión de fluido: 1" NPTF<br/><br/>

Peso: 25.30 lbs - 11.4
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc