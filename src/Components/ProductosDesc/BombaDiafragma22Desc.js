import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/22.-Bomba neumática Aro 666053-322.jpg';
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
        <h2>Bomba neumática Aro 666053-322</h2><br/>
        <p><strong>SKU:</strong>  666053-322</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática de diafragma, serie compacta no metálica de estilo clásico de 1/2 «, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada / salida máxima de aire:?100 psi (6.9 bar) / 100 psi (6.9 bar)<br/><br/>

Tasa de flujo: 10 gpm. duckbill, 13 gpm Ball<br/><br/>

Material del asiento: polipropileno<br/><br/>

Material del diafragma: nitrilo<br/><br/>

Material de bola: nitrilo
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc