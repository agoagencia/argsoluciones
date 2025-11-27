import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/ManejoFluidos/Bombas de diafragma/32.-Controlador de fluido Aro 651763-AM-1.jpg';
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
        <h2>Controlador de fluido Aro 651763-AM-1</h2><br/>
        <p><strong>SKU:</strong>  651763-AM-1</p>
        <p><strong>Categorías:</strong> Bombas de diafragma, Aro</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Controlador Aro para bomba de diafragma de interfaz electrónica series EXP de 1/4 a 3″
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entradas digitales: 13, 24VDC<br/><br/>

Salidas digitales: 6, 24VDC<br/><br/>

Entradas analógicas: 2, 4 - 20mA<br/><br/>

Salidas analógicas: 2, 4 - 20mA<br/><br/>

Rango de temperatura de funcionamiento: -20 C to 70 C<br/><br/>

Rango de temperatura de almacenamiento: -30 C to 80?C<br/><br/>

Humedad relativa máxima: 90% sin condensación
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc