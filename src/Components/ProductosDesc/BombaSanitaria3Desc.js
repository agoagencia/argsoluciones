import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/3.-Bomba de diafragma sanitaria FD5111 Graco.jpg';
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
        <h2>Bomba de diafragma sanitaria FD5111 Graco</h2><br/>
        <p><strong>SKU:</strong> FD5111</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba de doble diafragma accionadas por aire para aplicaciones sanitarias Saniforce 515, materiales de contacto con fluidos están clasificados por la FDA y cumplen con el Título 21 de CFR

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presion maxima de trabajo de fluido: 7 bar (0.7 MPa, 100 psi)<br/><br/>

Rango de funcionamiento de presion de aire: 1.4-7 bar (0.14-0.7MPa, 20-100psi)<br/><br/>

Consumo de aire: 0.8 m 3 / min (28 scfm)<br/><br/>

Entrega maxima de fluido libre: 61 l / min (16 gpm)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc