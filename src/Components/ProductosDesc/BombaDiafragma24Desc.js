import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/24.-Bomba neumática Aro 666053-3EB.jpg';
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
        <h2>Bomba neumática Aro 666053-3EB</h2><br/>
        <p><strong>SKU:</strong>  666053-3EB</p>
        <p><strong>Categorías:</strong> Cerámica, Automotriz, Aro Automotriz, Aro Cerámica, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática ARO compacta 1/2″ estilo clásico, no metálica

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tapa de fluido y colector: Polipropileno<br/><br/>

Sección central: polipropileno<br/><br/>

Material del asiento: polipropileno<br/><br/>

Material de la bola: Santopreno<br/><br/>

Material de diafragma: Santopreno


          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc