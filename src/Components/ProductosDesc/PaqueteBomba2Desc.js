import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Paquetes de bombas/2.-Paquetes de bomba Triton.jpg';
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
        <h2>Paquetes de bomba Triton</h2><br/>
        <p><strong>SKU:</strong>  Paquete Triton</p>
        <p><strong>Categorías:</strong>Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Tritón es un paquete de pulverización de diafragma neumático que aplica un acabado decorativo de alta calidad a las piezas de madera y metal. Es una alternativa más efectiva para tanques de presión tradicionales y bombas de diafragma estándar.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 7.0 bares, 0.7 MPa<br/><br/>

Presión máxima de aire entrante: 7.0 bares, 0.7 MPa<br/><br/>

Temperatura máxima de funcionamiento: 49 C
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc