import React, { useEffect, useState } from 'react'
import NewSession from '../sessions/NewSession'
import "./Sessions.css"
import { useAuth0 } from "@auth0/auth0-react";
import Session from "./Session"
import CloseIcon from '@material-ui/icons/Close';

const Sessions = (event) => {

    const { user, isAuthenticated } = useAuth0();
    let [formDisplay, setFormDisplay] = useState(false);
    console.log("HERE", event.eventId)

    const handleFormDisplay = () => {
        if (formDisplay === false) {
            setFormDisplay(true)
        } else if (formDisplay === true) {
            setFormDisplay(false)
        }
    }

    useEffect(() => {
        return setFormDisplay(false)
    }, [event])

    return (
        <div className="sessions">
            <div className="sessions__title">
                <h1>Sessions</h1>
                {event.eventId.email === user.email ?
                    <div className="sessions__addSession" onClick={handleFormDisplay}>
                        <p>{formDisplay === false ? "Add Session" : <CloseIcon className="sessions__closeIcon" />}</p>
                    </div> 
                    :
                    <div></div>
                    }
            </div>

            <div className="event__newSession">
                {formDisplay === true ? <NewSession eventId={event.eventId._id} /> : <Session eventId={event.eventId._id} />}
            </div>

            <div className="sessions__container">

            </div>
        </div>
    )
}

export default Sessions
