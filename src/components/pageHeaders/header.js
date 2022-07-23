import React from "react";
import './header.css';

export const Header = ({ pageName }) => {
    return ( 
        <div className='page-header'>
            <h1>{pageName}</h1>
         </div>
     );
};