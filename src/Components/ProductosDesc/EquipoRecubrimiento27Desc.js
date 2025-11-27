import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/27.-Pistolas de pulverización manuales sin aire asistidas por aire TROPHY 1600-4400 AIRLESS.jpg';
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
        <h2>Pistolas de pulverización manuales sin aire asistidas por aire TROPHY 1600/4400 AIRLESS</h2><br/>
        <p><strong>SKU:</strong> TROPHY 1600/4400</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Madera, Carlisle-Binks Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola Trophy AA está diseñada para maximizar la calidad de la pulverización, aumentar la eficiencia, reducir el tiempo de inactividad y ser responsable con el medio ambiente, al tiempo que proporciona el ajuste y sensación livianos, ergonómicos y esculpidos que demandan los operadores
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El nuevo Binks Trophy AA combina la experiencia, el diseño y la tecnología de la industria en nuestra nueva pistola de pulverización Airless asistida por aire. Dise?ado para manejar las aplicaciones más difíciles<br/><br/>

Trophy AA está diseñado específicamente para maximizar la calidad de la pulverización, aumentar la eficiencia, reducir el tiempo de inactividad y ser responsable con el medio ambiente, al tiempo que proporciona el ajuste y la sensación livianos y ergonómicamente esculpidos que exigen los operadores. Una nueva gama de tapones de aire AA10 +, as? como un innovador sello de punta reemplazable, coloca el Binks Trophy AA firmemente en la vanguardia del diseño de pistola de pulverización sin aire asistida por aire<br/><br/>

Adecuado para estos materiales: Recubrimientos a base de agua o solventes Manchas barnices y lacas Colorantes y tintas, Selladores y capas de fondo Pinturas sintéticas y de esmalte Además de muchos otros ...<br/><br/>

Pistola airless ligera asistida por aire Atomización de alta calidad para un acabado líder en la industria Cuerpo de pistola forjado sólido para una máxima durabilidad y una vida útil más larga Revestimiento de pistola Quick-CleanTM para una limpieza y mantenimiento rápidos Amplia selección de puntas planas, de acabado fino y retorcidas disponibles
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc