import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/26.-Bomba para manejo de combustible 1” Aro 650717-C.jpg';
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
        <h2>Bomba para manejo de combustible 1″ Aro 650717-C</h2><br/>
        <p><strong>SKU:</strong>  650717-C</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Neumática para manejo de Combustibles en Aluminio y Vitón de 1″. Cumple la Norma UL-79, rendimiento 29 GPM. Marca Aro
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Cuerpo: Aluminio<br/><br/>

Diafragmas: Viton<br/><br/>

Bolas: Acetal<br/><br/>

Entrada de aire: NPT 1/4? in (6.3 mm)<br/><br/>

Entrada y salida de fluido: 1? / 1? (25.4 mm)<br/><br/>

Máximo flujo: 29 gpm (109.8 l/min)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc