import React from 'react';
import "./ContactModal.scss";

export default function ContactModal({ display, setDisplay }) {

    return (
        <div className='contactModal' style={display === true ? {display: "flex"} : {display: "none"}}>
            <form onSubmit={event => event.preventDefault()}>
                <p>Write me a message below!</p>
                <div>
                    <input type="text" placeholder="E-mail..." />
                    <textarea type="text" placeholder="Message..."></textarea>
                </div>
                <button onClick={() => setDisplay(false)}>Close</button>
            </form>
        </div>
    )
}
