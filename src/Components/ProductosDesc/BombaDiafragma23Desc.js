import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/23.-Bomba neumática Aro 666053-388.jpg';
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
        <h2>Bomba neumática Aro 666053-388</h2><br/>
        <p><strong>SKU:</strong>  666053-388</p>
        <p><strong>Categorías:</strong> Mercados, Automotriz, Aro Automotriz, Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba neumática ARO no metálica de 1/2″ 666053-388,
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales para el cuerpo (mojados): Polipropileno<br/><br/>

Diafragma / material de bola: Poliuretano<br/><br/>

Entrada de aire NPT (F) en (mm): 1/4" (6.3)<br/><br/>

Material de entrada / salida de fluido en (mm): 1/2 "(12.7)<br/><br/>

Flujo máximo gpm l / m: 13 (49.2)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc