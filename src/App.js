import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-5">
            <div className="row">
              <div className="col-xl-12">
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
                <div className="hexagon">
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
                <div className="hexagon">
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
