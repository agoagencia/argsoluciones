import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas electrostáticas/1.-Pistola de pulverizacion electrostatica Pro Xp.jpg';
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
        <h2>Pistola de pulverizacion electrostatica Pro Xp</h2><br/>
        <p><strong>SKU:</strong>  Pro Xp</p>
        <p><strong>Categorías:</strong>Pistolas electrostaticas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola Pro Xp para materiales a base de agua, que es ideal para pulverizar estos materiales con sistemas de aislamiento, está disponible en modelos de pulverización con aire y asistida por aire y en otro exclusivo modelo para pulverizar materiales para desmolde.

La pistola de pulverización con aire con base agua de carga externa reduce los costes de material y el impacto ambiental sin sufrir el gasto y las limitaciones de un sistema de aislamiento electrostático.

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de fluido de trabajo: 0.7 MPa, 7.0 bar<br/><br/>

Presión máxima de aire de trabajo: 0.7 MPa, 7.0 bar<br/><br/>

Presión de aire mínima en la entrada de la pistola: 0.32 MPa, 3.2 bar<br/><br/>

Temperatura máxima de funcionamiento del fluido: 48?C<br/><br/>

Salida de corriente de cortocircuito: 125 microamperios<br/><br/>

Energía de salida de voltaje: 0.35 J con manguera de fluido 24M733 instalada. L60T17 y L60T18: 60 kV. L60M17, L60M18 y L60M19: 30?60 kV<br/><br/>

Potencia de sonido (medida seg?n la norma ISO 9216): a 0.28 MPa, 2.8 bar: 90.4 dB (A) a 0.7 MPa, 7.0 bar: 105.4 dB (A)<br/><br/>

Presión sonora (medida a 1 m de la pistola): a 0.28 MPa, 2.8 bar: 87.0 dB (A) a 0.7 MPa, 7.0 bar: 99.0 dB (A)<br/><br/>

Accesorio de entrada de aire: 1/4 npsm (m) rosca a la izquierda<br/><br/>

Accesorio de entrada de fluido: Entrada personalizada para manguera de fluido a base de agua de Graco<br/><br/>

Accesorio de entrada de aire del recinto de aislamiento: 1/4 npt<br/><br/>

Accesorio de entrada de fluido del recinto de aislamiento: Racor de tubo de 10 mm de diámetro exterior<br/><br/>

Partes húmedas: Pistola: acero inoxidable, PEEK, UHMWPE, fluoroelastómero, acetal, nailon, polietileno, alambre de tungsteno. Manguera de fluido a base de agua: PTFE<br/><br/>

Tubo de succión: polietileno, acero inoxidable. Bomba Tritón: Consulte el manual 309303
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc