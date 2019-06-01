import React, { Component } from 'react';
import { Label, FormGroup, Button, Input, Jumbotron } from 'reactstrap';

class Profile extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h2>Profile</h2>
            <p>Name: </p>
            <Input type="text" name="contact1" id="contact1" placeholder="Contact Number 1" value="testName" />
            <p>Email: </p>
            <Input type="text" name="contact1" id="contact1" placeholder="Contact Number 1" value="testEmail@gmail.com" />
            <p>Phone: </p>
            <Input type="text" name="contact1" id="contact1" placeholder="Contact Number 1" value="1234567890" />
            <Button>Update</Button>
        </Jumbotron>
      </div>
    );
  }
}

export default Profile;
