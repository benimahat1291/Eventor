import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import "./Session.css"

const Session = ({ eventId }) => {
    let sesEventId = eventId.eventId
    console.log("sesEventId", sesEventId)
    const [sessArr, setSessArr] = useState([]);
    let [sessionId, setSessionId] = useState("")
    let [infoDisplay, setInfoDisplay] = useState("")


    useEffect(() => {
        API.getSession(sesEventId).then(resp => {
            setSessArr(resp.data)
        })
        return setSessionId("")
    }, [sesEventId])

    console.log("SessArr >> ", sessArr)

    const handleInfoDisplay = (sessId) => {
        if (infoDisplay === sessId) {
            setInfoDisplay("")
        } else {
            setInfoDisplay(sessId)
        }
    }

    console.log("INfoDISPLAY", infoDisplay)

    return (
        <div className="session">

            {sessArr.map(e => (
                <>

                    <div onClick={() => handleInfoDisplay(e._id)} key={e._id} className="session__card">
                        <div className="session__cardRow">
                            <h1 className="session__cardTitle">{e.sessName}</h1>
                            <div className={infoDisplay === e._id ? `session__infoCol` : `session__infoRow`}>
                                <div className="session__Presenter">
                                    <PersonIcon />
                                    <span>{e.sessPresenter}</span>
                                </div>
                                <div className="session__Date">
                                    <EventIcon />
                                    <span>{e.sessionDate}</span>
                                </div>
                                <div className="session__Times">
                                    <ScheduleIcon />
                                    <span>{e.endTime}</span>
                                    <span> - </span>
                                    <span>{e.startTime}</span>
                                </div>
                            </div>
                            <div className={infoDisplay === e._id ? `session__descShow` : `session__Hide`}>
                                <p className="session__desc">
                                    {e.sessDesc}
                                </p>

                            </div>
                            <h4 className={infoDisplay === e._id ? `session__edit` : `session__Hide`}>Edit</h4>
                        </div>

                    </div>

                </>

            ))}

        </div>
    )
}

export default Session
