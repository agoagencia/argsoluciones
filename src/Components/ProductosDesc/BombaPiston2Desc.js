import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/2.-Bomba de pistón chop check Aro NM2322E-11-P43.jpg';
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
        <h2>Bomba de pistón chop check Aro NM2322E-11-P43</h2><br/>
        <p><strong>SKU:</strong>  NM2322E-11-P43</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de pistón Serie NM2322E/F, Proporción 22:1, Motor de aire de 3″, Flujo máximo de 0.99 GPM (3.7 LPM), Fluido máximo: 3300 psi, Marca Aro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero al carbono<br/><br/>

Material del émbolo: 17-4, inoxidable<br/><br/>

Empaquetaduras superiores: UHMW-PE PTFE escalonado<br/><br/>

Empaquetaduras inferiores: UHMW-PE con émbolo estándar
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc