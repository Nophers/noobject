import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../src/App.css"

 
import Home from './Components/Interface/Pages/Home';
import About from './Components/Interface/Pages/About';
import Contact from './Components/Interface/Pages/Contact';
import Error from './Components/Error';
import Navigation from './Components/Util/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;