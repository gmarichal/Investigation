import React, { Component } from 'react';
import './ContactArea.css';


class ContactArea extends Component {
    
    render() {
        return (
            <div>
                <form action='/'>
                    <legend>CONTACTO</legend>
                    <div className="form-group">
                        <label for="contactName">Nombre</label>
                        <input type="text" className="form-control" id="contactName" placeholder="Ingresa tu nombre"/>
                        <label for="contactEmail">E-mail</label>
                        <input type="mail" className="form-control" id="contactEmail" placeholder="Ingresa tu Email"/>
                        <label for="contactDescription">Tu consulta</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"/>
                    </div>
                    <button id="sendMail" type="submit" className="btn btn-primary" >Enviar</button>
                </form>
            </div>      

        )

    }

}

export default ContactArea;