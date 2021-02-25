import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import {useHistory} from "react-router-dom"
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
                        <p>Edit</p>
                        <p>|</p>
                      <div className="event__titleDelete" onClick={() => handleDelete(eventInfo._id)}>
                            <p>Delete</p>
                      </div>

              
                    </div>
                </div>
                <h3 className="event__desc">{eventInfo.description}</h3>
                <div className="event__details">
                    <h3>Event Host:<span>{eventInfo.organization}</span></h3>
                    <h3>Dates:<span>{eventInfo.EndDate}-{eventInfo.StartDate}</span></h3>
                    <h3>Event Type:<span>{eventInfo.confType}</span></h3>
                    <h3>Loaction:<span>{eventInfo.location}</span></h3>
                </div>

            </div>



        </div>
    )
}

export default Event
