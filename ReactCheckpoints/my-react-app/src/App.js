import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Wale";

function App() {
  return (
    <div className="App">
      <Container className="py-4">
        <Card className="product-card">
          <Card.Body>
            <Image />
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>
        
        <div className="greeting-section mt-4">
          <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
          {firstName && (
            <img 
              src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
              alt="Welcome"
              className="welcome-image"
            />
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
