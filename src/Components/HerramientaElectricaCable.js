import React from 'react'
import HerramientaElectricaCable1 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/1.-Atornillador de cable angular QE2AL007PA3S06.jpg"
import HerramientaElectricaCable2 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/2.-Atornillador de cable angular QE4AT013PA2S04.jpg"
import HerramientaElectricaCable3 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/3.-Atornillador de cable angular QE8AT400FA8S12.jpg"
import HerramientaElectricaCable4 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/4.-Atornillador de cable lineal QE2SP007P11S04.jpg"
import HerramientaElectricaCable5 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/5.-Atornillador de cable lineal QE4ST010R20Q04.jpg"
import HerramientaElectricaCable6 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/6.-Controlador IC12D1A1AWS.jpg"
import HerramientaElectricaCable7 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/7.-Controlador IC1M1A1AWS.jpg"
import HerramientaElectricaCable8 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/8.-Controlador INSIGHTqc QCD11.jpg"
import HerramientaElectricaCable9 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/9.-Destornillador electrico de baja torsion en linea VersaTec EL0410B.jpg"
import HerramientaElectricaCable10 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/10.-Destornillador electrico en linea de alta torsion VersaTec EL2603N.jpg"
import HerramientaElectricaCable11 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/11.-Destornillador electrico en linea ELB2620N.jpg"
import HerramientaElectricaCable12 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/12.-Destornillador electrico en linea ES50T.jpg"
import HerramientaElectricaCable13 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/13.-Pistola de calor HG5012.jpg"
import HerramientaElectricaCable14 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/14.-Pistola Serie QE2 QE2PS003P11Q04.jpg"
import HerramientaElectricaCable15 from "../img/productos/HerramientaElectrica/herramientaElectricaCable/15.-Pistola Serie QE4 QE4PP010P11Q04.jpg"
import {Link} from "react-router-dom"
import './herramientaElectricaCable.css'

function HerramientaElectricaCable() {
  return (
    <div className='herramientaElectricaCable'>
    <div><Link to="/HEC1"><img src={HerramientaElectricaCable1}></img><br/>Atornillador de cable <br/>angular QE2AL007PA3S06</Link></div>
    <div><Link to="/HEC2"><img src={HerramientaElectricaCable2}></img><br/>Atornillador de cable <br/>angular QE4AT013PA2S04</Link></div>
    <div><Link to="/HEC3"><img src={HerramientaElectricaCable3}></img><br/>Atornillador de cable<br/>angular QE8AT400FA8S12</Link></div>
    <div><Link to="/HEC4"><img src={HerramientaElectricaCable4}></img><br/>Atornillador de cable<br/>lineal QE2SP007P11S04</Link></div>
    <div><Link to="/HEC5"><img src={HerramientaElectricaCable5}></img><br/>Atornillador de cable<br/>lineal QE4ST010R20Q04</Link></div>
    <div><Link to="/HEC6"><img src={HerramientaElectricaCable6}></img><br/>Controlador<br/> IC12D1A1AWS</Link></div>
    <div><Link to="/HEC7"><img src={HerramientaElectricaCable7}></img><br/>Controlador<br/> IC1M1A1AWS</Link></div>
    <div><Link to="/HEC8"><img src={HerramientaElectricaCable8}></img><br/>Controlador INSIGHTqc<br/> QCD11</Link></div>
    <div><Link to="/HEC9"><img src={HerramientaElectricaCable9}></img><br/>Destornillador electrico de baja torsion<br/> en linea VersaTec EL0410B</Link></div>
    <div><Link to="/HEC10"><img src={HerramientaElectricaCable10}></img><br/>Destornillador electrico en linea<br/>de alta torsion VersaTec EL2603N</Link></div>
    <div><Link to="/HEC11"><img src={HerramientaElectricaCable11}></img><br/>Destornillador electrico<br/>en linea ELB2620N</Link></div>
    <div><Link to="/HEC12"><img src={HerramientaElectricaCable12}></img><br/>Destornillador electrico<br/> en linea ES50T</Link></div>
    <div><Link to="/HEC13"><img src={HerramientaElectricaCable13}></img><br/>Pistola de calor HG5012</Link></div>
    <div><Link to="/HEC14"><img src={HerramientaElectricaCable14}></img><br/>Pistola Serie QE2<br/>QE2PS003P11Q04</Link></div>
    <div><Link to="/HEC15"><img src={HerramientaElectricaCable15}></img><br/>Pistola Serie QE4<br/>QE4PP010P11Q04</Link></div>

    </div>
  )
}

export default HerramientaElectricaCable