import React from "react";

export const DeleteButton = ({ id, handleDelete }) => {

    return (
        <button className='delete-button' onClick={() => {handleDelete(id)}}>X</button>
    )
}