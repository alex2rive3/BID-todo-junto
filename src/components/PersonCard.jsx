import './Container.css'
import React, {Component} from 'react';
class PersonCard extends Component{
    render(){
        return(
            <div className="container">
                <h1>{this.props.LastName}, {this.props.name}</h1>
                <p>Age: {this.props.Age} </p>
                <p>Hair Color: {this.props.hair}</p>
            </div>
        );
    }
}
export default PersonCard;