import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import { Link} from 'react-router-dom'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <b>THE SAVIOURS</b>
        </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link to="/register" style={{paddingRight: 20}}>Register</Link>
                </NavItem>
                <NavItem>
                    <Link to="/login" style={{paddingRight: 20}}>Login</Link>
                </NavItem>
                <NavItem>
                    <Link to="/emergency" style={{paddingRight: 20}}>Emergency Contacts</Link>
                </NavItem>
                <NavItem>
                    <Link to="/help" style={{paddingRight: 20}}>Help</Link>
                </NavItem>
                <NavItem>
                    <Link to="/profile" style={{paddingRight: 20}}>Profile</Link>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}