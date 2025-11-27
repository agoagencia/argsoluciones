import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/7.-Atornillador inalambrico QXX2PT12PS6.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Atornillador inalambrico<br/> QXX2PT12PS6</h2><br/>
        <p><strong>SKU:</strong> QXX2PT12PS6</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Ingersoll Rand
</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Atornillador inalámbrico tipo pistola, Torque Max. 12 Nm., cuadro de 3/8″.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          750 RPM<br/><br/>

Peso: 2.0 (0.91 kg)<br/><br/>

Longitud: 8.35 (212.0)

20V
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc