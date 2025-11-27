import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Pistolas electrostáticas/2.-Pistola electrostatica Pro Xp Automatica.jpg';
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
        <h2>Pistola electrostatica Pro Xp Automatica</h2><br/>
        <p><strong>SKU:</strong>  Pro Xp Auto</p>
        <p><strong>Categorías:</strong> Pistolas electrostaticas, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          La pistola Pro Xp para materiales a base de agua, que es ideal para pulverizar estos materiales con sistemas de aislamiento, está disponible en modelos de pulverización con aire y asistida por aire

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: 0.7 MPa, 7 bar<br/><br/>

Presión máxima de aire de trabajo: 0.7 MPa, 7 bar<br/><br/>

Presión máxima de aire en la entrada de la pistola: 0.28 MPa, 2.8 bar<br/><br/>

Temperatura máxima de funcionamiento del fluido: 48?C<br/><br/>

Rango de resistividad de pintura: 3 megaohmios / cm hasta el infinito<br/><br/>

Salida de corriente de cortocircuito: 125 microamperios<br/><br/>

Peso de la pistola (aproximado): 1.2 kilogramos<br/><br/>

Salida de voltaje: Modelos estándar: 60 kV<br/><br/>

Modelos inteligentes: 30-60 kV<br/><br/>

Ruido (dBa): Potencia de sonido (medida según la norma ISO 9216): a 0.28 MPa, 2.8 bar: 90.4 dB (A) a 0.7 MPa, 7 bar: 105.4 dB (A)<br/><br/>

Presión sonora (medida a 1 m de la pistola): a 0.28 MPa, 2.8 bar: 87 dB (A) a 0.7 MPa, 7 bar: 99 dB (A)<br/><br/>

Tamaños de entrada / salida: Racor de entrada de aire de turbina, rosca izquierda: 1/4 npsm (m)<br/><br/>

Accesorio de entrada de aire atomizador: Tubo de nailon de 5/16 pulg. De DE (8 mm)<br/><br/>

Accesorio de entrada de aire del ventilador: Tubo de nailon de 5/16 pulg. De DE (8 mm)<br/><br/>

Racor de entrada de aire del cilindro: Tubo de nailon de 5/32 pulg. De DE (4 mm)<br/><br/>

Racor de entrada de fluido: 1 / 4-18 npsm (m)<br/><br/>

materiales de construcción Partes húmedas: Acero inoxidable; Nylon, acetal, polietileno de peso molecular ultra alto, fluoroelastómero, PEEK, carburo de tungsteno, polietileno
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc