import React, { useState, useEffect } from "react";
import EventModel from "../eventCards/EventModel";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import "./EventCards.css"


const EventCards = ({ events }) => {

    const [eventId, setEventId] = useState(null)

    const handleEventDisplay = (eId) => {
        if(eventId === eId){
            setEventId(null)
        }else {
            setEventId(eId)
        }
    }
    console.log(eventId)


    return (
        <>
            <div className="eventcards">
                {eventId && 
                                <div className="eventcards__model">
                                    <div className="eventcards__closeIcon">
                                    <HighlightOffIcon onClick={()=>setEventId(null)} className="eventcards__closeIcon"/>
                                    </div>
                                    <EventModel eventId={eventId}/>
                                </div>
                }
                {events.map(e => (
                    <>
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
                    </>
                ))}
                                   

            </div>
        </>
    )
}

export default EventCards
