import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/19.-Multiplicador de torsion QXX5A45T0180PS12.jpg';
/* import imgPruebaa from "../img/productos/HerramientaElectrica/HerramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg" */
import {Link} from "react-router-dom"

function HerramientaElectricaBateria1Desc() {
  return (
    <div className='herramientaElectricaBateria1Desc'>

      <div className='herramientaElectricaBateria1Desc_left'>
        <img src={imgPruebaa}></img>
      </div>

      <div className='herramientaElectricaBateria1Desc_right'>
        <h2>Multiplicador de torsion<br/> QXX5A45T0180PS12</h2><br/>
        <p><strong>SKU:</strong> QXX5A45T0180PS12</p>
        <p><strong>Categorías:</strong> Herramienta electrica de bateria, Ingersoll Rand</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El innovador multiplicador de torsión angular inalámbrico de la serie QX reducirá el tiempo y el costo de atornillar, a la vez que garantizará precisión repetida en todas las juntas de torsión críticas.

– El transductor de bucle cerrado ofrece una precisión de torsión de +/- 5 %
– Los engranajes integrados Norbar® ofrecen calidad y precisión de primer nivel
– El motor sin cepillo ofrece máxima durabilidad
– El módulo de pantalla multifunción con alerta de estado del ciclo y alarma sonora ofrece retroalimentación instantánea y fácil configuración
– Opción disponible de brazo de reacción estándar o personalizado
– Comunicación inalámbrica opcional para control de procesos con E/S y recopilación de datos (estándar de conexión USB)
– El software ICS de Ingersoll Rand les ofrece a los operadores la capacidad de acceder y programar estrategias de ajuste básicas, así como opciones más avanzadas para adaptarse a aplicaciones de empernado más complicadas
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Ft - lbs (Nm): 27 - 132 (16 - 180)<br/><br/>

RPM: 110<br/><br/>

Drive: 3/4"<br/><br/>

Voltaje: 40V
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc