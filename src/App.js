import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserData from './Components/UserData'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/" component = {Home}/>
        <Route path="/UserData" render={props => <UserData {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
