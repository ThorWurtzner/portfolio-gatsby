import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "./AboutMe.scss";

export default function AboutMe() {
    

    return (
        <section className='aboutMe' id="aboutMe">
            <StaticImage className="aboutMe__penguin" src='../../images/aboutme.png' alt='penguin pencil' placeholder='blurred'/>
            <StaticImage id="aboutMe__penguinMobile" src='../../images/penguinMobile.png' alt='penguin pencil' placeholder='blurred'/>
            <div className='aboutMe__content'>
                <div className='aboutMe__portraitWrapper'>
                    <StaticImage className='portrait' src='../../images/portrait.png' alt='portrait' placeholder='blurred'/>
                    <p>Thor Würtzner</p>
                    <p>Web Developer <br/> Roskilde Technical College</p>
                    <p>thorwurtzner@gmail.com</p>
                    <p>Aarhus - Denmark</p>
                </div>

                <div className='aboutMe__content__inner'>
                    <h2>Hey again!</h2>
                    <p>So, I'm a developer living in Aarhus, Denmark. But originally from Copenhagen. <br /> I used to sell a massive amount of suits before all of this developer stuff - in fact I was the top seller of the brand one month! <br/> But yeah, because of that I make sure to never let my customers or partners leave dissatisfied. I really enjoy creating responsive websites with optimal user experience that achieves your goals as a business. Not only do I make sure your site reaches the widest audience possible, I make it look damn good as well.</p>
                    <h2>Some of my illustrations and designs:</h2>
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
