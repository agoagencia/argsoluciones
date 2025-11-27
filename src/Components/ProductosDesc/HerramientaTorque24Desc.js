import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Herramienta de Torque/TROLLEY.png';
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
        <h2>TROLLEY</h2><br/>
       {/*  <p><strong>SKU:</strong> G3A100RP106</p>
        <p><strong>Categorías:</strong> Herramienta industrial, Ingersoll Rand</p> */}
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2><hr/>
          <p>
          En la configuración de un sistema de rieles, la selección de la carretilla (Trolley) es crítica y es determinada sobretodo por los requerimientos del cliente.

Todos los Trolleys vienen equipados con doble rodillo guía, los cuales tienes cojinetes para trabajo pesado (heavy duty).

Las ruedas son de un polímero Dupont® de la más alta tecnología, las cuales nos ofrecen un largo período de vida sin sufrir deformaciones aún con carga máxima o largos periodos de tiempo con carga estática.
          </p><br/><br/>
     {/*      <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad libre máxima: 10000<br/><br/>

Longitud: 244 mm<br/><br/>

Peso: 2.2 kg<br/><br/>

Consumo de aire: 33 cfm
          </p> */}
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc