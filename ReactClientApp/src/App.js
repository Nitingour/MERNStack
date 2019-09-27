import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './mycom/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './mycom/Home'
import About from './mycom/About'
import Contact from './mycom/Contact'

class App extends React.Component
{

  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      </div>
      </BrowserRouter>
           );
 }
}



export default App;
