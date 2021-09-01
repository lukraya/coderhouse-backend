import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './components/styles.css'
import CargaProductos from './components/CargaProductos'

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a la tienda"/>
          </Route>
          <Route path="/productos/cargar">
            <CargaProductos/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
