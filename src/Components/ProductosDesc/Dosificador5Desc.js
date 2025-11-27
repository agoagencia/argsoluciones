import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Dosificadores/5.-IntelliFlow RM2 Electronic.jpg';
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
        <h2>IntelliFlow RM2 Electronic</h2><br/>
        <p><strong>SKU:</strong> RM2 Electronic</p>
        <p><strong>Categorías:</strong> Dosificadores, Carlisle-DeVilbiss, Mercados, Madera, Carlisle-Devilbiss Madera, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El IntelliFlow RM2, es un dosificador electrónico de componentes plurales de nivel de entrada, está diseñado para minimizar el desperdicio y maximizar la consistencia para una amplia gama de aplicaciones de pulverización manual.<br/><br/>

• Hasta 7 colores; proporciones de mezcla de hasta 100:1<br/>
• Operación fácil e instalación perfecta<br/>
• Genera un ROI comprobado para su negocio<br/>
• Retoque o producción completa<br/>
• Los productos IntelliFlow brindan automatización avanzada y facilidad de uso para impulsar la eficiencia, el tiempo de actividad y la optimización de procesos
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Velocidad libre máxima: 10000<br/><br/>

Longitud: 244 mm<br/><br/>

Peso: 2.2 kg<br/><br/>

Consumo de aire: 33 cfm
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc