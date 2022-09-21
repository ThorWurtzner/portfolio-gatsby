import React from 'react';
import "./MyWork.scss";
import { StaticImage } from 'gatsby-plugin-image';

export default function Mywork() {
    
    return (
        <div className='myWork'>
            <StaticImage id="workPenguinDesktop" className="mywork__workPenguin" src='../../images/workPenguin.png' alt='penguin work' placeholder='blurred'/>
            <StaticImage id="workPenguinMobile" className="workPenguinMobile" src='../../images/workPenguinMobile.png' alt='penguin work' placeholder='blurred'/>
            <div className='myWork__grid'>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/pinger.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Pinger Messenger</h2>
                        <div class="content__inner">
                            <p class="content__description">A fullstack app with Firebase as the backend, and continual updates every time theres activity in the chat. <br/> Logging in with a Google account by Oauth - you're able to send live updated messages to other people signed in. </p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>React</p>
                                <p className='skills'>Firebase</p>
                                <p className='skills'>Sass</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__website" target="_blank" href="https://electron-chat-43469.web.app">
                                    <StaticImage className='links__image' src='../../images/icons/website.png' alt="" placeholder='blurred' />
                                </a>
                                <a class="links__code" target="_blank" href="https://github.com/ThorWurtzner/Pinger">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/voicerec.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Voice Recognition Software</h2>
                        <div class="content__inner">
                            <p class="content__description">A script which utilizes keybind triggered voice recognition, to send a message from your discord account to a specified server. <br/> This allows the user to control music playing in a channel, by modifying the recognized speech to fit the criteria of another bot listening for prompts.</p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>Python</p>
                                <p className='skills'>Discord API</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__code" target="_blank" href="https://github.com/ThorWurtzner/voiceRecognition-software">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/hue.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Philips Hue Spotify integration</h2>
                        <div class="content__inner">
                            <p class="content__description">An app that connects to your Spotify account and Philips Hue lightbulbs. Playing music anywhere will change the color of the bulb to the corresponding album cover, and extract the tempo of the song to make the bulb flash to every beat.</p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>Javascript</p>
                                <p className='skills'>React</p>
                                <p className='skills'>Spotify API</p>
                                <p className='skills'>Serverless computing</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__website" target="_blank" href="https://hue-music.netlify.app">
                                    <StaticImage className='links__image' src='../../images/icons/website.png' alt="" placeholder='blurred' />
                                </a>
                                <a class="links__code" target="_blank" href="https://github.com/ThorWurtzner/hue-music">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/matthew.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Matthew - The posture bot</h2>
                        <div class="content__inner">
                            <p class="content__description">Collaboration with Software Developer and friend <strong>Sindri Arngrimsson</strong>. <br/> A bot for discord, that can be triggered to speak by various commands. He'll primarily sit in your voice channel and remind everyone to check their posture at an interval.<br/> </p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>Python</p>
                                <p className='skills'>Heroku</p>
                                <p className='skills'>Discord API</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__code" target="_blank" href="https://github.com/ThorWurtzner/Posture-bot-discord">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/dappy.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Dappy Crypto</h2>
                        <div class="content__inner">
                            <p class="content__description">A landing page for a fictional cryptocurrency business. <br/> Connected to Google analytics with split testing, to test user engagement on different call-to-action colors.</p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>React</p>
                                <p className='skills'>Sass</p>
                                <p className='skills'>Split Testing</p>
                                <p className='skills'>Google Analytics</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__website" target="_blank" href="https://dappy-crypto.netlify.app">
                                    <StaticImage className='links__image' src='../../images/icons/website.png' alt="" placeholder='blurred' />
                                </a>
                                <a class="links__code" target="_blank" href="https://github.com/ThorWurtzner/Crypto-Landingpage">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="workComponent">
                    <div class="workComponent__imgWrapper">
                        <StaticImage className='workComponent__img' src='../../images/workCard/soccer.jpg' alt="" placeholder='blurred' />
                    </div>
                    <div class="workComponent__content">
                        <h2 class="content__name">Football Application Page</h2>
                        <div class="content__inner">
                            <p class="content__description">A landing page for a fictional football app. <br/> Focus on Test Driven Development with multiple tests on various items withing the components. </p>
                            <p class="content__skillsTitle">Skills used:</p>
                            <div class="content__skills">
                                <p className='skills'>TDD</p>
                                <p className='skills'>React</p>
                                <p className='skills'>Jest</p>
                                <p className='skills'>Sass</p>
                            </div>
                            <h3 class="content__linksTitle">Links:</h3>
                            <div class="content__links">
                                <a class="links__website" target="_blank" href="https://sports-app-landingpage.netlify.app">
                                    <StaticImage className='links__image' src='../../images/icons/website.png' alt="" placeholder='blurred' />
                                </a>
                                <a class="links__code" target="_blank" href="#">
                                    <StaticImage className='links__image' src='../../images/icons/code.png' alt="" placeholder='blurred' />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
