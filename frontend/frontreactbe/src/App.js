import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ApiProductsContainer from './components/ApiProductsContainer'
import CreateProductForm from './components/CreateProductForm'
import ApiProductsListContainer from './components/ApiProductsListContainer'
import UpdateProductForm from './components/UpdateProductForm'
import './styles.css'

const App = ()=>{
  return (
    <BrowserRouter>
      <NavBar/>
      <main>
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a la tienda"/>
          </Route>
          <Route path="/api/productos" exact>
            <ApiProductsContainer/>
          </Route>
          <Route path="/api/productos/cargar">
            <CreateProductForm/>
          </Route>
          <Route path="/api/productos/listar">
            <ApiProductsListContainer/>
          </Route>
          <Route path="/api/productos/actualizar/:itemId">
            <UpdateProductForm/>
          </Route>
          <Route path="/category/:categoryId">
            <ItemListContainer greeting="Bienvenidos a la tienda"/>
          </Route>
          <Route path="/:itemId">
            <ItemDetailContainer/>
          </Route>          
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App;
