import React from 'react';
import "./ContactModal.scss";

export default function ContactModal({ display, setDisplay }) {

    return (
        <div className='contactModal' style={display === true ? {display: "flex"} : {display: "none"}}>
            <form onSubmit={event => event.preventDefault()}>

                <div>
                    <p>Whoops, something is broken!</p>
                    <p>I'm currently in the process of fixing it</p>
                </div>

                <button onClick={() => setDisplay(false)}>Close</button>
            </form>

        </div>
    )
}
