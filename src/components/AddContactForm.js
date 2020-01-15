import React, { Component } from 'react';

export class AddContactForm extends Component{

    state = {
        name: '',
        surname: '',
        email: '',
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            name: '',
            surname: '',
            email: '',
        });
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render(){
        
        return(
            <form onSubmit={this.onSubmit} className="addContactForm">
                <h2>Add new contact:</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" value={this.state.surname} onChange={this.onChange}/>
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange}/>
                
                <input type="submit" value="Add Contact" className="submitButton"/>
            </form>
        );
    }
}