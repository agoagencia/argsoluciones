import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/5.-Bomba de pistón de 4 esferas Aro AF0805M11FF48.jpg';
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
        <h2>Bomba de pistón de 4 esferas Aro AF0805M11FF48</h2><br/>
        <p><strong>SKU:</strong>  AF0805M11FF48</p>
        <p><strong>Categorías:</strong> Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de pistón Serie AF0805, Proporción 5:1, Motor de aire de 8″, Flujo máximo de 32.8 GPM (124 LPM), Fluido máximo: 702

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero inoxidable<br/><br/>

Material del émbolo: Acero inoxidable revestimiento cerámico<br/><br/>

Empaquetaduras superiores: UHMW-PE<br/><br/>

Empaquetaduras inferiores: UHMW-PE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc