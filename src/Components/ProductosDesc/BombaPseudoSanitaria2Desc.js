import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bomba pseudosanitaria/2.-Bomba pseudosanitaria de 1”Aro PM10S-CSS-STT-A02.jpg';
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
        <h2>Bomba pseudosanitaria de 1″ Aro PM10S-CSS-STT-A02</h2><br/>
        <p><strong>SKU:</strong> PM10S-CSS-STT-A02</p>
        <p><strong>Categorías:</strong> Bombas pseudosanitaria, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Construida con materiales aceptados por FDA. Sección de fluidos. Construcción con pernos y todos los accesorios de acero inoxidable. Todas las piezas en contacto con el fluido de fundición en un único molde. Aplicaciones típicas: procesamiento de alimentos.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Materiales de la carcasa de la bomba: Acero inoxidable<br/><br/>

Materiales del diafragma: Teflón
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc