import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Paquetes de bombas/4.-Pulverizador sin aire electrico 17C310.jpg';
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
        <h2>Pulverizador sin aire electrico 17C310</h2><br/>
        <p><strong>SKU:</strong>   17C310</p>
        <p><strong>Categorías:</strong> Paquetes de bombas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pulverizador sin aire eléctrico 390 PC es el rociador ideal para trabajos residenciales y es el mejor valor en rociadores eléctricos pequeños

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Amperaje: 13<br/><br/>

Material compatible: Acrílicos, Esmalte, Laca, Látex, Manchas<br/><br/>

Ciclos por galón: 700<br/><br/>

Tamaño del motor (HP): 0.625<br/><br/>

Tamaño de salida de fluido (in): 1/4<br/><br/>

Tipo de rosca de salida de fluido: NPSM
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc