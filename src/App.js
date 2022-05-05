import Head from './header'
import Details from './details'
import React from 'react';
import Work from './work';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect
} from "react-router-dom";
import Home from './home';
import Contact from './contact'
import './App.css';
function App() {

  function pageNotFound(){
    return (
      <h>Page Not Found</h>
    )
  }

  return (
     
      
          <Router>
            <div className='app'>
              <Head/>
              <Switch>
                <Route exact path="/work" component={Work}/>
                <Route exact path="/details" component={Details} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/manoj-kumar-tadela/home" component={Home} />
                <Route exact path="*" component={pageNotFound} />

              </Switch>
            </div>
          </Router>
  );
}

export default App;
