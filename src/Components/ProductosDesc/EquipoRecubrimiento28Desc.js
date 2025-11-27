import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/28.-Spray Booth.jpg';
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
        <h2>Spray Booth</h2><br/>
        <p><strong>SKU:</strong> Spray Booth</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Automotriz, Carlisle-Binks Automotriz</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Mantener una cabina de pintura limpia es vital para ayudar a garantizar trabajos de pintura limpios y de calidad y reducir el tiempo y el producto desperdiciado en el reproceso. Una cabina de pintura limpia y brillante proporciona el ambiente perfecto para que el acabador profesional logre mezclas y acabados perfectos. El papel de cabina ignífugo es un papel altamente absorbente adecuado para pisos, paredes y cubiertas de equipos para proteger durante la pulverización
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          El revestimiento blanco brillante que se puede rociar protege las paredes de la cabina del exceso de rociado, lo que ayuda a garantizar un espacio de trabajo limpio<br/><br/>

Booth Wall Coat durará hasta 12 meses (máximo 500 ciclos de horneado) antes de que sea necesario quitarlo y volver a aplicarlo<br/><br/>

No pegajoso, no se encoge y no se agrieta<br/><br/>

Booth Wall Coat se puede despegar rápida y fácilmente en tiras grandes para facilitar su extracción<br/><br/>

Gracias a su formulación a base de agua, la pistola pulverizadora se puede limpiar con agua tibia<br/><br/>

La construcción plisada y grapada de nuestro papel de filtro estilo acordeón captura el exceso de rocío de manera eficiente, dura de tres a cinco veces más que los filtros secos comunes y contribuye a un entorno de trabajo mejorado y más brillante<br/><br/>

Reduzca las partículas en su cabina de pintura para lograr un ambiente de acabado más limpio
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc