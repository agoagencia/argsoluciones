import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logoCarousel from '../img/logos/LogoIzq/ARG-blanco.png'
import $ from "jquery";
import HerramientaElectricaBateria from './HerramientaElectricaBateria';

window.onload = function () {

    $(".productos_menu").hide();
    $(".productos_industria_mineria").hide();
    $(".productos_herramienta_electrica").hide();
    $(".productos_herramienta_neumatica").hide();
    $(".resistencias").hide();
    $(".productos_dados_puntas").hide();
    $(".productos_manejo_materiales").hide();
    $(".productos_manejo_hide").hide();
    $(".productos_sistemas_sello").hide();
    $("#industria_mineria").show();
    $("#construccion").show();
    $(".equipos_pintura").hide();
    $(".productos_manejo_fluidos").hide();
    $(".productos_herramienta_torque").hide();
    $(".productos_accesorios").hide();
    


    $('#icon-menu').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('#nav1').toggleClass('mostrar')
        $('#opacar').toggleClass('opacar')

        var btnX = document.getElementById('icon-menu');
        btnX.classList.toggle('btn_x');

        //---------------- Con esto cerramos menu dando click fuera
        /* $(document).one('click', function (e) {
            if ($('#icon-menu').has(e.target).length === 0) {
                btnX.classList.toggle('btn_x');
                $('#nav1').removeClass('mostrar');
                $('#opacar').removeClass('opacar')
        
           }
        }); */
    });
    //----carrusel--------
}
window.addEventListener("scroll", function () {
    var headerScroll = document.getElementById('header_flex');
    headerScroll.classList.toggle("transform", window.scrollY > 0);

})

function Header() {
    return (

        <div className='header' >

            <div className='header_flex' id='header_flex'>
                <div class="menu-bar" id="icon-menu">
                    <div class="uno"></div>
                    <div class="dos"></div>
                    <div class="tres"></div>
                </div>
                <div className='logo'><Link to="/"><img src={logoCarousel} alt='logo'></img></Link></div>
                <div className='productos_flex'>
                    <nav className='nav' id='nav1'>


                        {<ul>
                            <li className='nav_menu'><NavLink exact to="/" activeClassName='active'>Inicio</NavLink></li>
                            <li className='nav_menu'><NavLink to="/conocenos" activeClassName='active'>Conócenos</NavLink></li>
                            <li className='nav_menu'><NavLink to="/productos" activeClassName='active' id='productos' ><span className='flex_arrow'>Productos&nbsp;&nbsp;<span className='arrow_down'><FontAwesomeIcon icon={faArrowDown} /></span><span className='arrow_right'><FontAwesomeIcon icon={faArrowRight} /></span></span></NavLink>
                                <ul className='productos_menu_hide'>
                                    <div className='productos_menu' id='productos_menu'>
                                        <li className=' industria_mineria ' id='industria_mineria'><span className='span_industria_mineria'>Buscador&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                            <span className='productos_industria_mineria' id='productos_industria_mineria'>
                                                <ul>
                                                    <li className='submenu_item ' id="herramienta_electrica">Herramienta eléctrica
                                                        <ul className='productos_herramienta_electrica'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/herramientas_electricas/bateria">De bateria</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/herramientas_electricas/cable">De cable</Link></li>

                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='herramienta_neumatica'>Herramienta neumática
                                                        <ul className='productos_herramienta_neumatica'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/herramientas_neumaticas/vehicle_service">Vehicle Service</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/herramientas_neumaticas/herramienta_industrial">Industrial</Link></li>

                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='equipos_pintura'>Equipos de pintura
                                                        <ul className='equipos_pintura'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/equipos_automatizados">Eq. automatizados</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_curado">Eq. de curado</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_recubrimiento">Eq. de recubrimiento</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/dosificadores">Dosificadores</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/sistemas_de_medicion">Sistemas de medición</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/pistolas_electrostaticas">Pistolas electrostáticas</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/bombas_suministro">Bombas de suministro</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/paquetes_bombas">Paquetes de bombas</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/equipos_sanitizantes">Eq. sanitizantes</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/pistolas">Pistolas</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/equipos_para_pintura/tanques">Tanques</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='sistemas_sello'>Sistemas de sello
                                                        <ul className='productos_sistemas_sello'>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/dispensacion" activeClassName='active'>Disp. automatizada</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/equiposhotmelt" activeClassName='active'>Equipos Hot melt</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/valvulas" activeClassName='active'>Valvulas de dispensación</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/equipos2k" activeClassName='active'>Equipos 2k</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/sistema_medicion" activeClassName='active'>Sistema de medición</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/sistema_suministro" activeClassName='active'>Sistema de suministro</NavLink></li>
                                                        </ul></li>
                                                    <li className='submenu_item' id='dados_puntas'>Dados y puntas
                                                        <ul className='productos_dados_puntas'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/dados_y_puntas/dados">Dados y Puntas</Link></li>
                                                            {/* <li className='submenu_item'><Link to="/productos/industria_y_mineria/dados_y_puntas/puntas">Puntas</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/dados_y_puntas/adaptadores">Adaptadores</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/dados_y_puntas/extensiones">Extensiones</Link></li> */}

                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='resistencias'>Resistencias
                                                        <ul className='resistencias'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/resistencias_logo">Resistencias</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='manejo_materiales'>Manejo de materiales
                                                        <ul className='productos_manejo_materiales'>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/manejo_de_materiales/polipastos_neumaticos">Polipastos neumáticos</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/manejo_de_materiales/polipastos_electricos">Polipastos eléctricos</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/manejo_de_materiales/balancines_neumaticos">Balancines neumáticos</Link></li>
                                                            <li className='submenu_item'><Link to="/productos/industria_y_mineria/manejo_de_materiales/balancines_mecanicos">Balancines mecánicos</Link></li>

                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='manejo_fluidos'>Manejo de fluidos
                                                        <ul className='productos_manejo_fluidos'>
                                                         
                                                         
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/diafragma" activeClassName='active'>Bombas de diafragma</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/piston/" activeClassName='active'>Bombas de piston</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/grasa/" activeClassName='active'>Bombas de grasa</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/polvos" activeClassName='active'>Bombas transf. de polvos</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/compuertas" activeClassName='active'>Bombas de compuertas</NavLink></li>
                                                         
                                                            <div>
                                                            {/* <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/interfaz" activeClassName='active'>Bombas de interfaz electrónica</NavLink></li> */}
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/altapresion" activeClassName='active'>Bombas de alta presión</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/pseudosanitaria" activeClassName='active'>Bomba pseudosanitaria</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/sanitarias" activeClassName='active'>Bombas sanitarias</NavLink></li>
                                                            <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/centrifuga" activeClassName='active'>Bomba centrifuga</NavLink></li>
                                                            </div>
                                                         
                                                        </ul>
                                                    </li>
                                                    <li className='submenu_item' id='herramienta_torque'>Herramienta de torque
                                                    <ul className='productos_herramienta_torque'>
                                                        <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/cabezales">Herramienta de torque</NavLink></li>
                                                    </ul></li>

                                                    <li className='submenu_item' id='accesorios'>Accesorios
                                                    <ul className='productos_accesorios'>
                                                        <li className='submenu_item'><NavLink to="/productos/industria_y_mineria/accesorios"activeClassName='active'>Accesorios</NavLink></li>
                                                        </ul></li>
                                                    <li className='submenu_item' id='otros_productos'>Otros productos</li>
                                                </ul>
                                            </span>
                                        </li>
                                        {/*     <li className='construccion submenu_item' id='construccion'><span className='span_construccion'>Construcción</span>
                                        <span className='productos_construccion' id='productos_construccion'>
                                            <ul>
                                                <li className='submenu_item'>Herramientas</li>
                                                <li className='submenu_item'>Abrasivos y corte</li>
                                                <li className='submenu_item'>Manejo de carga</li>
                                                <li className='submenu_item'>Mantenimiento eléctrico</li>
                                                <li className='submenu_item'>Abrasivos, cintas y selladores</li>
                                                <li className='submenu_item'>Seguridad e higiene</li>
                                                <li className='submenu_item'>Recubrimientos</li>
                                                <li className='submenu_item'>Cerrajería</li>
                                                <li className='submenu_item'>Equipos</li>
                                                <li className='submenu_item'>Soldadura</li>
                                                <li className='submenu_item'>Lubricantes</li>
                                                <li className='submenu_item'>Ferretería</li>
                                                <li className='submenu_item'>Jardinería</li>
                                                <li className='submenu_item'>Limpieza</li>
                                                <li className='submenu_item'>Fijación</li>
                                                <li className='submenu_item'>Plomería</li>
                                            </ul>
                                        </span>
                                        </li> */}
                                    </div>
                                </ul>

                            </li>
                            <li className='nav_menu'><NavLink to="/servicios" activeClassName='active'>Servicios</NavLink></li>
                            {/* <li className='nav_menu'><NavLink to="/blog" activeClassName='active'>Blog</NavLink></li> */}
                            <li className='nav_menu'><NavLink to="/contacto" activeClassName='active'>Contacto</NavLink></li>
                        </ul>}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header


