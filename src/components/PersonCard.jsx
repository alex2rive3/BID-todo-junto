import './Container.css'
import React, {Component} from 'react';
class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state={
            agePerson: this.props.Age,
        };
    }

    birthday = () =>{
        let agePlusOne = this.state.agePerson+1;
        this.setState({agePerson : agePlusOne });
    };

    render(){
        const {Name, LastName, HairColor}=this.props;
        return(
            <div className="container">
                <h1>{LastName}, {Name}</h1>
                <p>Age: {this.state.agePerson} </p>
                <p>Hair Color: {HairColor}</p>
                <button onClick={this.birthday}>Birthday Button for  {Name} {LastName}</button>
            </div>
        );
    }
    
}
export default PersonCard;