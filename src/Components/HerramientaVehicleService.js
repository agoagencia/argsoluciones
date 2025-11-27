import React from 'react'
import {Link} from "react-router-dom"
import HerramientaVehicleService1 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/1.-Amoladora angular 301B32MK Ingersoll Rand.jpg"
import HerramientaVehicleService2 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/2.-Cizalla neumatica 7802SA.jpg"
import HerramientaVehicleService3 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/3.-Lijadora neumatica orbital 312A Ingersoll Rand.jpg"
import HerramientaVehicleService4 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/4.-Lijadora neumatica orbital aleatoria 4151 Ingersoll Rand.jpg"
import HerramientaVehicleService5 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/5.-Matraca neumatica 105-D2.jpg"
import HerramientaVehicleService6 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/6.-Matraca neumatica 1105MAX-D2.jpg"
import HerramientaVehicleService7 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/7.-Pistola de impacto 1-2 2235TiMAX-2.jpg"
import HerramientaVehicleService8 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/8.-Pistola de impacto 1-2 231HA.jpg"
import HerramientaVehicleService9 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/9.-Pistola de impacto 2190Ti.jpg"
import HerramientaVehicleService10 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/10.-Turbina angular 1-4″ 301B Ingersoll Rand.jpg"
import HerramientaVehicleService11 from "../img/productos/HerramientaNeumatica/HerramientaVehicleService/11.-Atornillador de cable lineal QE2SP007P11S04.jpg"

import './herramientaVehicleService.css'

function HerramientaVehicleService() {
  return (
    <div className='herramientaElectricaCable'>
    <div><Link to="/HVS1"><img src={HerramientaVehicleService1}></img><br/>Amoladora angular 301B32MK<br/> Ingersoll Rand</Link></div>
    <div><Link to="/HVS2"><img src={HerramientaVehicleService2}></img><br/>Cizalla neumatica <br/>7802SA</Link></div>
    <div><Link to="/HVS3"><img src={HerramientaVehicleService3}></img><br/>Lijadora neumatica <br/>orbital 312A Ingersoll Rand</Link></div>
    <div><Link to="/HVS4"><img src={HerramientaVehicleService4}></img><br/>Lijadora neumatica orbital <br/>aleatoria 4151 Ingersoll Rand</Link></div>
    <div><Link to="/HVS5"><img src={HerramientaVehicleService5}></img><br/>Matraca neumatica<br/> 105-D2</Link></div>
    <div><Link to="/HVS6"><img src={HerramientaVehicleService6}></img><br/>Matraca neumatica <br/>1105MAX-D2</Link></div>
    <div><Link to="/HVS7"><img src={HerramientaVehicleService7}></img><br/>Pistola de impacto <br/>1-2 2235TiMAX-2</Link></div>
    <div><Link to="/HVS8"><img src={HerramientaVehicleService8}></img><br/>Pistola de impacto <br/> 1-2 231HA</Link></div>
    <div><Link to="/HVS9"><img src={HerramientaVehicleService9}></img><br/>Pistola de impacto <br/> 2190Ti</Link></div>
    <div><Link to="/HVS10"><img src={HerramientaVehicleService10}></img><br/>Turbina angular<br/>1-4″ 301B Ingersoll Rand</Link></div>
    <div><Link to="/HVS11"><img src={HerramientaVehicleService11}></img><br/>11.-Turbina recta 14″ 308B<br/> Ingersoll Rand</Link></div>


    </div>
  )
}

export default HerramientaVehicleService