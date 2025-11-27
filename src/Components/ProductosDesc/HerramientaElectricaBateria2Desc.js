import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/2.-Atornillador angular de alto torque ETS Ingersoll Rand QXX5AT80ES08.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Atornillador angular de alto torque<br/>
         ETS Ingersoll Rand <br/>QXX5AT80ES08<br/></h2><br/>
        <p><strong>SKU:</strong> QXX5AT80ES08</p>
        <p><strong>Categorías: </strong>Herramienta electrica de bateria, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El atornillador de precisión QXX de ángulo de alto torque de 40 V ofrece el conjunto completo de funciones de la serie QX IR. Con hasta 8 configuraciones programables, transmisión de datos inalámbrica y pantalla de herramientas
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          
Configuración: Pistola ETS<br/><br/>

Torque: 12.0 - 80 Nm<br/><br/>

Velocidad: 375 RPM<br/><br/>

Empuje: 1/2 in. Square<br/><br/>

Comunicación: Inalámbrico habilitado + USB
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc