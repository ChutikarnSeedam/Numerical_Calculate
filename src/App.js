import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './App.css';
import index from './components/index';
import home from './components/Home';
import login from './components/Login';
import Bisection from './components/roots_of_equation/Bisection';
import root_of_equation_main from './components/roots_of_equation/Root-of-quation-main';
import newton_raphson from './components/roots_of_equation/Newton_Raphson';
import false_position from './components/roots_of_equation/False_Position';
import onepoint from './components/roots_of_equation/Onepoint_Iteration';
import Bisection2 from './components/roots_of_equation/Bisection2';

class App extends Component {
  render() {
    return (
        <div>
            <Routes>
              <Route exact path='/' Component={index}/>
              <Route path='/login' Component={login}/>
              <Route path='/home' Component={home}/>
              <Route path='/bisection' Component={Bisection}/>
              <Route path='/bisection2' Component={Bisection2}/>
              <Route path='/false-position' Component={false_position} />
              <Route path='/root-of-equation' Component={root_of_equation_main}/>
              <Route path='/newton-raphson' Component={newton_raphson}/>
              <Route path='/onepoint-iteration' Component={onepoint} />
            </Routes> 
        </div>
    );
  }
}
export default App;
