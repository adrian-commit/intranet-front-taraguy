
import Tareas from './components/Tareas';
import Contact from './components/Contact';
import misActividades from './components/misActividades';
import NotFount from './components/NotFount';
import Products from './components/products';

import { Link, Route, Switch  } from 'react-router-dom'



function App() {


  return (
    <>
      <Link to="/"> Tareas </Link> <br/>
      <Link to="/misActividades"> Mis Actividades </Link> <br/>
      <Link to="/contact"> Contact </Link> <br/>
      <Link to="/products/1"> Products </Link> <br/>
      

      <hr/>

        <Switch> 
        <Route exact path="/">
        <Tareas/>
        </Route>
        <Route path="/" component={misActividades} />
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" component={Products} />
        <Route component={NotFount} />
        </Switch>
    </>
  );
}

export default App;
