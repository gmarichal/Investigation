import React, { Component } from "react";

class NewInputForm extends Component {

    constructor() {
        super();
        this.state = {
           titulo: '',
           descripcion: '',
           prioridad: 'baja',
           fecha: '2019-02-02'
        };
        this.handleInput  = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault(); 
        this.props.onAddInput(this.state);
        this.setState({
            titulo: '',
            descripcion: '',
            prioridad: 'baja',
            fecha: '2019-02-02'
          });
    }

    handleInput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="titulo"
                            value={this.state.titulo}
                            className="form-control"
                            placeholder="Título"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="descripcion"
                            value={this.state.descripcion}
                            className="form-control"
                            placeholder="Descripción"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            value={this.state.prioridad}
                            onChange={this.handleInput}
                            >
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            name="fecha"
                            value={this.state.fecha}
                            className="form-control"
                            placeholder="Fecha"
                            onChange={this.handleInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                </form>
            </div>
        )

    }

}

export default NewInputForm;