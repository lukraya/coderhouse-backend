import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartProvider from './CartContext'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import ApiProductsContainer from './components/ApiProductsContainer'
import CreateProductForm from './components/CreateProductForm'
import ApiProductsListContainer from './components/ApiProductsListContainer'
import UpdateProductForm from './components/UpdateProductForm'
import './styles.css'


const App = ()=>{
  return (
    <CartProvider>
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
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/:itemId">
              <ItemDetailContainer/>
            </Route>          
          </Switch>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
