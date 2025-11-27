import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de piston/12.-Bomba de pistón y paquetes de 4 esferas Aro AF0604M11FF48.jpg';
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
        <h2>Bomba de pistón y paquetes de 4 esferas Aro AF0604M11FF48</h2><br/>
        <p><strong>SKU:</strong>  AF0604M11FF48</p>
        <p><strong>Categorías:</strong>  Bombas de piston, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de pistón Serie AF0604, Proporción 3:1, Motor de aire de 6″, Flujo máximo de 29.3 GPM (110.8 LPM), Fluido máximo: 457 psi
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Material de la bomba inferior: Acero inoxidable<br/><br/>

Material del émbolo: Acero inoxidable<br/><br/>

Entrada hidráulica: 3/8" NPT<br/><br/>

Salida hidráulica: 1/2" NPT<br/><br/>

Peso: 32.7 kg
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc