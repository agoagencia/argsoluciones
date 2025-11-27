import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/20.-Pistola Automatica AG-363 Binks.jpg';
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
        <h2>Pistola Automatica AG-363 Binks</h2><br/>
        <p><strong>SKU:</strong> AG363</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Madera, Carlisle-Devilbiss Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La AG-363 de Binks combina las mejores características de la atomización airless asistida por aire y la ingeniería de Binks para proporcionar una calidad superior de atomización y acabado junto con la mayor eficiencia de transferencia posible, resultando en un ahorro significante de pintura cumpliendo con las regulaciones EPA más exigentes
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          La pistola AG-363 Binks combina las características esenciales de la pulverización Airless Air Assisted y la tecnología Binks, para garantizar altos niveles de pulverización y calidad de acabado, máxima eficiencia de transferencia, lo que permite ahorros muy significativos en producto, cumpliendo con los estándares más rigurosos del estándar APE<br/><br/>

AG-363 es una pistola automática Airless Air Assisted de última generación que se puede desenganchar rápidamente de la base mediante una llave Allen para realizar operaciones de servicio y mantenimiento. Esta función, exclusiva de Binks, reduce drásticamente el tiempo de inactividad y aumenta la productividad. La pistola Binks AG-363 es adecuada para máquinas de varias pistolas donde el rendimiento constante de alta calidad de la pistola y la flexibilidad de la aplicación son factores críticos para garantizar una alta productividad y resultados de alto rendimiento<br/><br/>

Presentación: Conexión de base especial con un tornillo: desmontaje fácil y rápido para operaciones de mantenimiento y limpieza, reduciendo el tiempo de inactividad de la producción Cabezal de aire con tecnología HVLP: excelentes características de pulverización, eficiencia de velocidad de transferencia y acabados de alta calidad Cabezal de aire con indexación de 15 opcional: posicionamiento rápido y preciso del cabezal de aire y la boquilla Controles de aire ajustables manualmente: fácil de ajustar la forma y el ancho del chorro Cabezal de pistola de acero inoxidable y conductos de fluido: compatibilidad para aplicaciones solubles en agua y a base de solventes Aguja y asiento de carburo de tungsteno: larga vida útil y mayor resistencia a la abrasión Recirculación de producto seleccionable: a través del cabezal de pistola o en la base
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc