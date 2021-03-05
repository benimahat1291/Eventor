import React, { useState, useEffect } from "react";
import EventModel from "../eventCards/EventModel";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Link } from "react-scroll"
import "./EventCards.css"


const EventCards = ({ events }) => {

    const [eventId, setEventId] = useState(null)

    const handleEventDisplay = (eId) => {
        if (eventId === eId) {
            setEventId(null)
        } else {
            setEventId(eId)
        }
    }
    console.log(eventId)


    return (
        <>

            {eventId &&
                <div className="eventcards__model">
                    <div className="eventcards__closeIcon">
                        <HighlightOffIcon onClick={() => setEventId(null)} className="eventcards__closeIcon" />
                    </div>
                    <EventModel eventId={eventId} />
                </div>
            }
            <div className="eventcards__tabs">
                <h1>All Events</h1>
                <h1>WatchList</h1>
            </div>
            <div className="eventcards">
                {events.map(e => (
                    <>
                        <Link to="eventModel" spy={true} smooth={true} offset={-190} duration={500}>
                            <div onClick={() => handleEventDisplay(e._id)} className="eventcard__container">
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
                        </Link>
                    </>
                ))}


            </div>
        </>
    )
}

export default EventCards
