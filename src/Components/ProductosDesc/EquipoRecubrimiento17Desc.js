import React from 'react'
import './herramientaElectricaBateria1Desc.css'
import imgPruebaa from '../../img/productos/Equipos de pintura/Equipos de recubrimiento/17.-Pistola Airless automática AG364.jpg';
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
        <h2>Pistola Airless automática AG364</h2><br/>
        <p><strong>SKU:</strong> AG364</p>
        <p><strong>Categorías:</strong> Equipos de Recubrimiento, Carlisle-DeVilbiss, Mercados, Vidrio, Madera, Carlisle-Devilbiss Vidrio, Carlisle-Devilbiss Madera</p>
        <br />
        <div className='HerramientaElectricaBateria1Descripcion'>
          <h2>Descripción</h2>
          <p>
          Presentamos nuestra nueva innovación, la pistola de pulverización sin aire Binks AG-364, que proporciona una mayor eficiencia de transferencia y un método útil para mantener una máquina más limpia
          </p><br/><br/>
          <h5>Información Técnica</h5>
          <div className='line'></div>
          <p>
          P2 = Presión de aire del cilindro: 4-10 bar (58-145 psi)<br/><br/>

Temperatura ambiente máxima de funcionamiento: 40 C Nominal (104?F)<br/><br/>

Cabezales de pistola y conductos de fluidos: Acero inoxidable<br/><br/>

Material del cuerpo de la pistola: Aluminio anodizado<br/><br/>

Material del soporte de la punta: Aluminio anodizado<br/><br/>

Material fluido de la aguja y el asiento: Acero inoxidable, carburo de tungsteno<br/><br/>

Sellos y juntas tóricas: HDPE, FEPM<br/><br/>

Tamaño de la pistola (L x H x W): 110 mm x 44 mm x 44 mm (4.33" x 1.73" x 1.73")
          </p>
        </div>
<br/>
<Link to="/contacto"><div className='btn_cotizanos'>Cotizanos</div></Link>

      </div>


    </div>
  )
}

export default HerramientaElectricaBateria1Desc