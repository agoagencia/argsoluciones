import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Dispensión Automatizada/2.-Unixact C500.jpg';
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
        <h2>Unixact C500</h2><br/>
        <p><strong>SKU:</strong> C500</p>
        <p><strong>Categorías:</strong> Dispensacion automatizada, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema automatizado de dispensación de fluidos integral que ofrece una dispensación automatizada precisa de muchos tipos de fluidos, con especialización en materiales difíciles de manejar como la interfaz térmica y 2K
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Rango de operación de presión de aire: 0.6/0.7 MPa, 5.5-7 bar<br/><br/>

Consumo máximo de aire: 0,3 m3 / minuto<br/><br/>

Requerimientos de energía: 100-240 VCA, 50/60 Hz, 4 AMP<br/><br/>

Capacidad de carga: 15 kg.<br/><br/>

Tamaño de entrada de aire: 1/4 pulg. Npt (f)<br/><br/>

Tamaño del puerto de escape de aire: n / A<br/><br/>

Peso: 385.6 kg.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc