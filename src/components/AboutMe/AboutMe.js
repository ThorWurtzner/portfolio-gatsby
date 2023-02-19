import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import "./AboutMe.scss";

export default function AboutMe() {
    

    return (
        <section className='aboutMe' id="aboutMe">
            <div className="aboutMe__penguinDesktopWrapper">
                <StaticImage className="aboutMe__penguin" src='../../images/aboutme.png' alt='penguin pencil' placeholder='blurred'/>
            </div>
            <div className="aboutMe__penguinMobileWrapper">
                <StaticImage className="aboutMe__penguinMobile" src='../../images/penguinMobile.png' alt='penguin pencil' placeholder='blurred'/>
            </div>
            <div className='aboutMe__content'>
                <div className='aboutMe__portraitWrapper'>
                    <StaticImage className='portrait' src='../../images/portrait.png' alt='portrait' placeholder='blurred'/>
                    <div className='aboutMe__portraitWrapper__description'>
                        <h2>Thor Würtzner</h2>
                        <div>
                            <p>- Web Developer -</p>
                            <p>Roskilde Technical College</p>
                        </div>
                        <div>
                            <p className='aboutMe__portraitWrapper__description__studying'>Currently studying:</p>
                            <p>- AP Degree in Computer Science -</p>
                            <p>Business Academy Aarhus</p>
                        </div>
                    </div>
                </div>

                <div className='aboutMe__content__inner'>
                    <h2>Hey again</h2>
                    <p>I'm a developer living in Aarhus, Denmark. Originally from Copenhagen. <br /> I used to sell suits before all of this developer stuff. And from there I learned to never let customers or partners leave dissatisfied with a service, and I've brought those values to this field of work as well. <br/> I enjoy designing, and creating responsive websites with an user experience that achieves your goals as a business. Not only do I make sure your site reaches the widest audience possible, I make it look good as well.</p>
                    <h2>Some of my other illustrations and designs:</h2>
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
