import React, { useState } from 'react';
import "./Footer.scss";
import ContactModal from '../ContactModal/ContactModal';

import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
    
    let [display, setDisplay] = useState(false);

    return (
        <footer className='footer'>

            <StaticImage id="footer__penguin" className="footer__penguin" src="../../images/penguin.png" alt="penguin character" placeholder='blurred' />

            <div className='footer__contact'>
                <p>Wanna collaborate on a project?</p>
                {/* <button onClick={() => setDisplay(true)}>Let's go!</button> */}
                <a href="mailto:thorwurtzner@gmail.com">Lets go!</a>
            </div>

            <div className='footer__socialMedia'>
                <a href="https://github.com/ThorWurtzner" target="_blank">
                    <StaticImage src='../../images/icons/github.png' alt='icon' placeholder='blurred' />
                </a>
                <a href="https://www.linkedin.com/in/thor-wurtzner/" target="_blank">
                    <StaticImage src='../../images/icons/linkedin.png' alt='icon' placeholder='blurred' />
                </a>
                <a href="https://dev.to/thorwurtzner" target="_blank">
                    <StaticImage src='../../images/icons/devto.png' alt='icon' placeholder='blurred' />
                </a>
                <a href="https://www.behance.net/thorwrtzner" target="_blank">
                    <StaticImage src='../../images/icons/behance.png' alt='icon' placeholder='blurred' />
                </a>
                <a href="https://dribbble.com/ThorWurtzner" target="_blank">
                    <StaticImage src='../../images/icons/dribbble.png' alt='icon' placeholder='blurred' />
                </a>
            </div>

            <div className="footer__credit">
                <p>Designed by me, and built with Gatsby</p>
            </div>

            {/* <ContactModal display={display} setDisplay={setDisplay} /> */}
        </footer>
    )
}
