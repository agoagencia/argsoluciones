import React from 'react'
import {Link, NavLink} from "react-router-dom";
import './header.css';
import logo from "../img/arg.png"
import $ from "jquery";









/* window.onload = function(){   

    var btnMenu = document.getElementById('icon-menu');
    var nav = document.getElementById('nav1');
    
     btnMenu.addEventListener('click', function(){
         nav.classList.toggle('mostrar');
         btnMenu.classList.toggle('btn_x');
     })
     
   } */
   
   window.onload = function (){  
       

    $('#icon-menu').on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      $('#nav1').toggleClass('mostrar') 
      $('#opacar').toggleClass('opacar')
      
      
      
      var btnX = document.getElementById('icon-menu');
      btnX.classList.toggle('btn_x');   
    
    
      $(document).one('click', function(e){ 
           if($('#icon-menu').has(e.target).length === 0){
               btnX.classList.toggle('btn_x');
                $('#nav1').removeClass('mostrar'); 
                $('#opacar').removeClass('opacar') 
               
            } });
        });

   //----carrusel--------
   
    }
    
    
    
    function Header() {
       
    return (
          
    <div className='header' >
        <div className='header_flex'>
                <div class="menu-bar" id="icon-menu">
                    <div class="uno"></div>
                    <div class="dos"></div>
                    <div class="tres"></div>
                </div>
            <div className='logo'><Link to="/"><img src={logo} alt='logo'></img></Link></div>
            
            <nav className='nav' id='nav1'>
                <ul>
                    <li><NavLink exact to="/"activeClassName='active'>Inicio</NavLink></li>
                    <li><NavLink  to="/conocenos"activeClassName='active'>Conócenos</NavLink></li>
                    <li><NavLink  to="/productos"activeClassName='active'>Productos</NavLink></li>
                    <li><NavLink  to="/servicios"activeClassName='active'>Servicios</NavLink></li>
                    <li><NavLink  to="/blog"activeClassName='active'>Blog</NavLink></li>
                    <li><NavLink  to="/contacto"activeClassName='active'>Contacto</NavLink></li>  
        
                </ul>
            </nav>
        </div>
         
            
        </div>
        
        )
    }
    
    export default Header