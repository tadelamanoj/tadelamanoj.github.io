import Header from './header'
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
import { Link } from 'react-router-dom';
function App() {

  function pageNotFound(){
    return (
      <div className='pnf'>
        <img className='pnfimage'  src='https://weeblytutorials.com/wp-content/uploads/2017/05/Weebly-404-Page-Not-Found-Error1.png' alt='page not found'></img>
        <Link  className="pagenotfound" to='/manoj-kumar-tadela/home'>BACK TO HOME</Link>
      </div>
    )
  }

  return (
     
      
          <Router>
            <div className='app'>
              <Header/>
              <Switch>
                <Route exact path="/manoj-kumar-tadela/work" component={Work}/>
                <Route exact path="/manoj-kumar-tadela/details" component={Details} />
                <Route exact path="/manoj-kumar-tadela/contact" component={Contact} />
                <Route exact path="/manoj-kumar-tadela/home" component={Home} />
                <Route exact path="*" component={pageNotFound} />

              </Switch>
            </div>
          </Router>
  );
}

export default App;
