import React, {useEffect, useState} from 'react'
import NewSession from '../sessions/NewSession'
import "./Sessions.css"
import Session from "./Session"

const Sessions = (eventId) => {


    let [formDisplay, setFormDisplay] = useState(false);
    console.log(eventId)
    
    const handleFormDisplay = () => {
        if (formDisplay === false) {
            setFormDisplay(true)
        } else if (formDisplay === true) {
            setFormDisplay(false)
        }
    }

    useEffect(()=>{
        return setFormDisplay(false)
    },[eventId])

    return (
        <div className="sessions">
               <div className="sessions__title">
                        <h1>Sessions</h1>
                            <div className="sessions__addSession" onClick={handleFormDisplay}>
                                <p>{formDisplay === false ? "Add Session" : "X"}</p>
                            </div>
                    </div>

                    <div className="event__newSession">
                        {formDisplay === true ? <NewSession eventId={eventId} /> : <Session eventId={eventId}/>}
                    </div>

                    <div className="sessions__container">
                       
                    </div>
        </div>
    )
}

export default Sessions
