import React, { Component } from 'react';
import Hexagons from './components/Hexagons'
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
        <Hexagons />
        {/* <div className="container landing-page-simtanah"> */}
            {/* <div className="row">
              <div className="col-xl-12">
                <div className="hexa" onClick={()=>this.descHex()}>
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>BERANDA</p>
                  </div>
                </div>
                {
                  this.state.isShow ?
                  <div className="desc-hexa" style={{width:this.state.isShow, opacity:this.state.isOpacity}}>
                    <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={()=>this.closeDesc()}/>
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                          <FontAwesomeIcon icon={faHome} />
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                      </div>
                    </div>
                  </div>
                  :null
                }
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>PROFIL</p>
                  </div>
                </div>
                {
                  this.state.isShow ?
                  <div className="desc-hexa" style={{width:this.state.isShow, opacity:this.state.isOpacity}}>
                    <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={()=>this.closeDesc()}/>
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                          <FontAwesomeIcon icon={faHome} />
                          <p> PROFILE
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                      </div>
                    </div>
                  </div>
                  :null
                }
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>PELAYANAN</p>  
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="row row-2">
              <div className="col-xl-12">
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>PENGADUAN</p>
                  </div>
                </div>
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>UNDUH</p>
                  </div>
                </div>
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>GALERI</p>  
                  </div>
                </div>
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>INFORMASI SPASIAL</p>  
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-2">
             <div className="col-xl-12">
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>KONTAK</p>
                  </div>
                </div>
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>LOGIN</p>
                  </div>
                </div>
                <div className="hexa">
                  <div className="content-hexa">
                    <FontAwesomeIcon icon={faHome} />
                    <p>GALERI</p>  
                  </div>
                </div>
              </div>
            </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
