import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Paquetes de bombas/3.-Paquetes de pulverizacion Merkur ES.jpg';
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
        <h2>Paquetes de pulverizacion Merkur ES</h2><br/>
        <p><strong>SKU:</strong>  Paquete Merkur ES</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Merkur ES es uno de los pulverizadores más eficientes diseñado para usar menos materiales que la competencia y para reducir el uso de aire y las pulsaciones.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de entrada de aire: 7.0 bares, 0.7 MPa<br/><br/>

Temperatura máxima del fluido: 71 C<br/><br/>

Rango de temperatura del aire ambiente: 2?49?C<br/><br/>

Tamaño de entrada de aire del paquete: 3/8 npt (f)<br/><br/>

Tamaño de salida de fluido del paquete: 1/4 npsm (m)<br/><br/>

Velocidad máxima del motor: 240 cpm<br/><br/>

Tamaño máximo del orificio de la boquilla de pulverización: 0.483 milímetros
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc