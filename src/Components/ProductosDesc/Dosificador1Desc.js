import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Dosificadores/1.-Dosificador de componentes plurales ProMix 2KE.jpg';
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
        <h2>Dosificador de componentes plurales ProMix 2KE</h2><br/>
        <p><strong>SKU:</strong> ProMix 2KE</p>
        <p><strong>Categorías:</strong> Dosificadores, Mercados, Automotriz, Graco Automotriz, Graco
</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El ProMix 2KE, disponible en versiones de bomba y de medidor para todas las tecnologías de pulverización, hace fácil el acabado con componentes plurales. Diseñado para aplicaciones de componentes duales, multicolores y en cabina.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de aire de trabajo: 0.7 MPa, 7 bar<br/><br/>

Suministro de aire: 0.5 a 0.7 MPa, 5.2 a 7 bar<br/><br/>

Tamaño de entrada del filtro de aire: 3/8 npt (f)<br/><br/>

Filtración de aire para lógica de aire (suministrada por Graco) Se requiere una filtración de 5 micrones (mínima); aire limpio y seco<br/><br/>

Filtración de aire para atomizar aire (suministrado por el usuario) Se requiere una filtración de 30 micrones (mínima); aire limpio y seco<br/><br/>

Rango de proporción de mezcla: 0.1: 1 hasta 30: 1<br/><br/>

Rango de viscosidad del fluido: 20 a 5000 cps<br/><br/>

Filtración de fluidos (proporcionada por el usuario): Mínimo de malla 100<br/><br/>

Tamaño de salida de fluido (mezclador estático): 1/4 npt (f)<br/><br/>

Requisitos de la fuente de alimentación externa: 85 - 250 Vac, 50/60 Hz, consumo máximo de 2 amperios. Se requiere un disyuntor de 15 amperios como máximo. Calibre del cable de la fuente de alimentación de 8 a 14 AWG<br/><br/>

Rango de temperatura de funcionamiento: 5 ? hasta 50 ? C<br/><br/>

aproximado: 136 kilogramos<br/><br/>

Calificación de condiciones ambientales: uso en interiores, grado de contaminación (2), categoría de instalación II<br/><br/>

Fluidos manejados: uno o dos componentes: pinturas a base de agua y solventes, poliuretanos, epoxis, barnices catalizados por ácido, isocianatos sensibles a la humedad<br/><br/>

Proporción de mezcla de 1: 1 a 10: 1 ? 2% Proporción de mezcla de 10.1: 1 a 30: 1 ? 5%<br/><br/>

Nivel de presión de sonido: por debajo de 70 dBA<br/><br/>

Nivel de potencia acústica: Por debajo de 85 dBA<br/><br/>

Materiales húmedos en todos los modelos: 303, 304 SST; Carburo de tungsteno (con aglutinante de níquel), perfluoroelastómero; PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc