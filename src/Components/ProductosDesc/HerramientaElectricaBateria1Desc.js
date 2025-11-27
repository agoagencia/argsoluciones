import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/HerramientaElectrica/herramientaElectricaBateria/1._Llave_angular_inalambrica_QXN.jpg';
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
        <h2>Llave angular inalambrica QXN</h2><br/>
        <p><strong>SKU:</strong> L.SP3</p>
        <p><strong>Categorías:</strong> Cabezales, Lubbering</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
            Cabeza de desplazamiento de engranaje estándar, diseño cerrado
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Conectado a una m?quina o tornillo de agarre de pistola driver a traves del adaptador axial<br/><br/>

L.sp3 x-connect<br/><br/>

Salida en eje roscado<br/><br/>

Precisi?n de +/- 5%<br/><br/>

Sockets interchangeable with holder
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc