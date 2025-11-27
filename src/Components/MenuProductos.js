import { Switch, Route, NavLink } from "react-router-dom";
import whatsappIcon from '../img/icons/whatsapp.png'
import Adaptadores from "./Adaptadores";
import Dados from "./Dados";
import Extensiones from "./Extensiones";
import Puntas from "./Puntas";
import './menuProductos.css';
import Remachadoras from "./Remachadoras";
import Accesorios from "./Accesorios";
import HerramientaElectricaBateria from "./HerramientaElectricaBateria";
import HerramientaElectricaCable from "./HerramientaElectricaCable";
import HerramientaVehicleService from "./HerramientaVehicleService";
import HerramientaIndustrial from "./HerramientaIndustrial";
import BalancinesElectricos from "./BalancinesElectricos";
import BalancinesNeumaticos from "./BalancinesNeumaticos";
import PolipastosElectricos from "./PolipastosElectricos";
import PolipastosNeumaticos from "./PolipastosNeumaticos";
import ResistenciasLogo from "./ResistenciasLogo";
import ReferenciaFusibles from "./ReferenciaFusibles";
import DispensacionAutomatizada from "./DispensacionAutomatizada";
import Equipos2k from "./Equipos2k";
import EquiposHotMelt from "./EquiposHotMelt";
import ValvulasDispensacion from "./ValvulasDispensacion";
import SistemaSuministro from "./SistemaSuministro";
import BombasSuministro from "./BombasSuministro";
import EquiposAutomatizados from "./EquiposAutomatizados";
import EquiposCurado from "./EquiposCurado";
import EquiposRecubrimiento from "./EquiposRecubrimiento";
import Dosificadores from "./Dosificadores";
import SistemaMedicionEqPintura from "./SistemaMedicionEqPintura";
import PistolasElectrostaticas from "./PistolasElectrostaticas";
import PaquetesBomba from "./PaquetesBombas";
import EquiposSanitizantes from "./EquiposSanitizantes";
import Pistolas from "./Pistolas";
import Tanques from "./Tanques";
import BombasDiafragma from "./BombasDiafragma";
import BombasPseudosanitarias from "./BombasPseudosanitarias";
import BombasPiston from "./BombasPiston";
import BombasGrasa from "./BombasGrasa";
import BombasTransfPolvos from "./BombasTransfPolvos";
import BombasCompuertas from "./BombasCompuertas";
import BombasInterfazElectronica from "./BombasInterfazElectronica";
import BombasAltaPresion from "./BombasAltaPresion";
import BombasSanitarias from "./BombasSanitarias";
import BombasCentrifugas from "./BombasCentrifugas";
import HerramientaTorque from "./HerramientaTorque";


/* import Remachadoras from "./Remachadoras"; */

function MenuProductos() {
  return (
    <div className="menu_productos">
     <div className="menu_productos_background">
      <div className="productos_title">
        <h2>Productos</h2>
      </div>
    </div>

     {/* <ul className="menu_productos_1">
        <li><NavLink to="/productos/industria_y_mineria/" activeClassName='active'>Industria y Minería</NavLink></li>
        <li><NavLink to="/productos/construccion/" activeClassName='active'>Construcción</NavLink></li>
      </ul> */}
     <div className="menu_productos_2">
      
        <Switch>
          {/* <Route path="/productos/industria_y_mineria/"component={MenuIndustriaMineria}/>
          <Route path="/productos/construccion/"component={MenuConstruccion}/> */}
        <MenuIndustriaMineria/>
        
        </Switch>
      </div>
      </div>
  );
}

//-----------------------------------------------------------------------
function MenuIndustriaMineria() {
    return (
      <div className="menu_industrial">
          <div className="menu_industrial_1">
              {/*   <ul>
                  <div className="box_industrial">
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_electricas" activeClassName='active'>Herramienta eléctrica</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_neumaticas" activeClassName='active'>Herramienta neumática</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello" activeClassName='active'>Sistemas de sello</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas" activeClassName='active'>Dados y puntas</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/resistencias_logo" activeClassName='active'>Resistencias</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/referencia_fusibles" activeClassName='active'>Referencia Cruzada de fusibles</NavLink></li>
                  </div>
                  <div className="box_industrial">
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales" activeClassName='active'>Manejo de materiales</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos" activeClassName='active'>Manejo de fluidos</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/cabezales" activeClassName='active'>Herramienta de torque</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/accesorios" activeClassName='active'>Accesorios</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura" activeClassName='active'>Equipos de pintura</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/remachadoras" activeClassName='active'>Otros Productos</NavLink></li>
                  </div>
                  
                </ul> */}
          </div>
          <div className="menu_industrial_2">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/herramientas_electricas" component={MenuHerramientaElectrica}/>
                      <Route path="/productos/industria_y_mineria/herramientas_neumaticas" component={MenuHerramientaNeumatica}/>
                      <Route path="/productos/industria_y_mineria/remachadoras"component={Remachadoras}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello"component={MenuSistemasSello}/> 
                      <Route path="/productos/industria_y_mineria/dados_y_puntas"component={MenuDados}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_materiales"component={MenuManejoMateriales}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos"component={MenuManejoFluidos}/>
                      <Route path="/productos/industria_y_mineria/cabezales"component={HerramientaTorque}/>
                      <Route path="/productos/industria_y_mineria/accesorios"component={Accesorios}/> 
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura"component={MenuEquiposPintura}/>
                      <Route path="/productos/industria_y_mineria/resistencias_logo"component={ResistenciasLogo}/>
                      <Route path="/productos/industria_y_mineria/referencia_fusibles"component={ReferenciaFusibles}/>
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuHerramientaElectrica() {
    return (
      <div className="menu_herramienta_electrica">
          <div className="menu_herramienta_electrica_contenido">
                <ul>
                  <div className="box_herramienta_electrica_1">
                    <h2>Herramienta eléctrica</h2><br/>
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_electricas/bateria" activeClassName='active'>Herramienta eléctrica de bateria</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_electricas/cable" activeClassName='active'>Herramienta eléctrica de cable</NavLink></li>
                  </div>
                </ul>
          </div>
          <div className="box_herramienta_electrica_2 margin_top">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/herramientas_electricas/bateria"component={HerramientaElectricaBateria}/>
                      <Route path="/productos/industria_y_mineria/herramientas_electricas/cable"component={HerramientaElectricaCable}/>
                  <HerramientaElectricaBateria/>
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuHerramientaNeumatica() {
    return (
      <div className="menu_herramienta_neumatica">
          <div className="menu_herramienta_neumatica_contenido">
                <ul>
                  <div className="box_herramienta_neumatica_1">
                    <h2>Herramienta neumática</h2><br/>
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_neumaticas/vehicle_service" activeClassName='active'>Herramienta vehicle service</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/herramientas_neumaticas/herramienta_industrial" activeClassName='active'>Herramienta industrial</NavLink></li>
                  </div>
                </ul>
          </div>
          <div className="box_herramienta_neumatica_2 margin_top">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/herramientas_neumaticas/vehicle_service"component={HerramientaVehicleService}/>
                      <Route path="/productos/industria_y_mineria/herramientas_neumaticas/herramienta_industrial"component={HerramientaIndustrial}/>
                      <HerramientaVehicleService/>
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuDados() {
    return (
      <div className="menu_dados">
          <div className="menu_dados">
                <ul>
                  <div className="box_dados_1">
                    <h2>Dados y puntas</h2><br/>
                  <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas/dados" activeClassName='active'>Dados y Puntas</NavLink></li>
                  {/* <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas/puntas" activeClassName='active'>Puntas</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas/adaptadores" activeClassName='active'>Adaptadores</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas/extensiones" activeClassName='active'>Extensiones</NavLink></li> */}
                  </div>
                </ul>
          </div>
          <div className="box_dados_2 margin_top">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/dados_y_puntas/dados" component={Dados}/>
                      <Route path="/productos/industria_y_mineria/dados_y_puntas/puntas"component={Puntas}/>
                      <Route path="/productos/industria_y_mineria/dados_y_puntas/adaptadores"component={Adaptadores}/>
                      <Route path="/productos/industria_y_mineria/dados_y_puntas/extensiones"component={Extensiones}/>
                      <Dados/>
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuSistemasSello() {
    return (
      <div className="menu_sistemas_sello">
          <div className="menu_sistemas_sello">
                <ul>
                  <div className="box_sello_1">
                  <h2>Sistemas de sello</h2><br/>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/dispensacion" activeClassName='active'>Dispensación automatizada</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/equiposhotmelt" activeClassName='active'>Equipos Hot melt</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/valvulas" activeClassName='active'>Valvulas de dispensación</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/equipos2k" activeClassName='active'>Equipos 2k</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/sistema_medicion" activeClassName='active'>Sistema de medición</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello/sistema_suministro" activeClassName='active'>Sistema de suministro</NavLink></li>
                  </div>
                </ul>
          </div>
          <div className="box_sello_2">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/dispensacion" component={DispensacionAutomatizada}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/equiposhotmelt"component={EquiposHotMelt}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/valvulas"component={ValvulasDispensacion}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/equipos2k" component={Equipos2k}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/sistema_medicion"component={SistemaMedicionEqPintura}/>
                      <Route path="/productos/industria_y_mineria/sistemas_de_sello/sistema_suministro"component={SistemaSuministro}/>
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuManejoFluidos() {
    return (
      <div className="menu_manejo_fluidos">
          <div className="menu_manejo_fluidos">
                <ul>
                  <div className="box_manejo_1">
                  <h2>Manejo de fluidos</h2><br/>
                    <div className="box_manejo_1_flex">
                      <div className="box_manejo_1_flex_margin">
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/diafragma" activeClassName='active'>Bombas de diafragma</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/piston/" activeClassName='active'>Bombas de piston</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/grasa/" activeClassName='active'>Bombas de grasa</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/polvos" activeClassName='active'>Bombas p/ transf. de polvos</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/compuertas" activeClassName='active'>Bombas de compuertas</NavLink></li>
                  </div>
                  <div>
                  {/* <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/interfaz" activeClassName='active'>Bombas de interfaz electrónica</NavLink></li> */}
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/altapresion" activeClassName='active'>Bombas de alta presión</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/pseudosanitaria" activeClassName='active'>Bomba pseudosanitaria</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/sanitarias" activeClassName='active'>Bombas sanitarias</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/centrifuga" activeClassName='active'>Bomba centrifuga</NavLink></li>
                  {/* <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/tambor" activeClassName='active'>Descargador de tambor</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos/evacuacion" activeClassName='active'>Sistema de evacuación</NavLink></li> */}
                  </div>
                  </div>
                  </div>
                </ul>
          </div>
          <div className="box_manejo_2">
                    <Switch>
                      <div className="box_manejo_2_flex">
                     
                      <div>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/diafragma"component={BombasDiafragma}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/piston"component={BombasPiston}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/grasa"component={BombasGrasa}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/polvos"component={BombasTransfPolvos}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/compuertas"component={BombasCompuertas}/>
                      </div>
                      <div>
                      {/* <Route path="/productos/industria_y_mineria/manejo_de_fluidos/interfaz"component={BombasInterfazElectronica}/> */}
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/altapresion"component={BombasAltaPresion}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/pseudosanitaria"component={BombasPseudosanitarias}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/sanitarias"component={BombasSanitarias}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/centrifuga"component={BombasCentrifugas}/>
                      </div>
                      </div>
                      {/* <Route path="/productos/industria_y_mineria/manejo_de_fluidos/tambor">Descargador de tambor</Route>
                      <Route path="/productos/industria_y_mineria/manejo_de_fluidos/evacuacion">Sistema de evacuación</Route> */}
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuEquiposPintura() {
    return (
      <div className="menu_equipos_pintura">
          <div className="menu_equipos_pintura_contenido">
                <ul>
                  <h2>Equipos de pintura</h2><br/>
                  <div className="box_pintura_1">
                  <div className="box_pintura_10">
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/equipos_automatizados" activeClassName='active'>Equipos automatizados</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_curado/" activeClassName='active'>Equipos de curado</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_recubrimiento/" activeClassName='active'>Equipos de recubrimiento</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/dosificadores" activeClassName='active'>Dosificadores</NavLink></li>
                  </div>
                  <div className="box_pintura_20">
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/sistemas_de_medicion" activeClassName='active'>Sistemas de medición</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/pistolas_electrostaticas" activeClassName='active'>Pistolas electrostaticas</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/bombas_suministro" activeClassName='active'>Bombas de suministro</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/paquetes_bombas" activeClassName='active'>Paquetes de bombas</NavLink></li>
                  </div>
                  <div className="box_pintura_30">
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/equipos_sanitizantes" activeClassName='active'>Equipos sanitizantes</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/pistolas" activeClassName='active'>Pistolas</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura/tanques" activeClassName='active'>Tanques</NavLink></li>
                  </div>

                  </div>
                </ul>
          </div>
          <div className="box_pintura_2">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/equipos_automatizados"component={EquiposAutomatizados}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_curado"component={EquiposCurado}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/equipos_de_recubrimiento"component={EquiposRecubrimiento}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/dosificadores"component={Dosificadores}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/sistemas_de_medicion"component={SistemaMedicionEqPintura}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/pistolas_electrostaticas"component={PistolasElectrostaticas}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/bombas_suministro"component={BombasSuministro}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/paquetes_bombas"component={PaquetesBomba}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/equipos_sanitizantes"component={EquiposSanitizantes}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/pistolas"component={Pistolas}/>
                      <Route path="/productos/industria_y_mineria/equipos_para_pintura/tanques"component={Tanques}/>
                      
                    </Switch>
          </div>
        </div>
    );
  }
  function MenuManejoMateriales() {
    return (
      <div className="menu_manejo_materiales">
          <div className="menu_manejo_materiales">
                <ul>
                  <div className="box_materiales_1">
                  <h2>Manejo de materiales</h2><br/>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales/polipastos_neumaticos" activeClassName='active'>Polipastos neumáticos</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales/polipastos_electricos/" activeClassName='active'>Polipastos eléctricos</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales/balancines_neumaticos/" activeClassName='active'>Balancines neumáticos</NavLink></li>
                  <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales/balancines_mecanicos" activeClassName='active'>Balancines mecánicos</NavLink></li>

                  </div>
                </ul>
          </div>
          <div className="box_materiales_2 margin_top">
                    <Switch>
                      <Route path="/productos/industria_y_mineria/manejo_de_materiales/polipastos_neumaticos"component={PolipastosNeumaticos}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_materiales/polipastos_electricos"component={PolipastosElectricos}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_materiales/balancines_neumaticos"component={BalancinesNeumaticos}/>
                      <Route path="/productos/industria_y_mineria/manejo_de_materiales/balancines_mecanicos"component={BalancinesElectricos}/>
                      <PolipastosNeumaticos/>
                    </Switch>
          </div>
        </div>
    );
  }
//--------------------------------------------------------------------------------

  function MenuConstruccion() {
    return (
      <div className="menu_construccion">
      <div className="menu_construccion_1">
        <ul>         
            <div className="box_construccion">
                  <li><NavLink to="/productos/construccion/herramientas" activeClassName='active'>Herramientas</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte" activeClassName='active'>Abrasivos y corte</NavLink></li>
                  <li><NavLink to="/productos/construccion/manejo_de_carga" activeClassName='active'>Manejo de carga</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico" activeClassName='active'>Mantenimiento eléctrico</NavLink></li>
            </div>
            <div className="box_construccion">
                  <li><NavLink to="/productos/construccion/adhesivos" activeClassName='active'>Adhesivos, cintas y selladores</NavLink></li>
                  <li><NavLink to="/productos/construccion/seguridad_e_higiene" activeClassName='active'>Seguridad e Higiene</NavLink></li>
                  <li><NavLink to="/productos/construccion/pintura_y_recubrimientos" activeClassName='active'>Recubrimientos</NavLink></li>
                  <li><NavLink to="/productos/construccion/cerrajeria" activeClassName='active'>Cerrajería</NavLink></li>
            </div>
          
        
          <div className="box_construccion">
                <li><NavLink to="/productos/construccion/equipos" activeClassName='active'>Equipos</NavLink></li>
                <li><NavLink to="/productos/construccion/soldadura" activeClassName='active'>Soldadura</NavLink></li>
                <li><NavLink to="/productos/construccion/lubricantes" activeClassName='active'>Lubricantes</NavLink></li>
                <li><NavLink to="/productos/construccion/ferreteria" activeClassName='active'>Ferretería</NavLink></li>
          </div>
          <div className="box_construccion">
                <li><NavLink to="/productos/construccion/jardineria" activeClassName='active'>Jardinería</NavLink></li>
                <li><NavLink to="/productos/construccion/limpieza" activeClassName='active'>Limpieza</NavLink></li>
                <li><NavLink to="/productos/construccion/fijacion" activeClassName='active'>Fijación</NavLink></li>
                <li><NavLink to="/productos/construccion/plomeria" activeClassName='active'>Plomería</NavLink></li>
          </div>
        
              </ul>
       </div>
       <div className="menu_construccion_2 margin_top">
          <Switch>
            <Route path="/productos/construccion/herramientas"component={MenuHerramientas}/>
            <Route path="/productos/construccion/abrasivos_y_corte"component={MenuAbrasivos}/>
            <Route path="/productos/construccion/manejo_de_carga">Manejo de carga</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico"component={MenuIluminacion}/>
            <Route path="/productos/construccion/adhesivos">Adhesivos</Route>
            <Route path="/productos/construccion/limpieza">Limpieza</Route>
            <Route path="/productos/construccion/seguridad_e_higiene">Seguridad e higiene</Route>
            <Route path="/productos/construccion/cerrajeria">Cerrajeria</Route>
            <Route path="/productos/construccion/equipos">Equipos</Route>
            <Route path="/productos/construccion/soldadura">Soldadura</Route>
            <Route path="/productos/construccion/lubricantes">Lubricantes</Route>
            <Route path="/productos/construccion/ferreteria">Ferreteria</Route>
            <Route path="/productos/construccion/pintura_y_recubrimientos">Pintura y Recubrimientos</Route>
            <Route path="/productos/construccion/jardineria">Jardineria</Route>
            <Route path="/productos/construccion/fijacion">Fijacion</Route>
            <Route path="/productos/construccion/plomeria">Plomeria</Route>
          </Switch>
          </div>
        </div>
    );
  }


  function MenuHerramientas() {
    return (
      <div className="menu_herramientas">
      <div className="menu_herramientas_contenido">
        <ul>         
            <div className="box_herramientas_1">
            <h2>Herramientas</h2><br/>
                  <li><NavLink to="/productos/construccion/herramientas/automotriz" activeClassName='active'>Automotriz</NavLink></li>
                  <li><NavLink to="/productos/construccion/herramientas/lazer" activeClassName='active'>Lázer</NavLink></li>
                  <li><NavLink to="/productos/construccion/herramientas/manual" activeClassName='active'>Manual</NavLink></li>
                  
            </div>
        </ul>
       </div>
       <div className="menu_construccion_2 margin_top">
          <Switch>
            <Route path="/productos/construccion/herramientas/automotriz">Automotriz</Route>
            <Route path="/productos/construccion/herramientas/lazer">Lazer</Route>
            <Route path="/productos/construccion/herramientas/manual">Manual</Route>

          </Switch>
          </div>
        </div>
    );
  }
  function MenuAbrasivos() {
    return (
      <div className="menu_abrasivos">
      <div className="menu_abrasivos_contenido">
        <ul>         
            <div className="box_abrasivos_1">
            <h2>Abrasivos</h2><br/>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/abrasivo" activeClassName='active'>Abrasivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/adaptador_disco" activeClassName='active'>Adaptador para disco</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/banda_lija" activeClassName='active'>Banda de lija </NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/bonete" activeClassName='active'>Bonete</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/broca" activeClassName='active'>Broca</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/cepillo" activeClassName='active'>Cepillo</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/cono_abrasivo" activeClassName='active'>Cono Abrasivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/copa_desbaste" activeClassName='active'>Cono desbaste</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte/copa_pulido" activeClassName='active'>Copa para pulido</NavLink></li>
                  
            </div>
        </ul>
       </div>
       <div className="box_abrasivos_2 margin_top">
          <Switch>
            <Route path="/productos/construccion/abrasivos_y_corte/abrasivo">Abrasivo</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/adaptador_disco">Adaptador para disco</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/banda_lija">Banda de lija</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/bonete">Bonete</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/broca">Broca</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/cepillo">Cepillo/</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/cono_abrasivo">Cono abrasivo</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/copa_desbaste">Cono desbaste</Route>
            <Route path="/productos/construccion/abrasivos_y_corte/copa_pulido">Copa para pulido</Route>

          </Switch>
          </div>
        </div>
    );
  }
  function MenuIluminacion() {
    return (
      <div className="menu_iluminacion">
      <div className="menu_iluminacion_contenido">
        <ul>         
            <div className="box_iluminacion_1">
            <h2>Iluminación</h2><br/>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/apagador" activeClassName='active'>Apagador</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/clavija" activeClassName='active'>Clavija</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/contacto" activeClassName='active'>Contacto </NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/farol" activeClassName='active'>Farol</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/foco_led" activeClassName='active'>Foco LED</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/foco_sp" activeClassName='active'>Foco SP</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/limpia_contactos" activeClassName='active'>Limpia contactos</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/linterna_mano" activeClassName='active'>Linterna de mano</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/linterna_led" activeClassName='active'>Linterna LED</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/placa" activeClassName='active'>Placa</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/placa_ciega" activeClassName='active'>Placa ciega</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/portalampara" activeClassName='active'>Porta Lámpara</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/reflector_led" activeClassName='active'>Reflector LED</NavLink></li>
                  
            </div>
        </ul>
       </div>
       <div className="box_iluminacion_2 margin_top">
          <Switch>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/apagador">Apagador</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/clavija">Clavija</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/contacto">Contacto</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/farol">Farol</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/foco_led">Foco LED</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/foco_sp">Foco SP/</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/limpia_contactos">Limpia contactos</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/linterna_mano">Linterna de mano</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/linterna_led">Linterna LED</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/placa">Placa</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/placa_ciega">Placa ciega</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/portalampara">Porta lámpara</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/reflector_led">Reflector LED</Route>

          </Switch>
          </div>
        </div>
    );
  }
  function MenuAdhesivos() {
    return (
      <div className="menu_adhesivos">
      <div className="menu_adhesivos_contenido">
        <ul>         
            <div className="box_adhesivos_1">
            <h2>Adhesivos</h2><br/>
                  <li><NavLink to="/productos/construccion/adhesivos/adhesiv" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/aislante" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/cinta_aislante" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/cinta_delimitadora" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/cinta_filamento" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/cinta_para_ductos" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/adhesivos/cinta_para_empaque" activeClassName='active'>Adhesivo</NavLink></li>
                  <li><NavLink to="/productos/construccion/avija" activeClassName='active'>Clavija</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/contacto" activeClassName='active'>Contacto </NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/farol" activeClassName='active'>Farol</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/foco_led" activeClassName='active'>Foco LED</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/foco_sp" activeClassName='active'>Foco SP</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/limpia_contactos" activeClassName='active'>Limpia contactos</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/linterna_mano" activeClassName='active'>Linterna de mano</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/linterna_led" activeClassName='active'>Linterna LED</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/placa" activeClassName='active'>Placa</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/placa_ciega" activeClassName='active'>Placa ciega</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/portalampara" activeClassName='active'>Porta Lámpara</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico/reflector_led" activeClassName='active'>Reflector LED</NavLink></li>
                  
            </div>
        </ul>
       </div>
       <div className="box_ahesivos_2 margin_top">
          <Switch>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/apagador">Apagador</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/clavija">Clavija</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/contacto">Contacto</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/farol">Farol</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/foco_led">Foco LED</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/foco_sp">Foco SP/</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/limpia_contactos">Limpia contactos</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/linterna_mano">Linterna de mano</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/linterna_led">Linterna LED</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/placa">Placa</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/placa_ciega">Placa ciega</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/portalampara">Porta lámpara</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico/reflector_led">Reflector LED</Route>

          </Switch>
          </div>
        <div className='whatsapp_contact'>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/526624515925?text=Contactar%20con%20un%20asesor"><img src={whatsappIcon}></img></a>
            </div>
        </div>
    );
  }


  export default MenuProductos;