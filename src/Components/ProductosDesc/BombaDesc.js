import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de grasa/1.-Bomba de aceite Aro AF0409A13PFL1.jpg';
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
        <h2>Paquetes de bomba de piston Merkur</h2><br/>
        <p><strong>SKU:</strong>  Paquete Merkur</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Paquetes de bomba de acabado fino sin aire o asistidos por aire para mejorar la productividad, reducir los costos y disminuir las emisiones. Con cuatro tamaños de motores de aire y 13 modelos diferentes para elegir, los nuevos y mejorados paquetes de bomba de acabado fino Merkur están diseñados para mejorar la productividad, reducir los costos, disminuir las emisiones y proporcionar acabados consistentes de alta calidad para todas sus aplicaciones exigentes.

Está probado que los paquetes de bomba Merkur sobrepasan y superan a las otras bombas de su tipo.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Temperatura máxima de funcionamiento: 71 C<br/><br/>

Longitud de la carrera: 64 mm<br/><br/>

Partes húmedas: Acero inoxidable, carburo de tungsteno, UHMWPE, PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc