import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import { Link, useHistory } from "react-router-dom"
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import "./Session.css"

const Session = (eventId) => {
    let sesEventId = eventId.eventId
    const history = useHistory();
    const [sessArr, setSessArr] = useState([]);
    let [sessionId, setSessionId] = useState("")
    let [infoDisplay, setInfoDisplay] = useState("")


    useEffect(() => {
        API.getSession(sesEventId).then(resp => {
            setSessArr(resp.data)
        })
        return setSessionId("")
    }, [sesEventId, sessionId])

    console.log("SessArr >> ", sessArr)

    const handleInfoDisplay = (sessId) => {
        if (infoDisplay === sessId) {
            setInfoDisplay("")
        } else {
            setInfoDisplay(sessId)
        }
    }

    const handleDelete = (sessionId) => {
        if (window.confirm("Are you sure you want to delete?")) {
            API.deleteSession(sessionId)
                .then(setTimeout(() => (history.push(`/editsuccess/${sesEventId}`)), 2000))
        } else {
            return
        }
    }

    console.log("INfoDISPLAY", infoDisplay)

    return (
        <div className="session">

            {sessArr.map(e => (
                <>

                    <div onClick={() => handleInfoDisplay(e._id)} key={e._id} className="session__card">
                        <div className="session__cardRow">
                            <div className="session__left">
                                <h1 className="session__cardTitle">{e.sessName}</h1>
                                <div className={infoDisplay === e._id ? `session__descShow` : `session__Hide`}>
                                    <p className="session__desc">
                                        {e.sessDesc}
                                    </p>
                                </div>

                            </div>
                            <div className="session__right">
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

                            <div className="session__options">
                                <h4 onClick={() => handleDelete(e._id)} className={infoDisplay === e._id ? `session__edit` : `session__Hide`}>Delete</h4>
                                <Link to={`editsession/${e._id}`}>
                                    <h4 className={infoDisplay === e._id ? `session__edit` : `session__Hide`}>Edit</h4>
                                </Link>
                            </div>
                            </div>
                        </div>

                    </div>

                </>

            ))}

        </div>
    )
}

export default Session
