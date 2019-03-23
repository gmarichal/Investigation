import React, { Component } from 'react';
import './ContactArea.css';

var nodemailer = require('nodemailer');






class ContactArea extends Component {

    constructor(props){
        super(props);
        this.state = {
            contactName: '',
            contactEmail: '',
            contactQuestion: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({contactName: event.target.value});
      }

    handleEmailChange(event) {
        this.setState({contactEmail: event.target.value});
      }

    handleQuestionChange(event) {
        this.setState({contactQuestion: event.target.value});
      }
    
    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.contactName + " " + this.state.contactEmail + " " + this.state.contactQuestion);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'marichalgaston@gmail.com',
              pass: 'Bichofruta24'
            }
          });
          
          var mailOptions = {
            from: 'marichalgaston@gmail.com',
            to: 'marichalgaston@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
    
        
        
        
        event.preventDefault();
      }

    
    render() {
        return (
            <div>
                <form action='/' onSubmit={this.handleSubmit}>
                    <legend>CONTACTO</legend>
                    <div className="form-group">
                        <label for="contactName">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control"
                            id="contactName" 
                            placeholder="Ingresa tu nombre"
                            value={this.state.contactName}
                            onChange={this.handleNameChange}
                        />
                        <label for="contactEmail">E-mail</label>
                        <input 
                            type="mail"
                            className="form-control"
                            id="contactEmail"
                            placeholder="Ingresa tu Email"
                            value={this.state.contactEmail}
                            onChange={this.handleEmailChange}
                        />
                        <label for="contactDescription">Tu consulta</label>
                        <textarea 
                            className="form-control"
                            id="exampleTextarea"
                            rows="3" 
                            onChange={this.handleQuestionChange}
                            value={this.state.contactQuestion}/>
                    </div>
                    <input 
                        id="sendMail"
                        type="Submit"
                        className="btn btn-primary"
                        value='Enviar'
                    />
                </form>
            </div>      

        )

    }


}

export default ContactArea;