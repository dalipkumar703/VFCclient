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
class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.addCheckbox=this.addCheckbox.bind(this);
    this.state = {
      text: "Select the best contestant?",
      checkboxText1: " ",
      checkboxText2: " ",
      checkboxText3: " ",
      checkboxText4: " "
    };
  }
  addCheckbox(){
     
  }
  handleChange(e,context) {
    if(context==='text'){
    this.setState({text: e.target.value});
    }
    else if(context==='checkboxText1') {
    this.setState({checkboxText1: e.target.value});
    }
    else if(context==='checkboxText2'){
      this.setState({checkboxText2: e.target.value});
    }
    else{
      this.setState({checkboxText3: e.target.value});
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
                  <Checkbox inline>
                    <FormControl
                      type="text"
                      value={
                        this.state.checkboxText1 === " "
                          ? "Option 1"
                          : this.state.checkboxText1
                      }
                      placeholder="Option 1"
                      onChange={(e)=>this.handleChange(e,'checkboxText1')}
                    />
                  </Checkbox>
                 <br />

                  <Checkbox inline>
                    <FormControl
                      type="text"
                      value={
                        this.state.checkboxText2 === " "
                          ? "Option 2"
                          : this.state.checkboxText2
                      }
                      placeholder="Option 2"
                      onChange={(e)=>this.handleChange(e,'checkboxText2')}
                    />
                  </Checkbox>
                 <br />
                  <Checkbox inline>
                    <FormControl
                      type="text"
                      value={
                        this.state.checkboxText3 === " "
                          ? "Option 3"
                          : this.state.checkboxText3
                      }
                      placeholder="Option 3"
                      onChange={(e)=>this.handleChange(e,'checkboxText3')}
                    />
                  </Checkbox><Button bsStyle="primary" onClick={this.addCheckbox}>   <Glyphicon glyph="plus" /></Button>&nbsp;
                  <Button bsStyle="primary">   <Glyphicon glyph="minus" /></Button>
                </FormGroup>
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
