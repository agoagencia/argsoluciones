import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/27.-Bomba para manejo de combustible 2”Aro 650719-C.jpg';
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
        <h2>Bomba para manejo de combustible 2″ Aro 650719-C</h2><br/>
        <p><strong>SKU:</strong>  650719-C</p>
        <p><strong>Categorías:</strong>  Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Neumática para manejo de combustibles en Aluminio con diafragmas de Viton y bolas de Acetal de 2″. Cumple con el código de especificación UL-79. Se utilizan para transferencias de cargas pesadas.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cuerpo: Aluminio<br/><br/>

Diafragmas: Viton<br/><br/>

Bolas: Acetal<br/><br/>

Entrada de aire: NPT 3/4" in (19.1 mm)<br/><br/>

Entrada y salida de fluido: 2" (50.8 mm)<br/><br/>

Máximo flujo: 105 gpm (397.5 l/min)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc