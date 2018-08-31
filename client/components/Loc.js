import React from "react";
import {Typeahead,Control} from 'react-bootstrap-typeahead';
import {FormGroup,Button} from 'react-bootstrap';
import updateUser from '../api/update-city';
import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import 'babel-polyfill';//remove
import store from '../store';
import {AlertUpdate} from '../actions/update';//rename file

// Get the current location.
class Loc extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city:''
    };


  }
  updateCity(){
    console.log("city",this.state.city[0]);
    let city={
      user_name:"Dalip123",
      email:"dalipkumar703@gmail.com",
      city:this.state.city[0]
    };
    //modify catch
    updateUser(city).then((res)=>{
      console.log("res",res);

    });
    store.dispatch(AlertUpdate(!store.getState().show));
    console.log("redirect time");
this.props.history.push('/');
  }
  render() {
    return (
    <div className="row">
      <div className="col-md-offset-4 col-md-4">
        <Typeahead
          labelKey="name"
          multiple={false}
          options={[
            'Delhi',
            'Mumbai'
          ]}
          placeholder="Choose a state..."
          onChange={(selected)=>{
            console.log("onchange");
            this.setState({city:selected});

          }}

        />

         <Button bsStyle="primary" style={{marginTop:'15px'}} onClick={this.updateCity.bind(this)}>Submit</Button>
        &nbsp; <Button bsStyle="danger" style={{marginTop:'15px'}} >Back</Button>
        </div>




  </div>
    );
  }

}





export default Loc;
