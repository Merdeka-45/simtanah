import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  render() {
    return (
      <div>
          <Navbar expand="md" className="navbar-2-sim">
            <NavbarBrand href="/"> 
              SISTEM INFORMASI PERTANAHAN
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <FontAwesomeIcon icon={faBars} />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">BERANDA</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profil">PROFIL</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/layanan">PELAYANAN</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/aduan">PENGADUAN</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/unduh">UNDUH</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/galeri">GALERI</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/informasi">INFORMASI SPASIAL</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/kontak">KONTAK</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">LOGIN</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    )
  }
}

export default Header;
