import React from 'react';
import deleteIcon from '../assets/delete.svg'

const ListItem = ({name, surname, email, id, onClickDelete, onClickEdit})=> (
    <div className="listItem">
        <div className="contactContent">
            <p>{name}</p>
            <p>{surname}</p>
            <p>{email}</p>
        </div>

        <div className="buttonsDiv">
            <button className="deleteButton" onClick={() => onClickDelete(id)} >
                <img alt="delete button" src={deleteIcon} className="deleteButtonIcon"></img>
            </button>
                    
            <button className="editButton" onClick={() => onClickEdit(id)}>Edit</button>
        </div>                
    </div>  
);

export default ListItem;