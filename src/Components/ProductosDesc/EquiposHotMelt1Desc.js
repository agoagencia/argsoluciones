import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Equipos Hot Melt/1.-Sistema de fusion de volumen Therm-O-Flow 20.jpg';
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
        <h2>Sistema de fusion de volumen <br/> Therm-O-Flow 20</h2><br/>
        <p><strong>SKU:</strong> Therm-O-Flow 20</p>
        <p><strong>Categorías:</strong> Equipos Hot melt, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema industrial de fusión de volumen que ofrece índices de fundición líderes en la industria para una gran capacidad de producción y precisión en el control de temperatura para obtener mejores resultados finales. Admite selladores y adhesivos termofusibles en cubos de 20 litros (5 galones)
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Tamaño de entrada de aire: 1/2 npsm (f) <br/><br/>

Partes húmedas: acero al carbono, latón, cromo, zinc, niquelado, acero inoxidable (304, 316, 440 y 17-4 PH), acero de aleación, hierro dúctil, PTFE<br/><br/>

Área efectiva de la bomba de desplazamiento: Merkur y NXT: 8 cm? presidente: 5.7 cm?<br/><br/>

Volumen por ciclo: Merkur y NXT: 192 cm? presidente: 62.3 cm?<br/><br/>

Ciclos de bombeo por 1 galón (3.8 litros): Merkur y NXT: 21 presidente: 61<br/><br/>

Presión máxima de entrada de RAM: Merkur y NXT: 0.85 MPA, 8.5 bar presidente: 0.8 MPa, 8.3 bar<br/><br/>

Temperatura máxima de funcionamiento de la bomba: Merkur y NXT: 204 C presidente: 204 C<br/><br/>

Tamaño de salida de fluido de la bomba: Merkur y NXT: 1 in npt (f) presidente: 1/2 pulg npt (f)<br/><br/>

Presión máxima de trabajo de fluido: Mercurio 6.0 pulg: 15.9 MPa, 159 bar Mercurio 7.5 in: 20.7 MPa, 207 bar NXT 6500: 20.7 MPa, 207 bar Presidente: 4.25 in: 12.6 MPa, 125 bar<br/><br/>

Presión máxima de entrada de aire (bombas): Mercurio 6.0 pulg 0.7 MPa, 7 bar Mercurio 7.5 in: 0.57 MPa, 5.7 bar NXT 6500: 0.29 MPa, 2.9 bar Presidente 4.25 in: 0.8 MPa, 8.3 bar<br/><br/>

Requerimientos de energía Aire comprimido (típico): 25-50 scfm Voltaje (como seleccionado): 220/240 V, trifásico, 50/60 Hz, 380/400 V, trifásico, 50/60 Hz, 470/490 V, trifásico, 50/60 Hz, 575 V, trifásico, 50/60 Hz<br/><br/>
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc