import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "./AboutMe.scss";

export default function AboutMe() {
    

    return (
        <section className='aboutMe' id="aboutMe">
            <StaticImage className="aboutMe__penguin" src='../../images/aboutme.png' alt='penguin pencil' placeholder='blurred'/>
            <div className='aboutMe__content'>
                <div className='aboutMe__portraitWrapper'>
                    <StaticImage className='portrait' src='../../images/portrait.png' alt='portrait' placeholder='blurred'/>
                    <p>Thor Würtzner</p>
                    <p>Web Developer - Roskilde Technical College</p>
                    <p>thorwurtzner@gmail.com</p>
                    <p>Currently living in Aarhus - Denmark</p>
                </div>

                <div className='aboutMe__content__inner'>
                    <p>I'm an illustrator as well</p>*

                    <div className='aboutMe__illustrations'>
                        <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/copenhagen.png' alt='' placeholder='blurred'/>
                        <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/avis.png' alt='' placeholder='blurred'/>
                        <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/storage.png' alt='' placeholder='blurred'/>
                        <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/spotify1.png' alt='' placeholder='blurred'/>
                        <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/spotify2.png' alt='' placeholder='blurred'/>
                    </div>
                </div>
            </div>
        </section>
    )
}
