import Header from './header';
import Details from './details'
import React from 'react';
import Work from './work';
import {
  HashRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Home from './home';
import Contact from './contact'
import './App.css';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom';
function App() {

  function pageNotFound(){
    return (
      <div className='pnf'>
        <img className='pnfimage'  src='https://weeblytutorials.com/wp-content/uploads/2017/05/Weebly-404-Page-Not-Found-Error1.png' alt='page not found'></img>
        <Link  className="pagenotfound" to='/'>BACK TO HOME</Link>
      </div>
    )
  }

  return (
     
      
          <Router>
            <div className='app'>
              <Header/>
              <HashRouter >
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Work}/> 
                <Route exact path="/details" component={Details} />
                <Route exact path="/contact" component={Contact} />
                {/* <Route exact path="*" component={pageNotFound} /> */}
              </HashRouter>
            </div>
          </Router>
  );
}

export default App;
