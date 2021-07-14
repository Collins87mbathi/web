import React from 'react'

import './Services.css';

const Services = () => {
    return (
        <div className="service-container">
            <article className='services'>
                <h3>Room Services</h3>
                <p>In-room dining</p>
                <p>Wireless internet(free throughout the hotel)</p>
                <p>Complimentary gourmet continental breakfast and coffee</p>
            </article>

            <article className='services'>
                <h3>Meeting Rooms</h3>
                <p>Business center (with reservation and additional fee)</p>
                <p>Board and meeting rooms (with reservation and additional fee)</p>
            </article>

            <article className='services'>
                <h3>Luxury Services</h3>
                <p>Fitness center</p>
                <p>Restaurant and lounge</p>
                <p>Walk through the park, Swimming pools,Cinema spa,Sweet-tooth spa</p>
            </article>
        </div>
    )
}

export default Services
