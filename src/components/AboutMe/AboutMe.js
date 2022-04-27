import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "./AboutMe.scss";

export default function AboutMe() {
    

    return (
        <section className='aboutMe' id="aboutMe">
            <StaticImage className="aboutMe__penguin" src='../../images/aboutme.png' alt='penguin pencil' placeholder='blurred'/>
            <div>
                <StaticImage className='portrait' src='../../images/portrait.jpg' alt='portrait' placeholder='blurred'/>
                <p>Lorem Ipsum dolor set dorlor</p>
            </div>
        </section>
    )
}
