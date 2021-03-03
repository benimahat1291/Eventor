import React, { useState, useEffect } from "react";
import "./EventCards.css"
import { Link } from "react-router-dom"
import API from "../../utils/API"


const EventCards = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        API.getConference().then(resp => {
            const sortedEvents = resp.data.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            return setEvents(sortedEvents)
        })
    }, [])

    console.log(events)


    return (
        <div className="eventcards">
            {events.map(e => (
                <div className="eventcard__container">
                    <div className="eventcard__title">
                        <h1>{e.title}</h1>
                    </div>
                    <div className="eventcard__descBorder">
                    <div className="eventcard__desc">
                        <p>{e.description}</p>
                    </div>
                    </div>
                    <div className="eventcard__footer">
                        <p>{e.organization}</p>
                        <p>{e.StartDate}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default EventCards
