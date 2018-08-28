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
  Checkbox
} from "react-bootstrap";
class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state = {
      text: "Select the best contestant?",
      checkboxText1: " ",
      checkboxText2: " ",
      checkboxText3: " ",
      checkboxText4: " "
    };
  }
  handleChange(e,context) {
    this.setState({ checkboxText1: e.target.value });
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
                    onChange={handleChange()}
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
                      onChange={this.handleChange.bind(this)}
                    />
                  </Checkbox>
                <br>  <br />

                  <Checkbox inline>
                    <FormControl
                      type="text"
                      value={
                        this.state.checkboxText2 === " "
                          ? "Option 2"
                          : this.state.checkboxText2
                      }
                      placeholder="Option 2"
                      onChange={this.handleChange.bind(this)}
                    />
                  </Checkbox>
                <br>  <br />
                  <Checkbox inline>
                    <FormControl
                      type="text"
                      value={
                        this.state.checkboxText3 === " "
                          ? "Option 3"
                          : this.state.checkboxText3
                      }
                      placeholder="Option 3"
                      onChange={this.handleChange.bind(this)}
                    />
                  </Checkbox>
                </FormGroup>
              </form>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Vote;
