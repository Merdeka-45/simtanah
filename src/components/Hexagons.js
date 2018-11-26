import React, { Component } from 'react';
import Hexa from './Hexa';

class Hexagons extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return(
            <div className="container landing-page-simtanah">
                <div className="row">
                    <div className="col-xl-12">
                        <Hexa
                            color = '#009543'
                            text = 'BERANDA' 
                        />
                        <Hexa
                            color = '#029142'
                            text = 'PROFIL' 
                        />
                        <Hexa
                            color = '#058c41'
                            text = 'PELAYANAN' 
                        />
                    </div>
                </div>
                <div className="row row-2">
                    <div className="col-xl-12">
                        <Hexa
                            color = '#037234'
                            text = 'PENGADUAN' 
                        />
                        <Hexa
                            color = '#066d33'
                            text = 'UNDUH' 
                        />
                        <Hexa
                            color = '#086832'
                            text = 'GALERI' 
                        />
                        <Hexa
                            color = '#0c6834'
                            text = 'INFORMASI SPASIAL' 
                        />
                    </div>
                </div>
                <div className="row row-2">
                    <div className="col-xl-12">
                        <Hexa
                            color = '#024921'
                            text = 'KONTAK' 
                        />
                        <Hexa
                            color = '#044420'
                            text = 'LOGIN' 
                        />
                        <Hexa
                            color = '#064421'
                            text = 'GALERI' 
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hexagons;