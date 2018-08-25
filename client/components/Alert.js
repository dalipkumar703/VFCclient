import {Alert,Button} from 'react-bootstrap';
import React from  'react';

import store from '../store';
import {connect} from 'react-redux';
import {AlertUpdate} from '../actions/update';
class AlertBox extends React.Component {
  constructor(props){
    super(props);

    this.handleDismiss=this.handleDismiss.bind(this);
    this.state={
      show:false
    }
  }
  handleDismiss(){
store.dispatch(AlertUpdate(!store.getState().show));

  }
  render(){

    if(store.getState().show){
      return(
        <Alert bsStyle="success" onDismiss={this.handleDismiss}>
         <h4>City updated!</h4>
       </Alert>
     );
    }
    else {
      return null;
    }
  }
}
const mapStateToProps=(state)=>{
  console.log("state:",state);
  console.log("todos:",state.show);
  return {
    show:state.show
  }
}
export default connect(mapStateToProps)(AlertBox);
