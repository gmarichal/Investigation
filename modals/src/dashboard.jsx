import React, { Component } from "react";
import ReactDOM from "react-dom";
import './dashboard.css';
import Modal from './Modal';

class Dashboard extends Component {
    
    Dashboard() {
        //super(prop);
        this.state = { 
            show: false 
        };
    }
    
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show}  handleClose={this.hideModal} >
            <h1>Modal Title</h1>
            <p>Modal description</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </main>
    );
  }
}


const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);
