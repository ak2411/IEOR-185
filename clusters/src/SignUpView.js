import React, { Component } from 'react';
import {Jumbotron, Grid, Row, Col, Button} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

class SignUpView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      joinRequests: []
    }
    this._addJoinRequest = this._addJoinRequest.bind(this);
  }

  _createAccount(_email, _password, _firstName, _lastName, _dob, _gender) {
    let request = {
      email: _email,
      password: _password,
      firsName: _firstName,
      lastName: _lastName,
      dob: _dob,
      gender: _gender
    }

    console.log('Create Account request: ' + JSON.stringify(request));
    this.setState({
      joinRequests: this.state.joinRequests.concat([request])
    });
  }


  render() {

    const RedirectButton = () => (
    <Route render={({ history}) => (
      <Button
        className="btn btn-7"
        bsSize="lg"
        type="button"
        onClick={() => { history.push('/home') }}
      >
        Request to Join
      </Button>
    )} />
  );


    return(
      <div>
        <Jumbotron className="banner-background">
          <div className="light-cover">
          <Grid className="grid-banner">
            <Row>
              <Col md={6} mdOffset={3} sm={8} smOffset={2}>
                <h1 className="text-white">Join Request</h1>
                <SignUpForm addJoinRequest={this._addJoinRequest}/>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col md={6} mdOffset={3} sm={8} smOffset={2}>
              <p className="text-white lead">Or join the network</p>
              <RedirectButton/>
              </Col>
            </Row>
          </Grid>
          </div>
        </Jumbotron>
        <Footer/>
      </div>
    );
  }
}

export default SignUpView;
