import React from 'react';
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screen/HomeScreen'
const App=() =>{
  return (
    <>
      <Header/>
      <main>
        <Container>
          <HomeScreen/>
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
