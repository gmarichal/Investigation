import React, { Component } from 'react';
import './header.css';


class Header extends Component {
    constructor(props) {
        super(props);
        this.headerTitle = props.headerTitle;
        this.imgPath     = props.imgPath;

    }

    render() {
        return (
            <div>
          <nav className="notesHeader navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <img className="mr-5" src={this.imgPath} alt="" width="72" height="72"></img>
            <a className="navbar-brand" href='/'>{ this.headerTitle }</a>
            
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Institución<span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#activities">Actividades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Galeria</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contacto</a>
                </li>
            </ul>
        
        </nav>
        <div>
        <img className='img-fluid w-100' src="http://www.liceociei.edu.uy/institucion/Liceo/fullsize/3.jpg" alt="img_liceo"/>


        </div>

        </div>
        

        )

    }

}

export default Header;