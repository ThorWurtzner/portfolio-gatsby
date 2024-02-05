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
                    <p>I am primarily specialized in front-end development with major JavaScript frameworks such as React, Vue, and Angular, as well as CSS preprocessors like Sass. Additionally, I love doing everything visual within UI/UX design, vector graphics, illustrations - and as a landscape painter, I take pride in ensuring all my virtual creations receive the same love as a canvas would. 
                        <br/><br/>Currently, I am furthering my education in Computer Science at Business Academy Aarhus, where my skills are expanding to include back-end and system development.</p>
                    <h2>Some of my other illustrations and designs:</h2>
                    <div className='aboutMe__illustrations'>
                        <a href="https://thorwurtzner.dk/static/16e917eb50baa80ae621bd1fca6299d8/1ed78/copenhagen.webp" target='_blank'>
                            <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/copenhagen.png' alt='' placeholder='blurred'/>
                        </a>
                        <a href="https://thorwurtzner.dk/static/f3e3374c8b2d01c2a56cef31216acb98/0dd7a/spotify1.webp" target='_blank'>
                            <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/spotify1.png' alt='' placeholder='blurred'/>
                        </a>
                        <a href="https://thorwurtzner.dk/static/6fb4254e58e00502d128a4fb914b24f4/0dd7a/spotify2.webp" target='_blank'>
                            <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/spotify2.png' alt='' placeholder='blurred'/>
                        </a>
                        <a href="https://thorwurtzner.dk/static/6b671c447312a00c0f6fb2882a0accbc/ba936/avis.webp" target='_blank'>
                            <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/avis.png' alt='' placeholder='blurred'/>
                        </a>
                        <a href="https://thorwurtzner.dk/static/00a42db3f1c8038346469eb9b5bd7293/a7cad/storage.webp" target='_blank'>
                            <StaticImage className='aboutMe__illustrations__img' src='../../images/illustrations/storage.png' alt='' placeholder='blurred'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
