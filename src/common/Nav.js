import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from './favicon.png';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand"><img className="logo" style={{ width: '40px' }} src={Logo} alt="Musicguru" /> Music Guru</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home"><i className="fas fa-home"></i>Home <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/search"><i className="fas fa-search"></i>Search <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
