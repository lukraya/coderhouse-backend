import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartProvider from './CartContext'
import NavBar from './components/NavBar'
import ItemListContainer from './components/products/ItemListContainer'
import ItemDetailContainer from './components/products/ItemDetailContainer'
import Cart from './components/cart/Cart'
import Checkout from './components/cart/Checkout'
//import ApiProductsContainer from './components/ApiProductsContainer'
import CreateProductForm from './components/api/CreateProductForm'
//import ApiProductsListContainer from './components/ApiProductsListContainer'
import UpdateProductForm from './components/api/UpdateProductForm'
import SignupForm from './components/auth/SignupForm'
import SignupFailure from './components/auth/SignupFailure'
import LoginFailure from './components/auth/LoginFailure'
import LoginForm from './components/auth/LoginForm'
import './styles.css'
import Logout from './components/auth/Logout'
import Profile from './components/Profile'



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
            <Route path="/signup">
              <SignupForm/>
            </Route>
            <Route path="/signup-failed">
              <SignupFailure/>
            </Route>
            <Route path="/login">
              <LoginForm/>
            </Route>
            <Route path="/login-failed">
              <LoginFailure/>
            </Route>
            <Route path="/logout">
              <Logout/>
            </Route>
            <Route path="/perfil">
              <Profile/>
            </Route>
            {/* <Route path="/api/productos" exact>
              <ApiProductsContainer/>
            </Route> */}
            <Route path="/nuevo-producto">
              <CreateProductForm/>
            </Route>
            {/* <Route path="/api/productos/listar">
              <ApiProductsListContainer/>
            </Route> */}
            <Route path="/actualizar/:itemId">
              <UpdateProductForm/>
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer greeting="Bienvenidos a la tienda"/>
            </Route>
            <Route path="/carrito">
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
