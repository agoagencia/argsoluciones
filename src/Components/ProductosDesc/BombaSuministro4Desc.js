import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/4.-Bomba de piston electrica E-Flo.jpg';
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
        <h2>Bomba de piston electrica E-Flo</h2><br/>
        <p><strong>SKU:</strong>  E-Flo</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bombas eléctricas energéticamente eficientes para aplicaciones de circulación y suministro

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de trabajo del fluido: Modelos EC11xx y EC12xx: 2.07 MPa, 20.7 bar<br/><br/>

Modelos EC21xx y EC22xx: 1.38 MPa, 13.8 bar<br/><br/>

Modelos EC23xx y EC24xx: 2.76 MPa, 27.6 bar<br/><br/>

Modelos EC33xx y EC34xx: 2.07 MPa, 20.7 bar<br/><br/>

Modelos EC43xx y EC44xx: 1.52 MPa, 15.2 bar<br/><br/>

Presión de fluido potencial máxima Modelos ECx1xx y ECx2xx: 1500 / v (volumen de menor en cc) = bar<br/><br/>

Modelos ECx3xx y ECx4xx: 3000 / v (volumen de menor en cc) = bar<br/><br/>

Tasa máxima de ciclo continuo: 20 cpm<br/><br/>

Flujo máximo: El flujo máximo está determinado por el tamaño de la bomba inferior<br/><br/>

Voltaje de entrada Modelos ECx1xx y ECx2xx: 100-250 V CA, monofásico, 50/60 Hz<br/><br/>

Modelos ECx3xx y ECx4xx: 200-250 Vac, monofásico, 50/60 Hz<br/><br/>

Corriente de entrada: 20 El máximo<br/><br/>

Tamaño del puerto de entrada de energía: 3 / 4?14 npt (f)<br/><br/>

Rango de temperatura ambiente: 0?40?C<br/><br/>

Datos de sonido: Menos de 70 dB (A)<br/><br/>

Capacidad de aceite: 1.4 litros<br/><br/>

Especificación de aceite: Aceite sintético para engranajes sin silicona, n.o de pieza 16W645 ISO 220 de Graco<br/><br/>

Peso: Paquete de bomba (motor, base de 1000 cc, soporte y tirantes): 99.8 kg<br/><br/>

Tamaño de entrada de fluido: 1?1 / 2 npt (f)<br/><br/>

Tamaño de salida de fluido: 1 npt (f)<br/><br/>

Partes h?medas: Consulte el manual de la bomba inferior


          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc