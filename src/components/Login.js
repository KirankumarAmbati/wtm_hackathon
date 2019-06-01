import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Jumbotron, Button } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    {/* <Label for="email">Email: </Label> */}
                    <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="password">Password: </Label> */}
                    <Input type="password" name="password" id="password" placeholder="Password" />
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default Login;
