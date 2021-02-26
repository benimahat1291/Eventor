import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import "./Session.css"

const Session = ({ eventId }) => {
    let sesEventId = eventId.eventId
    console.log("sesEventId", sesEventId)
    const [sessArr, setSessArr] = useState([]);

    useEffect(() => {
        API.getSession(sesEventId).then(resp => {
            setSessArr(resp.data)
        })
        return
    }, [sesEventId])

    console.log("SessArr >> ", sessArr)



    return (
        <div className="session">

            {sessArr.map(e => (
                
                    <div key={e._id} className="session__card">
                        <h1>{e.sessName}</h1>
                        {/* <h1>{e.sessDesc}</h1> */}
                        {/* <h1>{e.sessPresenter}</h1> */}
                        <div className="session__timeInfo">
                        <h1>{e.sessionDate}</h1>
                        <h1>{e.endTime}</h1>
                        <h1>{e.startTime}</h1>
                        </div>
                    </div>
             
            ))}

        </div>
    )
}

export default Session
