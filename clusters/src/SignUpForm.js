import React, { Component } from 'react';
import {Checkbox, Form, FormGroup, FormControl, Button} from 'react-bootstrap';


class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      gender: ''
    }
    this._onTogglePassword = this._onTogglePassword.bind(this);
    this._submitJoinRequest = this._submitJoinRequest.bind(this);
  }

  _onTogglePassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  _onChangeGender(event) {
    this.setState({ gender: event.target.value });
  }

  _submitCreateAccount(event) {
    event.preventDefault(); // prevents reload of the page
    console.log('Creating account...');
    if (!this._firstName.value || !this._lastName.value || (this.state.gender === '') ||
    !this._dob.value || !this._email.value || !this._password.value) {
      alert('Please provide all the data to sign up');
      return;
    } else if (this._password.value.trim().includes(" ")) {
      alert('Please submit 1 word password');
      return;
    }

    // Check if username is used



    // Create Account
    this.props.createAccount(
      this._email.value,
      this._password.value
      this._firstName.value,
      this._lastName.value,
      this._dob.value,
      this.state.gender
    );
    // Clear values
    this._firstName.value = '';
    this._lastName.value = '';
    this._dob.value = undefined;
    this._gender.value = undefined;
    this._email.value = '';
    this._password.value = '';
    // Reset states
    this.setState({
      showPassword: false,
      email: ''
    });
  }

  render() {
    return(
              <Form onSubmit={this._submitJoinRequest}>
                <FormGroup
                  controlId="companyNameInput"
                >
                  <FormControl
                    type="text"
                    name="first name"
                    placeholder="First Name"
                    inputRef={c => this._firstName = c}
                    required
                  />
                </FormGroup>
                <FormGroup
                  controlId="usernameInput"
                >
                  <FormControl
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    inputRef={c => this._lastName = c}
                    required
                  />
                </FormGroup>
                <FormGroup
                  controlId="usernameInput"
                >
                  <FormControl
                    type="date"
                    name="Date of birth"
                    placeholder="Date of birth"
                    min="1900-01-01"
                    inputRef={c => this._dob = c}
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formGenderSelect">
                  <FormControl componentClass="select" placeholder="Gender" onChange={this._onChangeGender}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </FormControl>
                </FormGroup>
                <FormGroup
                  controlId="emailInput"
                >
                  <FormControl
                    type="email"
                    name="email"
                    placeholder="email"
                    inputRef={c => this._email = c}
                    required
                  />
                </FormGroup>
                <FormGroup
                  controlId="passwordInput"
                >
                  <FormControl
                    type={!this.state.showPassword ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                    inputRef={c => this._password = c}
                    autoComplete="new-password"
                    required
                  />
                  <Checkbox ref="modalCheckbox" onClick={this._onTogglePassword}>
                    Show
                  </Checkbox>
                  <FormControl.Feedback />
                </FormGroup>
                <Button
                  className="btn btn-7"
                  bsSize="lg"
                  type="submit"
                >
                  Join
                </Button>
              </Form>
    );
  }
}
export default SignUpForm;
