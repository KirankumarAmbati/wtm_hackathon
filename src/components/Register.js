import React, { Component } from 'react';
import { Form, FormGroup, Button, Input, Jumbotron } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1>Registration</h1>
            <Form>
                <FormGroup>
                    {/* <Label for="name">Name: </Label> */}
                    <Input type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="email">Email: </Label> */}
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="phone">Phone: </Label> */}
                    <Input type="text" phone="phone" id="phone" placeholder="Phone" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="password">Password: </Label> */}
                    <Input type="text" password="password" id="password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="confirmPassword">Confirm Password: </Label> */}
                    <Input type="text" password="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
                </FormGroup>
                <Button>Register</Button>
            </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default Register;
