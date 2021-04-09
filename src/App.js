import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import {BrowserRouter as Router,Route} from "react-router-dom"
import Login from './screens/Login'
import Register from './screens/Register'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
function App() {
  return (
    <Router>
      <Header/>
      <main>
<Container>
<Route path="/" component={HomeScreen} exact/>
  <Route path="/product/:id" component={ProductScreen}/>
  <Route path="/card/:id?" component={CartScreen}/>
  <Route path="/login" component={Login}/>
  <Route path='/register' component={Register} />
  <Route path='/profile' component={ProfileScreen}/>
  <Route path='/shipping' component={ShippingScreen} />
</Container>
      </main>
     
    
     <Footer/>
    </Router>
  );
}

export default App;