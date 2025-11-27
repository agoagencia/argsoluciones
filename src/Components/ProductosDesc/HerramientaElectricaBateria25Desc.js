import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/25.-Taladro inalambrico de alta torsion de 1 2V de 38” D1130.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Taladro inalambrico de alta torsion de 12V de 3/8″ D1130</h2><br/>
        <p><strong>SKU:</strong> D1130</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Optimizado para trabajar en superficies metálicas y sintéticas, este versátil taladro / atornillador inalámbrico de 12 V es una gran herramienta para operaciones automotrices y MRO
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Voltaje: 12V<br/><br/>

Batería: BL1203<br/><br/>

Velocidad libre baja (rpm): 400<br/><br/>

Velocidad libre alta (rpm): 1600
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc