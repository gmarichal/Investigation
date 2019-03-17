import React, { Component } from 'react';
import './Footer.css';
import ContactArea from './ContactArea/ContactArea';


class Footer extends Component {
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="footerMessage col">
                        <h1>Nuestra Propuesta</h1>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <ContactArea />
                    </div>
                </div>
            </div>
        

        )

    }

}

export default Footer;