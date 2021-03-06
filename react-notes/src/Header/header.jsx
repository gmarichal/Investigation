import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.headerTitle = props.headerTitle;
        this.headerImgPath = props.headerImgPath
    }

    render() {
        return (
            <div>
          <nav className="notesHeader navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <img className="mr-5" src={this.headerImgPath} alt="" width="72" height="72"></img>
            <a className="navbar-brand" href='/'>{ this.headerTitle }</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Institución<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#activities">Actividades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#photoGallery">Galeria</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#FooterSection">Contacto</a>
                </li>
            </ul>
        
        </nav>
        <div>
        </div>

        </div>
        

        )

    }

}

export default Header;