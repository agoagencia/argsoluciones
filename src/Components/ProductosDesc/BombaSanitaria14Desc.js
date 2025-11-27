import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas sanitarias/14.-Bomba grado sanitario de 1″ Aro SD10S-CSS-STT-A.jpg';
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
        <h2>Bomba grado sanitario de 1″ Aro SD10S-CSS-STT-A</h2><br/>
        <p><strong>SKU:</strong> SD10S-CSS-STT-A</p>
        <p><strong>Categorías:</strong> Bombas sanitarias, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bomba Neumática Grado Sanitario para manejo de Alimentos, Bebidas, Cosméticos y Fármaco. Disponibles en 1 y 2″.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión de inicio: 25 psi (1.723) bar<br/><br/>

Levantamiento de succión en seco: 16.49 ft. (5.02 m.)<br/><br/>

Levantamiento de succión húmeda: 31.4 ft. (9.57 m.)<br/><br/>

Tasa de flujo: 54 gpm. (204.4 lpm.)<br/><br/>

Desplazamiento por ciclo: 0.258 gal (0.976 lt.)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc