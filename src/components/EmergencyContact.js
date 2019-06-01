import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';

class EmergencyContact extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h2>Emergency Contact Details</h2>
            <Form>
                <FormGroup>
                    {/* <Label for="contact1">Contact 1: </Label> */}
                    <Input type="text" name="contact1" id="contact1" placeholder="Contact Number 1" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="contact2">Contact 2: </Label> */}
                    <Input type="text" name="contact2" id="contact2" placeholder="Contact Number 2" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="contact3">Contact 3: </Label> */}
                    <Input type="text" name="contact3" id="contact3" placeholder="Contact Number 3" />
                </FormGroup>
                <FormGroup>
                    {/* <Label for="bloodGroup">Blood Group: </Label> */}
                    <Input type="text" name="bloodGroup" id="bloodGroup" placeholder="Blood Group" />
                </FormGroup>
                <Button>Update</Button>
            </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default EmergencyContact;
