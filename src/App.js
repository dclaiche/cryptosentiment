import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Homepage from './pages/Homepage';
import Comments from './pages/Comments';
import Specific from './pages/Specific';
import General from './pages/General';

function App() {
  const [theRequest, settheRequest] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
      <Router>  
          <div className="App-header">
          <Route path="/" exact>
            <Homepage settheRequest={settheRequest}/>
          </Route>
          <Route path="/specific">
            <Specific/>
          </Route>
          <Route path="/comments">
            <Comments/>
          </Route>
          <Route path="/general" theRequest={theRequest}>
            <General/>
          </Route>
          </div> 
        </Router>
      </header>
    </div>
  );
}

export default App;