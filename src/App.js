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
import Navbar from './components/Navbar';
import Solution_Techniques_main from './components/solotions_of_Linear/main_menu';
import CramerRule from './components/solotions_of_Linear/CramerRule';

class App extends Component {
  render() {
    return (
      <div className={style.Container}>
          <div className={style.navbar}><Navbar/></div>
          <div>
              <Routes>
                <Route exact path='/' Component={index}/>
                <Route path='/login' Component={login}/>
                <Route path='/home' Component={home}/>
                <Route path='/bisection' Component={Bisection}/>
                <Route path='/false-position' Component={false_position} />
                <Route path='/root-of-equation' Component={root_of_equation_main}/>
                <Route path='/newton-raphson' Component={newton_raphson}/>
                <Route path='/onepoint-iteration' Component={onepoint} />
                <Route path='/Cramers-Rule' Component={CramerRule} />
                <Route path='/Gauss-Elimination-Method' Component={onepoint} />
                <Route path='/Gauss-Jordan-Method' Component={onepoint} />
                <Route path='/Metrix-Inversion-method' Component={onepoint} />
                <Route path='/LU-Decomposition-Method' Component={onepoint} />
                <Route path='/Solution-Techniques-main' Component={Solution_Techniques_main} />
              </Routes> 
          </div>
        </div>
    );
  }
}
export default App;
