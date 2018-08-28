import {Switch,Route} from 'react-router-dom';
import React from 'react';
import Loc from './Loc';
import Home from './home';
import AskVote from './create-voting-form';
import Vote from './create-vote';
const Main=()=>{
  return (
    <Switch>
       <Route path='/location' component={Loc}/>
       <Route exact={true} path='/' component={Home}/>
       <Route exact={true} path='/ask/vote/' component={AskVote}/>
       <Route path='/ask/voting-form-create' component={Vote}/>
     </Switch>
  )

}
export default Main;
