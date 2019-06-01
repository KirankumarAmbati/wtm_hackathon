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
          <NavbarBrand href="/">IGNITE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/emergency">Emergency Contacts</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/help">Help</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">Profile</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}