import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Equipos 2k/2.-Sistema medidor, mezclador y dosificador EFR.jpg';
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
        <h2>Sistema medidor, mezclador y dosificador EFR</h2><br/>
        <p><strong>SKU:</strong> EFR</p>
        <p><strong>Categorías:</strong> Equipos 2K, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          El sistema eléctrico de relación fija (EFR) de Graco es un equipo medidor, mezclador y dosificador para selladores bicomponente y suministro de adhesivos. Ideal para aplicaciones que requieren una dosificación precisa, el EFR ofrece un control excelente del material y del suministro de juntas, cordones, dosificaciones y aplicaciones de impregnación.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Accionamiento: Servomotor controlado con precisión<br/><br/>

Caudal: De 1 a 3200 cc/min a 207 bar<br/><br/>

Tipo de suministro: Suministro a granel desde latas de 20 l hasta bidones de 200 l y unidades transportables de mayor tamaño.<br/><br/>

Rango de dosificación: De 0,3 cc a cualquier tamaño de disparo<br/><br/>

Gama de relaciones de mezcla: De 1:1 a 12:1<br/><br/>

Presión máxima de funcionamiento del fluido: 241 bar (3500 psi, 24 MPa)<br/><br/>

Temperatura de fluido máxima: 50 C (120 F)<br/><br/>

Energía eléctrica: 240 V o 480 V (monofásico)<br/><br/>

Piezas en contacto con el fluido: Aluminio, acero inoxidable, acero al carbono cincado, latón, carburo de tungsteno, cromo, fluorelastómero, PTFE, polietileno de peso molecular ultraelevado, nitruro de silicio<br/><br/>

Peso: 145?182 kg (320 ? 401 lbs)<br/><br/>

Dimensiones: (AL X PR X AN) 56 X 127 X 57 cm (22 ? 50 x x 22,5 pulgadas)<br/><br/>

Pasarela de comunicaciones: EtherNet/IP, DeviceNet, Profibus, Profinet
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc