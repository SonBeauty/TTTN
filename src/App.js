import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom'
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Register from './component/Register';
import Login from './component/Login';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/checkout" component={Checkout}/>
        </div>

      </Switch>
    </>
  );
}

export default App;
