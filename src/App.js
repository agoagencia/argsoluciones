import './App.css';
import {HashRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Components/Header';
import Home from './Components/Home';
import MenuProductos from './Components/MenuProductos';

import Conocenos from './Components/Conocenos';





function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
    
        <Switch>
          <Route exact path="/"component={Home}/>
          <Route path="/conocenos"component={Conocenos}/>
          <Route path="/productos"component={MenuProductos}/>
          <Route path="/servicios"></Route>
          <Route path="/blog"></Route>
          <Route path="/contacto"></Route>
        </Switch>
      </Router>
      </div>
  );
}



export default App;
