import React, { Component } from 'react';
import './Footer.css';
import ContactArea from './ContactArea/ContactArea';


class Footer extends Component {
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col"></div>
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