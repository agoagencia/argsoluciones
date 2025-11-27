import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Dosificadores/4.-Dosificadores ProMix PD2K.jpg';
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
        <h2>Dosificadores ProMix PD2K</h2><br/>
        <p><strong>SKU:</strong> Promix PD2K</p>
        <p><strong>Categorías:</strong> Dosificadores, Mercados, Automotriz, Graco Automotriz, Graco
</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El ProMix PD2K mezcla el material cerca de la pistola para que la zona de lavado sea mucho menor. Esto hace que el cliente use menos pintura, reduzca sus costos de desechado y realice cambios de color más rápido. Y como el material mezclado en el sistema es limitado, el ProMix PD2K es ideal para mezclas de vida útil corta. Además, es compatible con materiales de base ácida
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Sistemas con bombas de baja presión: 2.1 MPa, 21 bar<br/><br/>

Sistemas con bombas de alta presión: 10.5 MPa, 105 bar<br/><br/>

Sistemas de pulverización de aire: 2.1 MPa, 21 bar<br/><br/>

Sistemas de pulverización asistidos por aire: 10.5 MPa, 105 bar<br/><br/>

Presión máxima de aire de trabajo: 0.7 MPa, 7.0 bar<br/><br/>

Suministro de aire: 0.6?0.7 MPa, (6.0?7.0 bar)<br/><br/>

Tamaño de entrada del filtro de aire: 3/8 npt (f)<br/><br/>

Filtración de aire para lógica de aire (suministrada por el usuario): Se requiere una filtración de 5 micrones (mínima); aire limpio y seco<br/><br/>

Filtración de aire para atomizar aire (suministrado por el usuario): Se requiere una filtración de 30 micrones (mínima); aire limpio y seco<br/><br/>

Rango de proporción de mezcla: 0.1:1 ? 50:1, ?1%<br/><br/>

Fluidos manejados: pinturas a base de agua y solventes de uno o dos componentes, poliuretanos, epoxis, barnices catalizados por ácido, isocianatos sensibles a la humedad<br/><br/>

Rango de viscosidad del fluido: 20 a 5000 centipoise<br/><br/>

Filtración de fluidos (suministrada por el usuario): Mínimo de malla 100<br/><br/>

Flujo máximo de fluido: 800 cc / minuto (dependiendo de la viscosidad del material)<br/><br/>

Tamaño de salida de fluido: 1/4 npt (m)<br/><br/>

Requisitos de la fuente de alimentación externa: 90 - 250 Vac, 50/60 Hz, consumo máximo de 7 amperios. Se requiere un disyuntor de 15 amperios como máximo. Calibre del cable de la fuente de alimentación de 8 a 14 AWG<br/><br/>

Rango de temperatura de funcionamiento: 2 hasta 50 ? C<br/><br/>

Rango de temperatura de almacenamiento: ?20 a 70 ? C<br/><br/>

Peso (aproximado): 88 kilogramos<br/><br/>

Datos de sonido: Menos de 75 dB (A)<br/><br/>

Partes húmedas: 17?4PH, 303, 304 SST, carburo de tungsteno (con aglutinante de níquel), perfluoroelastómero; PTFE, PPS, UHMWPE<br/><br/>

MC0500: Las bombas se venden por separado; consulte el manual de la bomba seleccionada para obtener información sobre las piezas húmedas<br/><br/>

MC1000 y MC2000: 17?4PH, 303, 304 SST, carburo de tungsteno (con aglutinante de níquel), perfluoroelastómero; PTFE, PPS, UHMWPE<br/><br/>

MC3000 y MC4000: 316 SST, 17?4PH SST, PEEK, perfluoroelastómero; PTFE, PPS, UHMWPE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc