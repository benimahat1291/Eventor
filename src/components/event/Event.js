import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import API from "../../utils/API"
import { useHistory } from "react-router-dom"
import "./Event.css"

const Event = () => {

    const history = useHistory();
    const [eventInfo, setEventInfo] = useState([])
    const urlArray = window.location.href.split("/")
    let eventId = urlArray[urlArray.length - 1]



    useEffect(() => {
        API.getConferencebyID(eventId).then(resp => {
            console.log("confbyID")
            console.log(resp.data)
            const tempArr = resp.data
            setEventInfo(tempArr[0])
        })
    }, [eventId])


    function handleDelete(confId) {
        API.deleteConference(confId).then(
            history.push("/yourevents")
        )
    }

    console.log("eventinfo", eventInfo)





    return (
        <div className="event">
            <div className="event__container">
                <div className="event__title">
                    <h1>{eventInfo.title}</h1>
                    <div className="event__titleOptions">
                        <Link to={`edit/${eventInfo._id}`}>
                        <p>Edit</p>
                        </Link>
                        <p>|</p>
                        <div className="event__titleDelete" onClick={() => handleDelete(eventInfo._id)}>
                            <p>Delete</p>
                        </div>


                    </div>
                </div>
                <div className="event__info">
                    <h3 className="event__desc">{eventInfo.description}</h3>
                    <div className="event__details">
                        <div className="event__detailsRow">
                            <h3 className="event__detailsTitle">Event Host</h3>
                            <h3 className="event__detailsSubtitle">{eventInfo.organization}</h3>
                        </div>
                        <div className="event__detailsRow">
                            <h3 className="event__detailsTitle">Dates</h3>
                            <h3 className="event__detailsSubtitle">{`${eventInfo.StartDate}`.slice(5).replace("-", "/")} - {`${eventInfo.EndDate}`.slice(5).replace("-", "/")}</h3>
                        </div>

                        <div className="event__detailsRow">
                            <h3 className="event__detailsTitle">Location</h3>
                            <h3 className="event__detailsSubtitle">{`${eventInfo.confType}`.toUpperCase()}</h3>
                        </div>
                            <h3 className="event__detailsSubtitle event__location">{eventInfo.location}</h3>

                       
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Event
