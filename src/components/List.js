import React, { Component } from 'react';

export class List extends Component {

    state ={
        contacts: [],
      }
    
    render() {
        return (
            <div className="list">
                <h2>Contacts:</h2>
            </div>
        )
    }
}
