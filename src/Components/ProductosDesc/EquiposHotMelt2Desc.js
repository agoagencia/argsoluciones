import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Equipos Hot Melt/2.-Sistema de fusion de volumen Therm-O-Flow 200.jpg';
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
        <h2>Sistema de fusion de volumen<br/> Therm-O-Flow 200</h2><br/>
        <p><strong>SKU:</strong> Therm-O-Flow 200</p>
        <p><strong>Categorías:</strong> Equipos Hot melt, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema industrial de fusión de volumen que ofrece índices de fundición líderes en la industria para una gran capacidad de producción y precisión en el control de temperatura para obtener mejores resultados finales. Admite sellantes y adhesivos termofusibles en tambores de 200 litros (55 galones)
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Área efectiva de la bomba de desplazamiento: 8 sq cm<br/><br/>

Volumen por ciclo: 192 cu cm<br/><br/>

Ciclos de bomba: 21 / 3.8 l<br/><br/>

Presión máxima de entrada de aire: 0.85 MPa / 8.5 bar<br/><br/>

Temperatura máxima de funcionamiento de la bomba: 204 C<br/><br/>

Tamaño de entrada de aire: 1/2 npsm (f)<br/><br/>

Tamaño de salida de fluido de la bomba: 1" Npt (f)<br/><br/>

Partes húmedas: Acero carbono; latón; cromado, zinc y niquelado; Grados de 304, 316, 440 y 17-4 PH de acero inoxidable; aleación de acero; hierro dúctil; PTFE<br/><br/>

Peso: 37 kg.
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc