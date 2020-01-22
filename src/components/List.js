import React, { Component } from 'react';
import api from '../api';
import ListItem from './ListItem';

export class List extends Component {

    state ={
        contacts: [],
        filter: '',
        isLoading: false,
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllContacts().then(contacts => {
            this.setState({
                contacts: contacts.data.data,
                isLoading: false,
            })
        })
    }

    async deleteContact(_id){
        if (window.confirm("Delete this contact?")) {
            await api.deleteContactById(_id)
            .then(
                alert("Deleted!"),
                window.location.reload(false),
            )
            .catch(
                alert("Oops! Something went wrong!"),
            )
        } 
    }

    //NOT DONE
    editContact() {
        console.log("edit");
        window.alert("Edit. Good try, bud.");
    }


    render() {
        const contacts = this.state.contacts;

        const contactsList = contacts.map(contact =>(
            <ListItem
                key={contact._id}
                id={contact._id}
                name={contact.name}
                surname={contact.surname}
                email={contact.email}
                onClickDelete={this.deleteContact}
                onClickEdit={this.editContact}
            />
        ));


        return (
            <div className="list">
                <h2>Contacts</h2>
                {contactsList}
            </div>
        )
    }
}
