import React, {Component } from 'react';
import './Activity.css'

class Activity extends Component {
    constructor(props) {
        super(props);
        this.activityId = props.activityId;
        this.activityTitle = props.activityTitle;
        this.activityDescription = props.activityDescription;
        this.key = props.key;
    

    }

    render() {
       return (
           
            <li key={this.activityId} className="list-group-item d-flex justify-content-between align-items-center">
            <h4>{this.activityTitle}</h4>
            <p>{this.activityDescription}</p>
            <span className="badge badge-pill badge-dark">{this.activityId}</span>
            <span
                onClick={ () => this.handleRemove(this.props.activityId)}
            >&times;</span>
            </li>
       ) 
    }

    
handleRemove(id) {
    alert('Removed: ' + id);
}

}



export default Activity;