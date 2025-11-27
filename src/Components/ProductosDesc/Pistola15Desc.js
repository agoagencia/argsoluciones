import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/15.-Pistolas automáticas compactas CMAI.jpg';
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
        <h2>Pistolas automáticas compactas CMAI</h2><br/>
        <p><strong>SKU:</strong> CMAI-14</p>
        <p><strong>Categorías:</strong>Carlisle-DeVilbiss, Pistolas pulverizadoras, Equipos para pintura</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola pulverizadora DeVilbiss Compact Automatic X es una pistola automática altamente sofisticada que se puede separar de su bloque de montaje en unos pocos segundos mediante el mecanismo de liberación del pulgar, para un mantenimiento y servicio rápidos y sencillos para aplicaciones en meta, madera y plastico.
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Entrada de fluido: 1/8 "BSPP<br/><br/>

Entrada de aire: 1/8 "BSPP (F)<br/><br/>

Entrada de aire del cilindro: 1/8 "BSPP (F)<br/><br/>

Max. Temperatura en uso: 104 ° F (40 ° C)<br/><br/>

Peso de la pistola: 950 gramos o 2,0 libras.<br/><br/>

Construcción: Aluminio anodizado duro<br/><br/>

Punta / Aguja / Rociador: 303 gr. acero inoxidable
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc