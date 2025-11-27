import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos automatizados/1.-Aplicador giratorio ProBell Graco.jpg';
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
        <h2>Aplicador giratorio ProBell Graco</h2><br/>
        <p><strong>SKU:</strong> ProBell</p>
        <p><strong>Categorías:</strong> Equipos automatizados, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El aplicador rotatorio ProBell de Graco no solo ofrece una calidad superior, alta eficiencia de transferencia y pulverización de precisión, sino que también es liviano y compacto para robots o reciprocadores de menor carga útil
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          La modularidad permite a los clientes diseñar un sistema para satisfacer sus necesidades de producción y presupuesto<br/><br/>

Fácil integración del sistema con el PLC existente o instalación nueva<br/><br/>

La interfaz del controlador permite una gestión fácil de los par?metros de pulverización<br/><br/>

Mejora de la seguridad y confiabilidad con un cable de baja tensión y configuración de detección de arco regulable<br/><br/>

Configuraciones para un robot de muñeca hueca, robot de muñeca sólida, montaje fijo o montaje en reciprocador<br/><br/>

Las copas de la campana están optimizadas para una pulverización superior con una variedad de tamaños de patrón y caudales<br/><br/>

2 acabados en aluminio diferentes (incluido desgaste elevado para materiales abrasivos) o composición de resina compuesta para copas de campana<br/><br/>

Diseño compacto y de peso ligero que permite utilizar robots de carga útil baja o reciprocadores, lo cual le ahorra dinero
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc