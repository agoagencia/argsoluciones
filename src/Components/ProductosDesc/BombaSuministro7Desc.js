import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/7.-Bombas de pisaton Dura-Flo.jpg';
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
        <h2>Bombas de piston Dura-Flo</h2><br/>
        <p><strong>SKU:</strong>  Dura-Flo</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las bombas Dura-Flo de Graco con tecnología NXT proporcionan un suministro uniforme y de fácil control. Ideal para aplicaciones de suministro, esta bomba durable cuenta con un motor NXT y ahora pueden alcanzar un rango de presión aún más alto sin comprometer el flujo

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Ciclos de bomba Dura-Flo 1800: 9.0 por 3.8 l<br/><br/>

Ciclos de bomba Dura-Flo 2400: 6.5 por 3.8 l<br/><br/>

Flujo de fluido Dura-Flo 1800: 26.1 lpm a 60 cpm<br/><br/>

Flujo de fluido Dura-Flo 2400: 34.6 lpm a 60 cpm<br/><br/>

Dura-Flo 1800 área efectiva inferior: 18 cm cuadrados<br/><br/>

Dura-Flo 2400 área efectiva inferior: 24 cm cuadrados<br/><br/>

Temperatura máxima de funcionamiento de la bomba: 65.5?C<br/><br/>

Tamaño de entrada de fluido: 2 en npt (f)<br/><br/>

Tamaño de salida de fluido: 1 1/2 pulg npt (m)<br/><br/>

Presión de sonido: Motores neumáticos NXT: Consulte el manual 311238, incluido. Motores hidráulicos Viscount: 88 dB (A) a una presión hidráulica de 1450 psi, 25 cpm (probado de acuerdo con ISO 3744) Motor neumático Xtreme XL: 86,8 dB (A) probado a 3,28 pies (1 m) del equipo<br/><br/>

Potencia de sonido: Motores neumáticos NXT: Consulte el manual 311238, incluido. Motores hidráulicos Viscount: 103 dB (A) a una presión hidráulica de 1450 psi, 25 ciclos / min (probado de acuerdo con ISO 3744) Motor neumático Xtreme XL: 96 dB (A), medido a 70 psi (0,48 MPa, 4,8 bar), 20 cpm, según ISO-9614?2
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc