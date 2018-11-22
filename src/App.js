import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import './App.css';
// import logo_simtanah from './assets/logo_simtanah.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  library.add(faStroopwafel)

class App extends Component {
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
      <div className="App">
        <Navbar expand="md">
          <NavbarBrand href="/"> 
            {/* <img src={logo_simtanah} className="img-fluid" alt="" /> */}
            SISTEM INFORMASI PERTANAHAN
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">LOGIN</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="container landing-page-simtanah">
            <div className="row">
              <div className="col-xl-12">
                <div className="hexagon hexa-1">
                  <FontAwesomeIcon icon="stroopwafel" />
                </div>
                <div className="hexagon">
                </div>
                <div className="hexagon">
                </div>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-xl-12">
                <div className="hexagon hexa-1">
                </div>
                <div className="hexagon">
                </div>
                <div className="hexagon">
                </div>
                <div className="hexagon">
                </div>
              </div>
            </div>
            <div className="row row-2">
              <div className="col-xl-12">
                <div className="hexagon hexa-1">
                </div>
                <div className="hexagon">
                </div>
                <div className="hexagon">
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
