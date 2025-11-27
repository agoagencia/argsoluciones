import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/accesorios/9.-Filtro para material Aro 651420-40.jpg';
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
        <h2>Filtro para material Aro 651420-40</h2><br/>
        <p><strong>SKU:</strong> 651420-40</p>
        <p><strong>Categorías:</strong> Accesorios</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Retira los trozos y las partículas de material bombeado a fin de garantizar la entrega homogénea y de libre flujo de material a la válvula dispensadora

          </p><br/><br/>
          {/* <h5>Información Técnica</h5> */}
          <div className='line'></div>
          <p>
          Tamaños de 1/4 pulg. a 1 pulg. disponibles<br/><br/>

Opciones de material de acero al carbono y acero inoxidable<br/><br/>

Opciones enchapadas con niquelado químico y pasivadas disponibles
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc