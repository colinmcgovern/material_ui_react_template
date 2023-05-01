import React, { Component } from 'react';
import MainRoutes from './components/MainRoutes' 
import NavBar from './components/NavBar'

class Main extends Component {

  render(){

    return(
      <div className="main-app">
        <NavBar/>
        <MainRoutes className="MainRoutes"/>
      </div>
    );
  }

};

export default Main;
