import React from 'react'
import {Link} from "react-router-dom"
import BombaGrasa1 from "../img/productos/ManejoFluidos/Bombas de grasa/1.-Bomba de aceite Aro AF0409A13PFL1.jpg"
import BombaGrasa2 from "../img/productos/ManejoFluidos/Bombas de grasa/2.-Bomba de aceite y paquete Aro LM2203A-11-C.jpg"
import BombaGrasa3 from "../img/productos/ManejoFluidos/Bombas de grasa/3.-Bomba de aceite y paquete Aro LM2203A-31-C.jpg"
import BombaGrasa4 from "../img/productos/ManejoFluidos/Bombas de grasa/4.-Bomba de grasa Aro LP2002-W.jpg"
import BombaGrasa5 from "../img/productos/ManejoFluidos/Bombas de grasa/5.-Bomba de grasa y paquete Aro AF0450L53PKL1.jpg"
import BombaGrasa6 from "../img/productos/ManejoFluidos/Bombas de grasa/6.-Bomba de grasa y paquete Aro AF0475L43PBL1.jpg"
import BombaGrasa7 from "../img/productos/ManejoFluidos/Bombas de grasa/7.-Bomba de grasa y paquete Aro LM2350E-21-B.jpg"
import BombaGrasa8 from "../img/productos/ManejoFluidos/Bombas de grasa/8.-Bomba de lubricación Aro LM2250E-41-B.jpg"





import './bombasGrasa.css'

function BombasGrasa() {
  return (
    <div className='bombas_grasa'>
    <div><Link to="/bombaGrasa1"><img src={BombaGrasa1}></img><br/>Bomba de aceite Aro<br/> AF0409A13PFL1</Link></div>
    <div><Link to="/bombaGrasa2"><img src={BombaGrasa2}></img><br/>Bomba de aceite y paquete Aro<br/> LM2203A-11-C</Link></div>
    <div><Link to="/bombaGrasa3"><img src={BombaGrasa3}></img><br/>Bomba de aceite y paquete Aro<br/> LM2203A-31-C</Link></div>
    <div><Link to="/bombaGrasa4"><img src={BombaGrasa4}></img><br/>Bomba de grasa<br/> Aro LP2002-W</Link></div>
    <div><Link to="/bombaGrasa5"><img src={BombaGrasa5}></img><br/>Bomba de grasa y paquete Aro<br/> AF0450L53PKL1</Link></div>
    <div><Link to="/bombaGrasa6"><img src={BombaGrasa6}></img><br/>Bomba de grasa y paquete Aro<br/> AF0475L43PBL1</Link></div>
    <div><Link to="/bombaGrasa7"><img src={BombaGrasa7}></img><br/>Bomba de grasa y paquete Aro<br/> LM2350E-21-B</Link></div>
    <div><Link to="/bombaGrasa8"><img src={BombaGrasa8}></img><br/>Bomba de lubricación Aro<br/> LM2250E-41-B</Link></div>
        
    </div>
  )
}

export default BombasGrasa