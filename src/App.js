import React from 'react';
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom';

//components
import Nav from './components/Nav';
import Footer from './components/Footer';

//pages
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio';

//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Nav /> 
      <div className="App">
      
      
          <Route exact path="/" component= {Home}/>
          <Route exact path="/home" component= {Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component= {Contact}/>
        
  
      </div>
      <Footer />
    </Router>
  );
}

export default App;
