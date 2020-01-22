import React, { Component } from 'react';
import api from '../api';
import Arrow from '../assets/arrow.svg';

export class AddContactForm extends Component{

    state = {
        name: '',
        surname: '',
        email: '',
        isShowing: false,
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onClick = (e) => {
        if(!this.state.isShowing){
          this.setState({
            isShowing: true,
          });
        }
        else{
          this.setState({
            isShowing: false,
          });
        }
      }

    onSubmit = async () => {
        const { name, surname, email } = this.state
        const payload = { name, surname, email }

        await api.addContact(payload)
        .then(res => {
            window.alert(`Contact saved!`)
            this.setState({
                name: '',
                surname: '',
                email: '',
            })
        });
    }

    render(){
        return(
            <>
                <div className="formHeader" onClick={this.onClick}>  
                    <h2>Add new contact</h2>    
                    {this.state.isShowing && <img className="transformedArrow" alt="toggleArrow" src={Arrow}></img>}
                    {!this.state.isShowing && <img className="arrow" alt="toggleArrow" src={Arrow}></img>}
                </div>

                {this.state.isShowing &&

                    <form onSubmit={this.onSubmit} className="addContactForm">
                
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.onChange} 
                            placeholder="Name"
                            aria-label="Name"
                        />
                
                        <input 
                            type="text" 
                            name="surname" 
                            value={this.state.surname} 
                            onChange={this.onChange} 
                            placeholder="Surname"
                            aria-label="Surname"
                        />
                
                        <input 
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.onChange} 
                            placeholder="Email"
                            aria-label="Email"
                        />
                
                        <input 
                            type="submit" 
                            value="Add Contact" 
                            className="submitButton"
                        />
    
                    </form>

                }
            </>
        );    
    }
}