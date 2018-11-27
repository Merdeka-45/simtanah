import React, { Component } from 'react';
import Hexagons from './components/Hexagons';
import Profile from './components/pages/Profile';
import Layanan from './components/pages/Layanan';
import Aduan from './components/pages/Aduan';
import Informasi from './components/pages/Informasi_Spasial';
import Kontak from './components/pages/Kontak';
import Galeri from './components/pages/Galeri';
import Login from './components/pages/Login';
import Unduh from './components/pages/Unduh';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: false
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="sim-tanah">
            <Switch>
              <Route exact path="/" component={Hexagons}/>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/layanan" component={Layanan} />
              <Route exact path="/aduan" component={Aduan} />
              <Route exact path="/informasi" component={Informasi} />
              <Route exact path="/kontak" component={Kontak} />
              <Route exact path="/galeri" component={Galeri} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/unduh" component={Unduh} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
