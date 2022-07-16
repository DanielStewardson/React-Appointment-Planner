import React from "react";
import './contactDetails.css';

export const ContactDetails = ({ contactDetails, handleDelete, handleEditContact }) => {
    return (
        <div className='contact-details-container'>
            <div className='contact-details-content'>
                <div className='contact-details-header'>
                    <h3 className='contact-details-name'>{contactDetails.name}</h3>
                </div>
                <div className='contact-details-body'>
                    <div className='contact-details-item'>
                        <h4>Phone</h4>
                        <p>{contactDetails.phone}</p>
                    </div>
                    <div className='contact-details-item'>
                        <h4>Email</h4>
                        <p>{contactDetails.email}</p>
                    </div>
                    <div className='contact-details-item'>
                        <h4>Notes</h4>
                        <p>{contactDetails.notes}</p>
                    </div>
                </div>
            </div>
            <div className='contact-details-footer'>
                <button 
                    className='contact-details-button edit' 
                    onClick={() => {handleEditContact(contactDetails.name)}}>
                        Edit contact
                </button>
                <button 
                    className='contact-details-button delete' 
                    onClick={() => {handleDelete(contactDetails.name)}}>
                        Delete contact
                </button>
            </div>
        </div>
    )
};
//add edit and delete buttons