import React from "react";
import {
  Grid,
  Row,
  Col,
  Thumbnail,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
  form,
  Checkbox,
  Glyphicon
} from "react-bootstrap";
import CheckboxDynamic from './checkbox-dynamic';
class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.addCheckbox=this.addCheckbox.bind(this);
    this.removeCheckbox=this.removeCheckbox.bind(this);
    this.state = {
      text: "Select the best contestant?",
      checkboxText:[],
      loop:3
    };
  }
  componentWillMount(){
    let box=[];
    for(let i=0;i<this.state.loop;i++)
    {
       box.push({text:" "});
    }
  this.setState({checkboxText:box});
  }
  addCheckbox(){
    this.setState({ checkboxText: [...this.state.checkboxText, {text:" "}] })
     this.setState({loop:this.state.loop+1});
  }
  removeCheckbox(){
   this.setState({loop:this.state.loop-1});

  }
  handleChange(e,context) {
    e.preventDefault();
    if(context==='text'){
    this.setState({text: e.target.value});
    }
    else{
      const items = this.state.checkboxText;
   items[context].text = e.target.value;

   // update state
   this.setState({
       items,
   });

    }
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={9}>
            <Thumbnail src="../client/images/top-contestant.jpg" alt="242x200">
              <form>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Add Contestant Photo:</ControlLabel>
                  <input
                    type="file"
                    name="Add contestant"
                    accept=".jpg,.png,jpeg"
                    multiple
                  />

                  <FormControl
                    type="text"
                    value={this.state.text}
                    placeholder="Are you joining our event?"
                    onChange={(e)=>this.handleChange(e,'text')}
                  />
                </FormGroup>
                <FormGroup>
                 <CheckboxDynamic loop={this.state.loop} checkboxText={this.state.checkboxText} handleChange={this.handleChange}/>

                </FormGroup>
                <Button bsStyle="primary" onClick={this.addCheckbox}>   <Glyphicon glyph="plus" /></Button>&nbsp;
                <Button bsStyle="primary" onClick={this.removeCheckbox}>   <Glyphicon glyph="minus" /></Button><br/>
                <Button bsStyle="primary">Submit</Button>&nbsp;
                <Button bsStyle="primary">Preview</Button>
              </form>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Vote;
