import React from 'react'
import {Link} from "react-router-dom"
import BombaPiston1 from "../img/productos/ManejoFluidos/Bombas de piston/1.-Bomba de pistón chop check Aro AF0623S11RK47.jpg"
import BombaPiston2 from "../img/productos/ManejoFluidos/Bombas de piston/2.-Bomba de pistón chop check Aro NM2322E-11-P43.jpg"
import BombaPiston3 from "../img/productos/ManejoFluidos/Bombas de piston/3.-Bomba de pistón de 2 esferas Aro NM2202A-41-731.jpg"
import BombaPiston4 from "../img/productos/ManejoFluidos/Bombas de piston/4.-Bomba de pistón de 2 esferas Aro NM2304A-41-311.jpg"
import BombaPiston5 from "../img/productos/ManejoFluidos/Bombas de piston/5.-Bomba de pistón de 4 esferas Aro AF0805M11FF48.jpg"
import BombaPiston6 from "../img/productos/ManejoFluidos/Bombas de piston/6.-Bomba de pistón de aceite 2 esferas Aro 612041-1.jpg"
import BombaPiston7 from "../img/productos/ManejoFluidos/Bombas de piston/7.-Bomba de pistón de aceite 2 esferas Aro 612401-3.jpg"
import BombaPiston8 from "../img/productos/ManejoFluidos/Bombas de piston/8.-Bomba de pistón de aceite 2 esferas Aro 650110-1C.jpg"
import BombaPiston9 from "../img/productos/ManejoFluidos/Bombas de piston/9.-Bomba de pistón paquete de 2 esferas Aro AF0409C11SS22.jpg"
import BombaPiston10 from "../img/productos/ManejoFluidos/Bombas de piston/10.-Bomba de pistón paquete de 2 esferas Aro AF0411G11HH47.jpg"
import BombaPiston11 from "../img/productos/ManejoFluidos/Bombas de piston/11.-Bomba de pistón y paquetes de 2 esferas Aro AF0623G11FF47.jpg"
import BombaPiston12 from "../img/productos/ManejoFluidos/Bombas de piston/12.-Bomba de pistón y paquetes de 4 esferas Aro AF0604M11FF48.jpg"
import BombaPiston13 from "../img/productos/ManejoFluidos/Bombas de piston/13.-Ram de dos postes de 55 galones Aro TP0646S51KK47AA2.jpg"
import BombaPiston14 from "../img/productos/ManejoFluidos/Bombas de piston/14.-Ram de poste simple de 5 galones Aro SP0423S21FF47E32.jpg"
import BombaPiston15 from "../img/productos/ManejoFluidos/Bombas de piston/15.-Sistema de extrusión Aro TP0844S51FF47AA2.jpg"



import './bombasPiston.css'

function BombasPiston() {
  return (
    <div className='bombas_piston'>
    <div><Link to="/bombaPiston1"><img src={BombaPiston1}></img><br/>Bomba de pistón chop check <br/> Aro AF0623S11RK47</Link></div>
    <div><Link to="/bombaPiston2"><img src={BombaPiston2}></img><br/>Bomba de pistón chop check<br/> Aro NM2322E-11-P43</Link></div>
    <div><Link to="/bombaPiston3"><img src={BombaPiston3}></img><br/>Bomba de pistón de 2 esferas<br/> Aro NM2202A-41-731</Link></div>
    <div><Link to="/bombaPiston4"><img src={BombaPiston4}></img><br/>Bomba de pistón de 2 esferas<br/> Aro NM2304A-41-311</Link></div>
    <div><Link to="/bombaPiston5"><img src={BombaPiston5}></img><br/>Bomba de pistón de 4 esferas<br/> Aro AF0805M11FF48</Link></div>
    <div><Link to="/bombaPiston6"><img src={BombaPiston6}></img><br/>Bomba de pistón de aceite <br/>2 esferas Aro 612041-1</Link></div>
    <div><Link to="/bombaPiston7"><img src={BombaPiston7}></img><br/>Bomba de pistón de aceite <br/>2 esferas Aro 612401-3</Link></div>
    <div><Link to="/bombaPiston8"><img src={BombaPiston8}></img><br/>Bomba de pistón de aceite <br/>2 esferas Aro 650110-1C</Link></div>
    <div><Link to="/bombaPiston9"><img src={BombaPiston9}></img><br/>Bomba de pistón paquete de <br/>2 esferas Aro AF0409C11SS22</Link></div>
    <div><Link to="/bombaPiston10"><img src={BombaPiston10}></img><br/>Bomba de pistón paquete de <br/>2 esferas Aro AF0411G11HH47</Link></div>
    <div><Link to="/bombaPiston11"><img src={BombaPiston11}></img><br/>Bomba de pistón y paquetes de <br/>2 esferas Aro AF0623G11FF47</Link></div>
    <div><Link to="/bombaPiston12"><img src={BombaPiston12}></img><br/>Bomba de pistón y paquetes de <br/>4 esferas Aro AF0604M11FF48</Link></div>
    <div><Link to="/bombaPiston13"><img src={BombaPiston13}></img><br/>Ram de dos postes de 55 galones <br/>Aro TP0646S51KK47AA2</Link></div>
    <div><Link to="/bombaPiston14"><img src={BombaPiston14}></img><br/>Ram de poste simple de 5 galones <br/>Aro SP0423S21FF47E32</Link></div>
    <div><Link to="/bombaPiston15"><img src={BombaPiston15}></img><br/>Sistema de extrusión Aro<br/> TP0844S51FF47AA2</Link></div>

    </div>
  )
}

export default BombasPiston