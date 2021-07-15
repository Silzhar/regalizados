import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router'

import Navbar from './components/Navbar'


import Authenticate from './components/Authenticate'
import Promotions from './components/Promotions'
import MenuMobile from './components/MenuMobile'

import {
  selectIsAuthenticated,
  selectIsLoading,
  checkmysession,

} from "./features/authenticateSlice";

import './App.css'

import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Deportes from './components/Deportes'
import Freak from './components/Freak'
import Tecnologia from './components/Tecnologia'
import Cultura from './components/Cultura'
import Experiencias from './components/Experiencias'
import Infantil from './components/Infantil'
import Hogar from './components/Hogar'
import Movilidad from './components/Movilidad'
import Fashion from './components/Fashion'
import Belleza from './components/Belleza'


function App() {
 const dispatch = useDispatch()
 const myIsLoading = useSelector(selectIsLoading);
 

  useEffect(() => {
    dispatch(checkmysession());
  }, []);

// if(myIsLoading){
//   return <h1>Is loading...</h1>
// }


  return (
    <div className="App">
      <Router>
      <Navbar/>
      {/* <MenuMobile/> */}
        <Switch>
          <React.Fragment>
          <Route exact path="/user" render={() => <Authenticate />} />  
          <Route exact path="/promotions" render={() => <Promotions />} /> 
          <Route exact path="/deportes" render={() => <Deportes/>} /> 
          <Route exact path="/freak" render={() => <Freak/>} />
          <Route exact path="/tecnologia" render={() => <Tecnologia/>} /> 
          <Route exact path="/cultura" render={() => <Cultura/>} /> 
          <Route exact path="/experiencias" render={() => <Experiencias/>} /> 
          <Route exact path="/infaltil" render={() => <Infantil/>} />   
          <Route exact path="/hogar" render={() => <Hogar/>} /> 
          <Route exact path="/movilidad" render={()=> <Movilidad />}  />
          <Route exact path="/fashion" render={() => <Fashion />} />
          <Route exact path="/belleza" render={() => <Belleza />} />
          <Route exact path="/" render={() => <Homepage />} />
          </React.Fragment>
        </Switch>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
