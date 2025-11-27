import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/8.-Pistola pulverizadora convencional 2101-4909-5.jpg';
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
        <h2>Pistola pulverizadora convencional 2101-4909-5</h2><br/>
        <p><strong>SKU:</strong> 2101-4909-5</p>
        <p><strong>Categorías:</strong> Carlisle-Binks, Pistolas pulverizadoras</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola pulverizadora binks serie 2100
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          M?x. presión de aire: 100 psi/ 6.9 bar Max<br/><br/>

Presión de fluido: 100 psi / 6.9 bar<br/><br/>

Material: Aluminio<br/><br/>

Tamaño de entrada de fluido: 3/8" NPS<br/><br/>

Tamaño de entrada de aire: 1/4" NPS<br/><br/>

Peso: 1 lb 6 oz / 635 gm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc