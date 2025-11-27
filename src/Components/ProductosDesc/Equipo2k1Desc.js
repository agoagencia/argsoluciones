import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/SistemaSellos/Equipos 2k/1.-Dosificador PR70.jpg';
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
        <h2>Dosificador PR70</h2><br/>
        <p><strong>SKU:</strong> PR70</p>
        <p><strong>Categorías:</strong> Equipos 2K, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Sistema de medición, dosificado y dispensación compacto de montaje sobre mesa

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Área efectiva de la bomba de dosificación: 0,124-1,49 in2 (80-960 mm2) por lado<br/><br/>

Longitud máxima de la carrera: 1,50 in (38,1 mm)<br/><br/>

Longitud mínima de la carrera: 0,23 in (5,8 mm)<br/><br/>

Volumen por ciclo: 0,12-4,3 in3 (2-70 cm3)<br/><br/>

Ciclos de bombeo cada 1 l (0,26 gal): 500-14,3<br/><br/>

Relaciones (fijas): 1:1 a 12:1 en función de los cilindros seleccionados<br/><br/>

Relaciones (variables): 1:1 a 24:1 en función de los cilindros seleccionados<br/><br/>

Presión máxima de trabajo del fluido: 3000 psi (207 bar, 20,7 MPa)<br/><br/>

Presión máxima de entrada de aire: 100 psi (7 bar, 0,7 MPa)<br/><br/>

Frecuencia de ciclo máxima: 30 cpm<br/><br/>

Temperatura máxima de funcionamiento: Pistones de nailon: 70 ?C (160 ?F)<br/><br/>

Pistones de UHMWPE o tanques de PE: 50 C (120 F)<br/><br/>

Tamaño de la entrada de aire: 1/4 NPT(h)<br/><br/>

Tamaño de la salida de fluido de la bomba: Accesorios JIC -03, -04, -06, -08 o -12 para mangueras de 3/16 in (4,8 mm), 1/4 in (6,4 mm), 3/8 in (9,5 mm), 1/2 in (12,7 mm), 3/4 in (19,1 mm)<br/><br/>

Piezas húmedas: 303/304, 17-4 PH, cromo duro, Chromex, carburo, juntas tóricas resistentes a los productos químicos, PTFE, nailon, UHMWPE
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc