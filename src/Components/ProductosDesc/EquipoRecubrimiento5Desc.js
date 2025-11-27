import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/5.-Bomba de diafragma DX200.jpg';
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
        <h2>Bomba de diafragma DX200</h2><br/>
        <p><strong>SKU:</strong> DX200</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-Binks, Mercados, Cerámica, Automotriz, Vidrio, Madera, Carlisle-Binks Automotriz, Carlisle-Binks, Carlisle-Binks Vidrio, Carlisle-Binks Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La Binks DX200 es una bomba de circulación o transferencia de doble diafragma operada por aire, de alto caudal y proporción 1: 1 desarrollada específicamente para el suministro directo de pinturas y materiales a las pistolas de pulverización
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Construcción resistente y compatibilidad universal de materiales: disponible en aluminio y acero inoxidable para manejar una amplia variedad de fluidos<br/><br/>

Ratio 1:1<br/><br/>

Presión entrada Máxima 7 Bar/100 PSI<br/><br/>

Caudal nominal/ciclo: 0,20 litros (0,05 Gall US)<br/><br/>

Caudal máximo @ 60 ciclos/min: 12 litros/min (3,17 Gall US/min)<br/><br/>

Frecuencia máx. aconsejada ciclos en continuo: 25 ciclos/min<br/><br/>

Frecuencia máx. aconsejada ciclos intermitente: 60 ciclos/min<br/><br/>

Peso bomba sola: 9,5 kg (20,94 lbs)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc