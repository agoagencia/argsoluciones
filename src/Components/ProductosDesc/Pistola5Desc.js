import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas pulverizadoras/5.-Pistola de pulverizacion automatica 288046.jpg';
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
        <h2>Pistola de pulverizacion automatica 288046</h2><br/>
        <p><strong>SKU:</strong> 288046</p>
        <p><strong>Categorías:</strong> Mercados, Vidrio, Madera, Graco Madera, Pistolas pulverizadoras, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Pistola de pulverización automática asistida por aire G40, estándar, incluye aguja / bola de carburo y asiento difusor de carburo
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada de aire (in): 1/4<br/><br/>

Tipo de rosca de entrada de aire: NPSM<br/><br/>

Tipo de aplicador: Automático<br/><br/>

Cuerpo material: Metal<br/><br/>

Material compatible: Laca, Material a base de solvente, Material a base de agua, Epoxis, Poliuretano, Materiales de dos componentes<br/><br/>

Tamaño de entrada de fluido (in): 1/4
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc