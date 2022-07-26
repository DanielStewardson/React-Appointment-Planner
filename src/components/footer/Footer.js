import React from 'react';
import './footer.css';
import gitLogo from './github.png';
import codeIcon from './codecademy-icon.png';
import linkIn from './icons8-linkedin-50.png';

const Footer = () => {
    return ( 
        <div className='footer-container'>
            <h4>Bodged by Dan</h4>
            <div class="footer-social-links"> 
                <a href="https://github.com/DanielStewardson" target="_blank" rel='noreferrer'><img class='social-logo' src={gitLogo} alt='G' /></a>
                <a href='https:www.danielstewardson.com' target="_blank" rel='noreferrer'><img class='social-logo' alt='L' src={linkIn} /></a>
                <a href='https://www.codecademy.com/profiles/DanielStewardson' target="_blank" rel='noreferrer'><img class='social-logo' alt='C' src={codeIcon} /></a>
             </div> 
        </div>
     );
}
 
export default Footer;