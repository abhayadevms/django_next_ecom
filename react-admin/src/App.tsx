import React from 'react';
import './App.css';

import { BrowserRouter, Route, Router  } from 'react-router-dom';
import User from './Pages/User';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Menu from './components/Menu';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Route  path={"/"} exact component={User}/>
           <Route  path={"/login"} component={Login}/>
           <Route  path={"/register"} component={Register}/>
      </BrowserRouter>
       
        
       

    

    </div>
     );
    }
      

export default App;
