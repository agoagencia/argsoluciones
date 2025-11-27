import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/14.-DeVilbiss FLG-5 Pistola.jpg';
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
        <h2>DeVilbiss FLG-5 Pistola</h2><br/>
        <p><strong>SKU:</strong> FLG</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Automotriz, Carlisle-Devilbiss Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La serie DeVilbiss FLG-5 es una gama de pistolas pulverizadoras que proporciona a los usuarios la ventaja competitiva que necesitan en las instalaciones de acabado de hoy
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          La FLG-5 es apropiada para la mayoría de los trabajos de pulverización rutinarios, y también puede ser utilizada por entusiastas del bricolaje. Esta gama económica de pistolas pulverizadoras está disponible como kit de pistola de succión o de gravedad, y hay una opción de pistola de presión para zonas más extensas que requieren una cobertura rápida sin perder el tiempo necesario para rellenar tazas pequeñas<br/><br/>

Pistolas de pulverización de bajo coste que pueden utilizarse con una vasta gama de pinturas y materiales para uso industrial en general<br/><br/>

Gracias a la pulverización Trans-Tech de DeVilbiss, FLG-5 reduce el consumo de pintura, garantiza excelentes acabados y cumple con lo dispuesto por la normativa EPA<br/><br/>

Cuerpo de la pistola fabricado en aluminio, ultraligero y resistente<br/><br/>

Empuñadura ergonómica de la pistola que garantiza mayor equilibrio, mejor toma y confort<br/><br/>

Cabezal de aire en latón, diseñado con técnicas de precisión; boquillas y agujas del fluido en acero inoxidable de larga duración
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc