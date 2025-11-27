import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/10.-Bombas de diafragma Gemini II.jpg';
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
        <h2>Bombas de diafragma Gemini II</h2><br/>
        <p><strong>SKU:</strong> Gemini II</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Automotriz, Carlisle-Binks Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las bombas de diafragma Binks Gemini II son las bombas de diafragma Premier para rociar, transferir o hacer circular una variedad de recubrimientos
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Las bombas de diafragma Binks Gemini II son ideales para una variedad de materiales y viscosidades. Las bombas Gemini II se pueden utilizar en aplicaciones que incluyen madera, fabricación general de metales y adhesivos<br/><br/>

La bomba de carrera corta de acetal Gemini II de 1/2″ es ideal para una amplia variedad de aplicaciones de aspersión. Esta bomba es capaz de suministrar un 27 % más de fluido por carrera en comparación con la serie de bombas Gemini I<br/><br/>

Paquete de montaje en cubeta Gemini II: Paquete de bomba confiable y económico ideal para aplicaciones de aspersión como Convencional, HVLP y TransTech<br/><br/>

Paquetes de montaje de Tambor Gemini II: Las opciones de accesorios incluyen: bomba, control de aire, conjunto de filtro de derivación/pulso, agitador, sifón y regulador de fluido<br/><br/>

Paquete de montaje en pared Gemini II: Las opciones de accesorios incluyen: bomba, control de aire, conjunto de filtro de derivación/pulso, agitador, sifón y regulador de fluido<br/><br/>

Bomba de Acetal e Inoxidable de 1/2″ La bomba Gemini II de 1/2″ está disponible en cuerpo de acetal conductor o acero inoxidable (se muestra 41-818830) y es ideal para una variedad de recubrimientos a base de agua y solventes, incluidos adhesivos, barnices catalizados, pinturas, resinas, tintes y solventes con 33% más de entrega por ciclo que los modelos anteriores<br/><br/>

Bomba de aluminio e inoxidable de 1″ El Gemini II de 1″ está disponible en aluminio o acero inoxidable (se muestra 41-818820) y es ideal para una variedad de recubrimientos a base de agua y solventes, incluidos adhesivos, barnices catalizados, pinturas, resinas, tintes y solventes con un 38 % más de rendimiento por ciclo que los modelos anteriores<br/><br/>

Bomba de acero inoxidable de 1-1/2″ La bomba de acero inoxidable Gemini II de 1-1/2″ es ideal para una variedad de recubrimientos a base de agua y solventes, incluidos adhesivos, barnices catalizados, pinturas, resinas, tintes y solventes con un 28 % más de suministro por ciclo que los modelos anteriores
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc