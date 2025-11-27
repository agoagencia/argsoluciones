import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Bombas de suministro/5.-Bomba Endura-Flo.jpg';
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
        <h2>Bomba Endura-Flo</h2><br/>
        <p><strong>SKU:</strong> Endura-Flo</p>
        <p><strong>Categorías:</strong> Bombas de suministro, Mercados, Vidrio, Madera, Graco Vidrio, Graco Madera, Graco</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Las bombas Endura-Flo son bombas de diafragma de alta presión, diseñadas para ofrecer una duración prolongada y pueden resistir condiciones de embalamiento mejor que otras bombas del mismo tipo. Esta bomba fácil de instalar genera bajas pulsaciones y brinda una transición sin problemas para cambios rápidos de color

          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          Presión máxima de entrada de aire: 7 bar, 0.7 MPa<br/><br/>

Presión máxima de trabajo del fluido: 28 bares, 2.8 MPa<br/><br/>

Presión de fluido estática máxima: 30 bar, 3.0 MPa<br/><br/>

Proporción: 4:1<br/><br/>

Tasa máxima recomendada de ciclo continuo: 20 ciclos por minuto<br/><br/>

Volumen por ciclo (doble carrera): 150 cc por ciclo<br/><br/>

Rango de temperatura ambiente y operativa. Utilice aire comprimido seco cuando opere a bajas temperaturas: 0 hasta 50 ? C<br/><br/>

Elevación de succión en seco: 7.0 metros<br/><br/>

Elevación de succión húmeda: 8.8 m<br/><br/>

Tamaño de entrada de aire: 1/4 npt<br/><br/>

Tamaño de entrada de fluido: Brida Tri-Clamp de 1 pulg., 1/2 pulg. Npt o 1/2 pulg. Bspp<br/><br/>

Tamaño de salida de fluido: Brida Tri-Clamp de 1 pulg., 1/2 pulg. Npt o 1/2 pulg. Bspp<br/><br/>

Peso (aproximado): 14 kilogramos<br/><br/>

Partes h?medas: acero inoxidable, perfluoroelastómero (FFKM), PTFE, sulfuro de polifenileno (PPS)
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc