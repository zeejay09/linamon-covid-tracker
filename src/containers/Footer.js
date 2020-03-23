import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <p className="footer-copyright">&copy; {(new Date().getFullYear())} <a id="credits" rel="noopener noreferrer" href="http:\\www.jeexpoy.com" target="_blank">Jeff Zeejay</a> &#10084;&#65039;</p>
    )
}

export default Footer;
