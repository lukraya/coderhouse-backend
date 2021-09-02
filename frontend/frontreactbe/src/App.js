import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CargaProductos from './components/CargaProductos'
import './components/styles.css'

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
          <Route path="/category/:categoryId">
            <ItemListContainer greeting="Bienvenidos a la tienda"/>
          </Route>
          <Route path="/item/:itemId">
              <ItemDetailContainer/>
            </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
