import React from "react";
import './header.css';

export const Header = ({ pageName }) => {
    if (!pageName) {
        return (
            <div className='page-header'>
                <h1>Dan's - Digi - Diary</h1>
            </div>
        );
    }
    return ( 
        <div className='page-header'>
            <h1>{pageName}</h1>
         </div>
     );
};