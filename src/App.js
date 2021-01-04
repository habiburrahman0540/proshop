import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './components/ProductScreen';
const App=() =>{
  return (
    <Router>
      <Header/>
      <main>
        <Container>
        <Route path="/" component={HomeScreen} exact/>
        <Route path="/product/:id" component={ProductScreen}/>
        </Container>
        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
