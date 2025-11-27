import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Dosificadores/6.-Ransburg IntelliFlow RF2.jpg';
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
        <h2>Ransburg IntelliFlow RF2</h2><br/>
        <p><strong>SKU:</strong> IntelliFlow RF2</p>
        <p><strong>Categorías:</strong> Dosificadores, Carlisle-DeVilbiss, Mercados, Automotriz, Madera, Carlisle-Devilbiss Automotriz, Carlisle-Devilbiss Madera, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          IntelliFlow de Ransburg brinda automatización avanzada y facilidad de uso para impulsar la eficiencia, el tiempo de actividad y la optimización en su proceso. Las pantallas táctiles grandes a todo color con procesos automatizados reducen significativamente el tiempo de capacitación y aseguran que se eviten los errores del operador. La conectividad basada en la nube permite monitorear y solucionar problemas del equipo en tiempo real desde cualquier parte del mundo. Y los componentes de fluidos flexibles y de alto rendimiento brindan una relación superior y una precisión de flujo al mismo tiempo que maximizan el ahorro de residuos de recubrimientos y solventes.

Está diseñado para maximizar los ahorros de proceso para casi cualquier sistema de aplicador automático, incluidas las aplicaciones estáticas, de reciprocador, de línea plana y robótica. Las capacidades de integración perfectas permiten que el RF2 se instale en casi cualquier proceso nuevo o existente y comience a generar ahorros de costos de inmediato. Con hasta 30 colores, 6 catalizadores, 3K y capacidades de múltiples circuitos, el RF2 se puede adaptar a sus necesidades específicas y luego crecer junto con su negocio utilizando su arquitectura modular.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Pantalla táctil intuitiva a todo color de 15″<br/><br/>

La interfaz fácil de aprender se sentirá natural tanto para los operadores nuevos como para los experimentados<br/><br/>

Las pantallas de operación principal simplificadas muestran solo la información que necesita saber, junto con un conjunto completo de opciones de personalización para adaptar el equipo a su proceso<br/><br/>

Automatice los procesos comunes y evite errores costosos para aumentar la productividad y el tiempo de actividad<br/><br/>

Las alarmas visibles le indican cuál es el error y exactamente cómo solucionarlo, lo que reduce el tiempo de resolución de problemas<br/><br/>

Conectividad e integración perfectas<br/><br/>

La comunicación EtherNet/IP viene de serie para una integración perfecta con su PLC, robot o sistema SCADA, con muchos otros protocolos también disponibles<br/><br/>

La unidad se puede operar de forma completamente remota mediante el envío de señales de disparo, cambio de color, caudal y comandos de relación<br/><br/>

El monitoreo remoto basado en la nube permite operar o diagnosticar el equipo de manera segura en tiempo real desde cualquier parte del mundo<br/><br/>

Realice un seguimiento y exporte datos de procesos organizados en tiempo real o por lotes para la mejora de procesos y la generación de informes de VOC
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc