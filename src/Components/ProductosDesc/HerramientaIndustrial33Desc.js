import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaNeumatica/HerramientaIndustrial/33.-Pistola no reversible 5RANST8 Serie 5.jpg';
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
        <h2>Pistola no reversible 5RANST8<br/> Serie 5 Ingersoll Rand</h2><br/>
        <p><strong>SKU:</strong> 5RANST8</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El taladro reversible tipo pistola de la serie 5 está hecho con materiales de alta calidad y diseños ergonómicos.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Actuación: Inicio del gatillo<br/><br/>

Reversible<br/><br/>

Velocidad libre: 900 rpm<br/><br/>

Entrada de aire: 1/4 pulg. NPT<br/><br/>

cfm: 17
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc