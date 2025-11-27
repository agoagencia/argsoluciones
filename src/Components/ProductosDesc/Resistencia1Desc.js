import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/resistenciasConLogo/1.-Resistencias tipo tubular.jpg';
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
        <h2>Resistencias tipo tubular</h2><br/>
        <p><strong>SKU:</strong> </p>
        <p><strong>Categorías:</strong> Resistencias</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las resistencias tipo tubular se fabrican principalmente de 5/16″ , 3/8″ y 1/2″  y 5/8″  de diámetro. Pero también podemos, sobre pedido especial fabricar en medidas milimétricas.

Se utilizan para calentar cualquier tipo de líquido, para calentar por contacto o irradiación y para aire.<br/><br/>

Según la necesidad de cada cliente podemos darle cualquier forma, recta, en “U”, “W”, “l”, ondulada, espiral etc etc.

Se fabrican para cualquier voltaje, sea monofásico o trifásico.

Si tiene algún proyecto que necesite de nuestra asesoría, no dude en contactarnos.
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