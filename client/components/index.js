import React from 'react'
import NavBar from './navbar';
import Main from './router';
import {BrowserRouter} from 'react-router-dom';
import AlertBox from './Alert';
import {Provider} from 'react-redux';
import store from '../store';
import history from './history';
const App=()=>{
  return (
    <Provider store={store}>
    <BrowserRouter history={history}>
    <div>
    <NavBar/>
    <AlertBox />
    <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
