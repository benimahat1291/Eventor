import React, {useState} from 'react'
import NewSession from '../sessions/NewSession'
import "./Sessions.css"

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

    return (
        <div className="sessions">
               <div className="sessions__title">
                        <h1>Sessions</h1>
                            <div className="sessions__addSession" onClick={handleFormDisplay}>
                                <p>{formDisplay === false ? "Add Session" : "X"}</p>
                            </div>
                    </div>

                    <div className="event__newSession">
                        {formDisplay === true ? <NewSession /> : null}
                    </div>
        </div>
    )
}

export default Sessions
