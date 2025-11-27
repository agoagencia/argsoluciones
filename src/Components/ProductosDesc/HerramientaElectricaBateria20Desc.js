import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/20.-Pistola de presicion inalambrica ETS QXX2PT18EQ4.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Pistola de presicion inalambrica ETS<br/> QXX2PT18EQ4</h2><br/>
        <p><strong>SKU:</strong> QXX2PT18EQ4</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El destornillador de precisión inalámbrico QXX con empuñadura de pistola de 20 V ofrece el conjunto completo de funciones de la serie QX.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Configuración: Pistola ETS<br/><br/>

Torque: 3.6 - 18 Nm<br/><br/>

Velocidad: 500 RPM<br/><br/>

Empuje: 1/4 in. Quick Change<br/><br/>

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