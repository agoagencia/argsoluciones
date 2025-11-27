import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/1.-Bomba de 2 bolas Monark Graco.jpg';
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
        <h2>Bomba de 2 bolas Monark Graco</h2><br/>
        <p><strong>SKU:</strong>  Monark</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Bombas de pistón neumáticas de 2 bolas diseñadas para aplicaciones de alta producción, las bombas Monark, con su motor de aire Monark confiable, proporcionan un suministro uniforme y fácil de controlar. Marca Graco

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Proporción: 2:1<br/><br/>

Presión máxima de trabajo del fluido: 14 bar<br/><br/>

Presión máxima de entrada de aire: 7 bar<br/><br/>

Ciclos de bombeo por 1 galón (3,8 litros): 11<br/><br/>

Flujo de fluido a 60 ciclos por minuto: 21 litros / min<br/><br/>

Tamaño de entrada de fluido: 1?1 / 2 npt (f)<br/><br/>

Tamaño de salida de fluido: 1 pulg. Npt (f)<br/><br/>

Tamaño de entrada de aire: 3/8 npsm (f)<br/><br/>

Peso: 18.14 kilogramos<br/><br/>

Temperatura máxima de funcionamiento de la bomba: 82C<br/><br/>

* Nivel de sonido a 100 psi, 15 ciclos por minuto: 62.6 dBa<br/><br/>

* Nivel de potencia acústica a 100 psi, 15 ciclos por minuto: 71.8 dBa<br/><br/>

Partes húmedas: Tubos de suministro y retorno: Acero al carbono niquelado Base del motor neumático: Aluminio Bomba de desplazamiento: Consulte el manual 307983
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc