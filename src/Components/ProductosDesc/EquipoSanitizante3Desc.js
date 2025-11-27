import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos sanitizantes/3.-SaniSpray HP 65 25R792.jpg';
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
        <h2>SaniSpray HP 65 25R792</h2><br/>
        <p><strong>SKU:</strong> 25R792</p>
        <p><strong>Categorías:</strong>  Equipos sanitizantes, Equipos para pintura, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pulverizador desinfectante sin aire eléctrico

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de salida de fluido (in): 1/4<br/><br/>

Tipo de rosca de salida de fluido: NPSM<br/><br/>

Configuración de marco: Tolva<br/><br/>

Capacidad de la tolva (gal): 1,5<br/><br/>

Caudal Máximo (GPM): 0.5<br/><br/>

Longitud máxima de manguera (pies): 300<br/><br/>

Temperatura máxima de funcionamiento (° F): 115<br/><br/>

Temperatura máxima de almacenamiento (° F): 160
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc