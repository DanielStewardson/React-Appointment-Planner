import React from "react";
import './appointmentDetails.css';

export const AppointmentDetails = ({ appointmentDetails, handleDelete, handleEditAppointment, closeAppointmentDetails }) => {
    return (
        <div className='appointment-details-container'>
                <div className='appointment-details-header'>
                    <h3 className='appointment-details-name'>{appointmentDetails.title}</h3>
                    <button className='close-item-button' onClick={closeAppointmentDetails}>  &#x2715;  </button>
                </div>

                <div className='appointment-details-body'>
                    <div className='appointment-details-item'>
                        <div className='appointment-details-dateAndTime'>
                            <p>Date: {appointmentDetails.date}</p>
                            <p>Time: {appointmentDetails.time}</p>
                        </div>
                    </div>
                    <div className='appointment-details-item'>
                        <h4>Contact</h4>
                        <p>{appointmentDetails.contact}</p>
                    </div>
                    <div className='appointment-details-item'>
                        <h4>Notes</h4>
                        <p>{appointmentDetails.notes}</p>
                    </div>
                </div>

            <div className='appointment-details-footer'>
                <button 
                    className='appointment-details-button edit' 
                    onClick={() => {handleEditAppointment(appointmentDetails.key)}}
                    >
                        Edit appointment
                </button>
                <button 
                    className='appointment-details-button delete' 
                    onClick={() => {handleDelete(appointmentDetails.key)}}
                    >
                        Delete appointment
                </button>
            </div>
        </div>
    )
};