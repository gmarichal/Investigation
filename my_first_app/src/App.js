import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation   from './components/Navigation';
import NewInputForm from './components/NewInputForm';
import { inputs }   from './inputs.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      navTitle: "Bienvenido a la aplicación de tareas",
      inputs
    };
    this.handleAddInputs = this.handleAddInputs.bind(this);

  }

  handleAddInputs(i) {
    this.setState({
      inputs: [...this.state.inputs, i]
    });
  }

  handleRemoveInput(index){
    if(window.confirm('¿Eliminar tarea?')) {
      this.setState({
        inputs: this.state.inputs.filter((e, i) => {
          return i !== index
        })
      })
    }
  }
  
  render() {
    const c_inputs = this.state.inputs.map((input, i) =>  {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{input.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {input.prioridad.toUpperCase()}
              </span>
            </div>
            <div className="card-body">
              <p>{input.descripcion}</p>
              <p><mark>{input.fecha}</mark></p>
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger"
                onClick={this.handleRemoveInput.bind(this, i)}
              >
              Eliminar
              </button>

            </div>
          </div>
        </div>
      )
    }
    )

    return (
      <div className="App">
       <Navigation titulo = {this.state.navTitle} tareas = {this.state.inputs.length}  />
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <NewInputForm onAddInput={this.handleAddInputs}/>
            </div>
            <div className="col-md-8">
            <div className="row">
            {c_inputs}
            </div>
            </div>

            
           </div>
        </div>
       
      
        
      </div>
    );
  }
}

export default App;