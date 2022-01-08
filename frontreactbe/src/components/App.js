import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CartProvider from '../contexts/CartContext'
import NavBar from './NavBar'
import ItemListContainer from './products/ItemListContainer'
import ItemDetailContainer from './products/ItemDetailContainer'
import SignupForm from './auth/SignupForm'
import SignupFailure from './auth/SignupFailure'
import LoginFailure from './auth/LoginFailure'
import LoginForm from './auth/LoginForm'
import Logout from './auth/Logout'
import Profile from './user/Profile'
import Cart from './cart/Cart'
import OrderNew from './cart/OrderNew'
import CreateProductForm from './api/CreateProductForm'
import UpdateProductForm from './api/UpdateProductForm'
import '../styles.css'
import UserChat from './user/UserChat'
import Chats from './api/Chats'
import AdminChat from './api/AdminChat'


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
              <Route path="/chat">
                <UserChat/>
              </Route>            
              <Route path="/nuevo-producto">
                <CreateProductForm/>
              </Route>
              <Route path="/actualizar/:itemId">
                <UpdateProductForm/>
              </Route>
               <Route path="/chatlist/:email">
                <AdminChat/>
              </Route>
              <Route path="/chatlist">
                <Chats/>
              </Route>
             
              <Route path="/category/:categoryId">
                <ItemListContainer greeting="Bienvenidos a la tienda"/>
              </Route>
              <Route path="/carrito">
                <Cart/>
              </Route>
              <Route path="/checkout">
                <OrderNew/>
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
