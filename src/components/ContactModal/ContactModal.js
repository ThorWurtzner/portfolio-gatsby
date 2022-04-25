import React from 'react';
import "./ContactModal.scss";

export default function ContactModal({ display, setDisplay }) {

    return (
        <div className='contactModal' style={display === true ? {display: "flex"} : {display: "none"}}>
            <form onSubmit={event => event.preventDefault()}>

                <button onClick={() => setDisplay(false)}>Close</button>
            </form>
        </div>
    )
}
