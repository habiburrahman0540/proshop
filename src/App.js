import React from 'react';
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const App=() =>{
  return (
    <>
      <Header/>
      <main>
        <Container>
        <h1>This is content</h1>
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
