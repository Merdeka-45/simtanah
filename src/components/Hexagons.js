import React, { Component } from 'react';
// import Hexa from './Hexa';
import Header from './Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faArchway } from '@fortawesome/free-solid-svg-icons';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

class Hexagons extends Component{
    constructor(){
        super();
        this.state = {
            menu : [
                {
                    id: 1,
                    color: '#009543',
                    text: 'BERANDA',
                    link: '',
                    faicon: <FontAwesomeIcon icon={faHome}/>
                },
                {
                    id: 2,
                    color: '#029142',
                    text: 'PROFIL',
                    link: 'profile',
                    faicon: <FontAwesomeIcon icon={faUserTie}/>
                },
                {
                    id: 3,
                    color: '#058c41',
                    text: 'PELAYANAN',
                    link: 'layanan',
                    faicon: <FontAwesomeIcon icon={faUserCircle}/>
                },
                {
                    id: 4,
                    color: '#037234',
                    text: 'PENGADUAN',
                    link: 'aduan',
                    faicon: <FontAwesomeIcon icon={faArchway}/>
                },
                {
                    id: 5,
                    color: '#066d33',
                    text: 'UNDUH',
                    link: 'unduh',
                    faicon: <FontAwesomeIcon icon={faCloudDownloadAlt}/>
                },
                {
                    id: 6,
                    color: '#086832',
                    text: 'GALERI',
                    link: 'galeri',
                    faicon: <FontAwesomeIcon icon={faImages}/>
                },
                {
                    id: 7,
                    color: '#0c6834',
                    text: 'INFORMASI SPASIAL',
                    link: 'informasi',
                    icon: <FontAwesomeIcon icon={faInfoCircle}/>
                },
                {
                    id: 8,
                    color: '#024921',
                    text: 'KONTAK ',
                    link: 'kontak ',
                    faicon: <FontAwesomeIcon icon={faPhoneSquare}/>
                },
                {
                    id: 9,
                    color: '#044420',
                    text: 'LOGIN',
                    link: 'login',
                    faicon: <FontAwesomeIcon icon={faSignInAlt}/>
                },
               
            ]
        }
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="container-fluid landing-page-simtanah">
                    <div className="row">
                        <div className="col-md-12 col-xl-12">
                            <ul id="hexGrid">
                                {this.state.menu.map(list_menu => (
                                    <li className="hex" key={list_menu.id}>
                                        <div className="hexIn">
                                            <Link to={list_menu.link} className="hexLink" style={{backgroundColor:list_menu.color}}>
                                                {/* <img src={pict} alt=""/> */}
                                                {list_menu.faicon}
                                                <p>{list_menu.text}</p>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Hexagons;