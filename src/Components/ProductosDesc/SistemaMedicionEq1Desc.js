import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Sistemas de medición/1.-Sistema de control de flujo electronico monocomponente ProControl 1KS.jpg';
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
        <h2>Sistema de control de flujo electronico<br/> monocomponente ProControl 1KS</h2><br/>
        <p><strong>SKU:</strong> ProControl 1KS</p>
        <p><strong>Categorías:</strong> Sistemas de medicion, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          ProControl es un sistema de control de flujo de circuito cerrado que elimina el exceso de material aplicado a la pieza para aumentar el ahorro de material. Asegura caudales consistentes y permite un mejor control del proceso.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de aire de trabajo: 7.0 bar, 0.7 MPa<br/><br/>

Suministro de aire: 5.2?7.0 bar, 0.5?0.7 MPa<br/><br/>

Tamaño de entrada del filtro de aire: 3/8 npt (f)<br/><br/>

Filtración de aire para lógica de aire y aire de purga (suministrado por Graco): Se requiere una filtración de 5 micrones (mínima); aire limpio y seco<br/><br/>

Filtración de aire para atomizar aire (suministrado por el usuario): Se requiere una filtracón de 30 micrones (mínima); aire limpio y seco<br/><br/>

Fluidos manejados: un componente: pinturas a base de agua y disolventes, poliuretanos, epoxis, barnices catalizados por ácido, isocianatos sensibles a la humedad<br/><br/>

Rango de viscosidad del fluido: 20?5000 cps<br/><br/>

Filtración de fluidos (proporcionada por el usuario): Mínimo de malla 100<br/><br/>

Requisitos de la fuente de alimentación externa: 85-250 V CA, 50/60 Hz, consumo máximo de 2 amperios, se requiere un disyuntor máximo de 15 amperios, calibre de cable de suministro de energía de 8 a 14 AWG<br/><br/>

Rango de temperatura de funcionamiento: 5?50?C<br/><br/>

Calificación de condiciones ambientales: uso en interiores, grado de contaminación (2), categoría de instalación II<br/><br/>

Partes húmedas: Acero inoxidable 303 y 304, carburo de tungsteno (con aglutinante de níquel), perfluoroelastómero, PTFE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc