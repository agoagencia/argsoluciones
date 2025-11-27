import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/23.-Pistola de pulverización por gravedad PROLite.jpg';
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
        <h2>Pistola de pulverización por gravedad PROLite</h2><br/>
        <p><strong>SKU:</strong> Prolite Gravity</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Automotriz, Carlisle-Binks Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola rociadora PROLite de DeVilbiss ofrece un rendimiento excepcional y capacidades de igualación de colores para los revestimientos de reparación de automóviles de hoy en día
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Este rendimiento de PROLite se logra utilizando conductos de aire de alta capacidad y una válvula de aire lineal para proporcionar un flujo uniforme y sin restricciones de aire comprimido a través del cuerpo de la pistola, lo que produce una atomización superior con una distribución uniforme de las gotas en todo el patrón de pulverización<br/><br/>

El diseño liviano ofrece un patrón de rociado y una distribución de atomización uniformes para lograr un acabado de calidad excepcional que exigen los pintores profesionales<br/><br/>

Gama de tecnologías avanzadas de boquillas de aire para un rendimiento de aplicación excelente con los últimos recubrimientos a base de agua y solventes<br/><br/>

Diseño de mango ergonómico con recorrido reducido del gatillo para disminuir la fatiga del operador<br/><br/>

Atomización que cumple con la legislación ambiental con alta eficiencia de transferencia que resulta en un ahorro significativo de pintura<br/><br/>

Cuerpo de pistola anodizado de aluminio forjado con deflector de aire extraíble para una vida útil más prolongada
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc