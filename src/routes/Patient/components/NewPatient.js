import React, { Component } from 'react'
import { Col, Form, FieldGroup, FormControl, Checkbox, Radio, FormGroup, ControlLabel, Button, HelpBlock} from 'react-bootstrap'

class NewPatient extends Component {

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  getValidationState() {
    const length = this.state.firstName.length;
    if (length > 1) return 'success';
    else if (length > 5) return 'warning';
    else if (length >= 0) return 'error';
  }

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  };

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  };

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  };

  submit() {
    alert(this.state.firstName + ' - ' + this.state.lastName + ' - ' + this.state.email);
  }

  render() {
    return (
      <Form horizontal>
        <Col smOffset={2} sm={10} style={{paddingLeft: '0px'}}>
          <h2>Create Patient</h2>
        </Col>
        <FormGroup
          controlId="formFirstName"
          validationState={this.getValidationState()}
        >
          <Col componentClass={ControlLabel} sm={2}>
            First Name:
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.firstName}
              placeholder="Enter First Name"
              onChange={this.handleFirstNameChange}
            />
          </Col>
        </FormGroup>
        <FormGroup
          controlId="formLastName"
        >
          <Col componentClass={ControlLabel} sm={2}>
            Last Name:
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.lastName}
              placeholder="Enter Last Name"
              onChange={this.handleLastNameChange}
            />
          </Col>
        </FormGroup>
        <FormGroup
          controlId="formEmail"
        >
          <Col componentClass={ControlLabel} sm={2}>
            Email Address:
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.email}
              placeholder="Enter Email"
              onChange={this.handleEmailChange}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.submit}>
              Submit Patient
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

module.exports = NewPatient
