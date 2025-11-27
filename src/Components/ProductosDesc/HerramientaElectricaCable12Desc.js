import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/12.-Destornillador electrico en linea ES50T.jpg';
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
        <h2>Destornillador electrico en linea ES50T</h2><br/>
        <p><strong>SKU:</strong> ES50T</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Gracias al ajuste de arranque suave variable, salida de señal sin incrementos y salida de señal de ciclo completo, hay pocas cosas que el veloz destornillador tipo pistola y en línea de la serie ES no pueda hacer.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Voltaje: 115V CA<br/><br/>

Velocidad libre (rpm): 500-650<br/><br/>

Rango de torque recomendado (ft-lb): 0.4-9.0<br/><br/>

Rango de torque (Nm): 0.05-1.02
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc