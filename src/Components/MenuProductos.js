import { Switch, Route, NavLink} from "react-router-dom";


import './menuProductos.css';



function MenuProductos() {
  return (
    <div className="menu_productos">
     <div className="menu_productos_background">
      
     </div>

     <ul className="menu_productos_1">
        <li><NavLink to="/productos/industria_y_mineria/" activeClassName='active'>Industria y Minería</NavLink></li>
       <li><NavLink to="/productos/construccion/" activeClassName='active'>Construcción</NavLink></li>
     </ul>
     <div className="menu_productos_2">
        <Switch>
          <Route path="/productos/industria_y_mineria/"component={MenuIndustriaMineria}/>
          <Route path="/productos/construccion/"component={MenuConstruccion}/>
        </Switch>
      </div>
      </div>
  );
}

function MenuIndustriaMineria() {
    return (
      <div className="menu_industrial">
 <div className="menu_industrial_1">
       <ul>
         <div className="box_industrial">
         <li><NavLink to="/productos/industria_y_mineria/herramientas_electricas" activeClassName='active'>Herramienta eléctrica</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/herramientas_neumaticas" activeClassName='active'>Herramienta neumática</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/remachadoras" activeClassName='active'>Remachadoras</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/sistemas_de_sello" activeClassName='active'>Sistemas de sello</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/dados_y_puntas" activeClassName='active'>Dados y puntas</NavLink></li>
         </div>
         <div className="box_industrial">
         <li><NavLink to="/productos/industria_y_mineria/manejo_de_materiales" activeClassName='active'>Manejo de materiales</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/manejo_de_fluidos" activeClassName='active'>Manejo de fluidos</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/cabezales" activeClassName='active'>Cabezales</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/accesorios" activeClassName='active'>Accesorios</NavLink></li>
         <li><NavLink to="/productos/industria_y_mineria/equipos_para_pintura" activeClassName='active'>Equipos para pintura</NavLink></li>
         </div>
         
       </ul>
       </div>
       <div className="menu_industrial_2">
          <Switch>
            <Route path="/productos/industria_y_mineria/herramientas_neumaticas">Herramientas neumáticas</Route>
            <Route path="/productos/industria_y_mineria/herramientas_electricas">Herramientas eléctricas</Route>
            <Route path="/productos/industria_y_mineria/manejo_de_materiales">Manejo de Materiales</Route>
            <Route path="/productos/industria_y_mineria/manejo_de_fluidos">Manejo de fluidos</Route>
            <Route path="/productos/industria_y_mineria/equipos_para_pintura">Equipos para pintura</Route>
            <Route path="/productos/industria_y_mineria/remachadoras">Remachadoras e insertadoras</Route>
            <Route path="/productos/industria_y_mineria/dados_y_puntas">Dados y puntas</Route>
            <Route path="/productos/industria_y_mineria/sistemas_de_sello">Sistemas de sello</Route>
            <Route path="/productos/industria_y_mineria/cabezales">Cabezales</Route>
          <Route path="/productos/industria_y_mineria/accesorios">Accesorios</Route> 
          </Switch>
          </div>
        </div>
    );
  }
  function MenuConstruccion() {
    return (
      <div className="menu_construccion">
      <div className="menu_construccion_1">
        <ul>         
            <div className="box_construccion">
                  <li><NavLink to="/productos/construccion/herramientas" activeClassName='active'>Herramientas</NavLink></li>
                  <li><NavLink to="/productos/construccion/abrasivos_y_corte" activeClassName='active'>Abrasivos y corte</NavLink></li>
                  <li><NavLink to="/productos/construccion/manejo_de_carga" activeClassName='active'>Manejo de carga</NavLink></li>
                  <li><NavLink to="/productos/construccion/iluminacion_y_material_electrico" activeClassName='active'>Ilum. y mant. eléctrico</NavLink></li>
            </div>
            <div className="box_construccion">
                  <li><NavLink to="/productos/construccion/adhesivos" activeClassName='active'>Adhesivos, cintas/etc</NavLink></li>
                  <li><NavLink to="/productos/construccion/seguridad_e_higiene" activeClassName='active'>Seguridad e Higiene</NavLink></li>
                <li><NavLink to="/productos/construccion/pintura_y_recubrimientos" activeClassName='active'>Pintura/recubrimientos</NavLink></li>
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
       <div className="menu_construccion_2">
          <Switch>
            <Route path="/productos/construccion/herramientas">Herramientas</Route>
            <Route path="/productos/construccion/abrasivos_y_corte">Abrasivos y corte</Route>
            <Route path="/productos/construccion/manejo_de_carga">Manejo de carga</Route>
            <Route path="/productos/construccion/iluminacion_y_material_electrico">Iluminación y material eléctrico</Route>
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
/*   function MenuManejoFluidos() {
    return (
      <div className="menu_manejo_fluidos">
   
       <ul className="menu_manejo_fluidos_1">
         <li><NavLink to="/productos/construccion/manejo_de_fluidos/bombas_de_diafragma"activeClassName="active">Bombas de diafragma</NavLink></li>
         <li><NavLink to="/productos/construccion/manejo_de_fluidos/bombas_de_piston"activeClassName="active">Bombas de piston</NavLink></li>
         <li><NavLink to="/productos/construccion/manejo_de_fluidos/bombas_de_grasa"activeClassName="active">Bombas de grasa</NavLink></li>
         <li><NavLink to="/productos/construccion/manejo_de_fluidos/bombas_de_compuertas"activeClassName="active">Bombas de compuerta</NavLink></li>
       </ul>
         <div className="menu_manejo_fluidos_2">
          <Switch>
            <Route path="/productos/construccion/manejo_de_fluidos/bombas_de_diafragma"component={BombasDiafragma}/>
            <Route path="/productos/construccion/manejo_de_fluidos/bombas_de_piston"component={BombasPiston}/>
            <Route path="/productos/construccion/manejo_de_fluidos/bombas_de_grasa"component={BombasGrasa}/>
            <Route path="/productos/construccion/manejo_de_fluidos/bombas_de_compuertas"component={BombasCompuertas}/>
          </Switch>
          </div>
        
        </div>
    );
  } */

  export default MenuProductos;