import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Sistemas de medición/3.-Sistema de dispensacion electronico preestablecido ProDispense.jpg';
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
        <h2>Sistema de dispensacion electronico preestablecido ProDispense</h2><br/>
        <p><strong>SKU:</strong>  ProDispense</p>
        <p><strong>Categorías:</strong> Sistemas de medicion, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          ProDispense llena las cavidades con aceite, grasa o agua en entornos de línea de montaje donde es esencial una dispensado preciso. ProDispense puede entregar hasta tres fluidos diferentes en múltiples puntos de dispensado, y mide con precisión el caudal

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Eléctrico: 115/230 VCA, 1,6 amperios máximo, 50 o 60 Hz<br/><br/>

Neumático (solo modelo 244601): 0.59-0.9 MPa, 5.9-9 bar a 1/4 cfm máximo<br/><br/>

Señal del medidor: 15.24 mv<br/><br/>

Señal de solenoide: 15.24 m<br/><br/>

Tasa de flujo: 0.95-15 lpm<br/><br/>

Rango de viscosidad: 10 peso aceite - grasa # 2<br/><br/>

Exactitud: + 1/2% en dispensaciones superiores a un gal?n<br/><br/>

Resolución: 4.73 cc/pulse<br/><br/>

Presión máxima de trabajo: 10 MPa, 103 bar<br/><br/>

Entrada de fluido: 1/2 npt (f)<br/><br/>

Salida de fluido: 1/2 npt (f)<br/><br/>

244600 Agua / anticongelante (no listado en ETL) Tasa de flujo: 0.95-15 lpm<br/><br/>

Rango de viscosidad: 1-20 cps<br/><br/>

Exactitud: + 3% en dispensaciones superiores a un gal?n<br/><br/>

Resolución: 25 cc/pulse<br/><br/>

Presión máxima de trabajo: 1.7 MPa, 17 bar<br/><br/>

Entrada de fluido: 1/2 npt (f)<br/><br/>

Salida de fluido: 1/2 npt (f)<br/><br/>

244601 Grasa / Pintura Tasa de flujo: 0.76-3.8 lpm<br/><br/>

Rango de viscosidad: 20-5000 cps<br/><br/>

Exactitud: + 3% en dispensaciones superiores a 12 cc<br/><br/>

Resolución: 0.119 cc/pulse<br/><br/>

Presión máxima de trabajo: 21 MPa, 207 bar<br/><br/>

Presión máxima de aire: 0.8 MPa, 8 bar<br/><br/>

Entrada de fluido: 1/4 npt (f)<br/><br/>

Salida de fluido: 3/8 npt (metros)<br/><br/>

Entrada de aire: 1/4 npt (f)<br/><br/>

246837 Grasa / Pintura Tasa de flujo: .038-1.9 lpm<br/><br/>

Rango de viscosidad: 20-3000 cps<br/><br/>

Exactitud: + 1,5% en dispensaciones superiores a 12 cc<br/><br/>

Resolución: .061 cc/pulse<br/><br/>

Presión máxima de trabajo: 21 MPa, 207 bar<br/><br/>

Presión máxima de aire: 0.8 MPa, 8 bar<br/><br/>

Entrada de fluido: 1/4 npt (f)<br/><br/>

Salida de fluido: 3/8 npt (f)<br/><br/>

Entrada de aire: 1/4 npt (f)<br/><br/>

246838 Sin medidor (medidor de flujo suministrado por el usuario) Tasa de flujo: (TBD) Suministrado por el usuario<br/><br/>

Rango de viscosidad: (TBD) Suministrado por el usuario<br/><br/>

Exactitud: (TBD) Suministrado por el usuario<br/><br/>

Resolución: (TBD) Suministrado por el usuario<br/><br/>

Presión máxima de trabajo: 21 MPa, 207 bar<br/><br/>

Presión máxima de aire: 0.8 MPa, 8 bar<br/><br/>

Entrada de fluido: (TBD) Suministrado por el usuario<br/><br/>

Salida de fluido: 1/4 npt (f)<br/><br/>

Entrada de aire: 1/4 npt (f)<br/><br/>

246839 Grasa / pintura / selladores Tasa de flujo: .05-22 lpm<br/><br/>

Rango de viscosidad: 30-1.000.000 cps<br/><br/>

Exactitud: + 5% en dispensaciones superiores a 12 cc<br/><br/>

Resolución: 0.286 cc/pulse<br/><br/>

Presión máxima de trabajo: 21 MPa, 207 bar<br/><br/>

Presión máxima de aire: 0.8 MPa, 8 bar<br/><br/>

Entrada de fluido: 3/4 npt (f)<br/><br/>

Salida de fluido: 3/8 npt (metros)<br/><br/>

Entrada de aire: 1/4 npt (f)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc