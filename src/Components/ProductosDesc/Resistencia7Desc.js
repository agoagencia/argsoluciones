import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/resistenciasConLogo/7.-Bandas de núcleo cerámico.jpg';
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
        <h2>Bandas de núcleo cerámico</h2><br/>
        <p><strong>SKU:</strong> </p>
        <p><strong>Categorías:</strong> Resistencias</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las resistencias tipo banda de núcleo cerámico se fabrican a partir de 2″ de diámetro.

Tienen la particularidad de poder calentar hasta un 50% más que las resistencias tipo banda de mica. Su tiempo de vida también es más largo y son en general más fuertes y resistentes.
<br/><br/>
Se pueden fabricar monofásicas y trifásicas.

Si necesita más información no dude en llamarnos
          </p><br/><br/>
          {/* <h5>Información Técnica</h5> */}
          <div className='line'></div>
          <p>
         
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc