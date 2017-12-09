import React, { Component } from 'react';
import {Form, FormGroup, FormControl, Button, Checkbox} from 'react-bootstrap';

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
    this._onTogglePassword = this._onTogglePassword.bind(this);
    this._logIn = this._logIn.bind(this);
  }

  _onTogglePassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  _logIn(event){
    event.preventDefault(); // prevents reload of the page
    console.log("_logIn");

    if (this._email.value || this._password.value) {
      let username = this._email.value.trim();
      let password = this._password.value.trim();

      // verify credentials


      alert('Success');
      // Clear values
      this._email.value = '';
      this._password.value = '';

    } else {
      alert('Please fill all the required fields.');
    }
  }

  render() {

    return (
    <Form onSubmit={this._logIn}>
      <FormGroup
        controlId="username"
      >
        <FormControl
          type="email"
          name="email"
          placeholder="Email"
          inputRef={c => this._email = c}
          required
        />
      </FormGroup>
      <FormGroup
        controlId="password"
      >
        <FormControl
          type={!this.state.showPassword ? "password" : "text"}
          name="password"
          placeholder="Password"
          inputRef={c => this._password = c}
          autoComplete="new-password"
          required
        />
        <Checkbox className="text-white" ref="modalCheckbox" onClick={this._onTogglePassword}>
          Show
        </Checkbox>
        <FormControl.Feedback />
      </FormGroup>
      <Button
        className="btn btn-7"
        bsSize="lg"
        type="submit"
      >
        Log in
      </Button>
    </Form>
  );
  }

}

export default LoginForm;
