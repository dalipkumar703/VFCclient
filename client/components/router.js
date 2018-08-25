import {Switch,Route} from 'react-router-dom';
import React from 'react';
import Loc from './Loc';
import Home from './home';
const Main=()=>{
  return (
    <Switch>
       <Route path='/location' component={Loc}/>
       <Route exact={true} path='/' component={Home}/>
     </Switch>
  )

}
export default Main;
