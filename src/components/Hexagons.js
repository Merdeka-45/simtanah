import React, { Component } from 'react';
import Hexa from './Hexa';
import Header from './Header';
import { Link } from 'react-router-dom';

class Hexagons extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="container-fluid landing-page-simtanah">
                    <div className="row">
                        <div className="col-xl-12 hexa-responsive">
                            <Link to="/">
                                <Hexa
                                    color = '#009543'
                                    text = 'BERANDA'
                                />
                            </Link>
                            <Link to="/profile">
                                <Hexa
                                    color = '#029142'
                                    text = 'PROFIL' 
                                />
                            </Link>
                            <Link to="/layanan">
                                <Hexa
                                    color = '#058c41'
                                    text = 'PELAYANAN' 
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="row row-2">
                        <div className="col-xl-12">
                            <Link to="/aduan">
                                <Hexa
                                    color = '#037234'
                                    text = 'PENGADUAN' 
                                />
                            </Link>
                            <Link to="/unduh">
                                <Hexa
                                    color = '#066d33'
                                    text = 'UNDUH' 
                                />
                            </Link>
                            <Link to="/galeri" className="link-responsive">
                                <Hexa
                                    color = '#086832'
                                    text = 'GALERI' 
                                />
                            </Link>
                            <Link to="/informasi" className="link-responsive--2">
                                <Hexa
                                    color = '#0c6834'
                                    text = 'INFORMASI SPASIAL' 
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="row row-2 last-row">
                        <div className="col-xl-12">
                            <Link to="/kontak">
                                <Hexa
                                    color = '#024921'
                                    text = 'KONTAK' 
                                />
                            </Link>
                            <Link to="/login">
                                <Hexa
                                    color = '#044420'
                                    text = 'LOGIN' 
                                />
                            </Link>
                            <Link to="/galeri" className="link-responsive--1">
                                <Hexa
                                    color = '#064421'
                                    text = 'GALERI' 
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Hexagons;