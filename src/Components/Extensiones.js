import React from 'react'
import extension1 from "../img/productos/extensiones/1.-Extension 834-Tx-50.jpg"
import extension2 from "../img/productos/extensiones/2.-Extension ex-250-2.jpg"
import extension3 from "../img/productos/extensiones/3.-Extension ex-250-3.jpg"
import extension4 from "../img/productos/extensiones/4.-Extension Ex-250-4.jpg"

import extension6 from "../img/productos/extensiones/6.-Extension m6n-0808-2.jpg"
import extension7 from "../img/productos/extensiones/7.-Extension Universal KN-8-15M-6.jpg"
import './extensiones.css'
import {Link} from "react-router-dom"

function Extensiones() {
  return (
    <div className='extensiones'>
    <div><Link to="/extension1"><img src={extension1}></img></Link></div>
    <div><Link to="/extension2"><img src={extension2}></img></Link></div>
    <div><Link to="/extension3"><img src={extension3}></img></Link></div>
    <div><Link to="/extension4"><img src={extension4}></img></Link></div>

    <div><Link to="/extension6"><img src={extension6}></img></Link></div>
    <div><Link to="/extension7"><img src={extension7}></img></Link></div>
    </div>
  )
}

export default Extensiones