import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaCable/9.-Destornillador electrico de baja torsion en linea VersaTec EL0410B.jpg';
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
        <h2>Destornillador electrico de baja<br/> torsion en linea VersaTec<br/> EL0410B</h2><br/>
        <p><strong>SKU:</strong> EL0410B</p>
        <p><strong>Categorías:</strong> Herramienta electrica de cable, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Con un pulsador de reversa simple y un gatillo de dos dedos, el destornillador de baja torsión VersaTec es la herramienta fundamental para la comodidad del usuario
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Voltaje: 24V DC<br/><br/>

Velocidad libre (rpm): 750-1000<br/><br/>

Rango de torque recomendado (ft-lb): 0.44-4.79<br/><br/>

Rango de torque (Nm): 0.05-0.54
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc