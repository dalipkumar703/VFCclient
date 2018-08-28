import React from 'react';
import {Grid,Row,Col,Thumbnail,Button} from 'react-bootstrap';
class AskVote extends React.Component {
  constructor(props){
    super(props);

  }
  createVote(){
    this.props.history.push('voting-form-create');
  }
  render() {
    return (
      <Grid>
      <Row>
        <Col xs={12} md={6}>
          <Thumbnail src="../client/images/party-09.jpg" alt="242x200">
            <h3>Vote for Invite participant on party.</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Create</Button>

            </p>
          </Thumbnail>
        </Col>
        <Col xs={12} md={6}>
          <Thumbnail src="../client/images/top-contestant.jpg" alt="242x200">
            <h3>Vote for contestant ranking.</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" onClick={this.createVote.bind(this)}>Create</Button>
            </p>
          </Thumbnail>
        </Col>
        </Row>
        <Row>
        <Col xs={12} md={6}>
          <Thumbnail src="../client/images/something-new.jpg" alt="242x200">
            <h3>Something new to vote.</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary" >Create</Button>

            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
    )
  }

}
export default AskVote;
