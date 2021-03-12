import React, { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom"
import API from "../../utils/API"
import { useHistory } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import "./EventModel.css"
import Sessions from '../sessions/Sessions'

const Event = ({eventId}) => {

    const history = useHistory();
    const [eventInfo, setEventInfo] = useState([])
    const { user, isAuthenticated } = useAuth0();


    useEffect(() => {
        API.getConferencebyID(eventId).then(resp => {
            console.log("confbyID")
            console.log(resp.data)
            const tempArr = resp.data
            setEventInfo(tempArr[0])
        })
    }, [eventId])


    function handleDelete(confId) {
        if(window.confirm("Are you sure you want to delete this event?")){
            API.deleteConference(confId)
                .then(setTimeout(() => (history.push("/success")), 1000))
        } else {
            return
        }
    }

    const addToWatchlist = (confId) => {
        console.log("from component")
        const email = { email: user.email }
        API.updateRegisteredById(confId, email).then(() => {
            alert("Added to Watchlist")
        })
        setTimeout(() => (history.push("/home/watchlist")))
    }


    console.log("eventinfo", eventInfo)





    return (
        <div className="event" id="eventModel">
            <div className="event__container" >
                <div className="event__title">
                    <h1>{eventInfo.title}</h1>
                    <div className="event__titleOptions">
                        {user.email === eventInfo.email ?
                        <>
                        <Link to={`yourevents/edit/${eventInfo._id}`}>
                            <p>Edit</p>
                        </Link>
                        <p>|</p>
                        <div className="event__titleDelete" onClick={() => handleDelete(eventInfo._id)}>
                            <p>Delete</p>
                        </div>
                        </>
                        :
                        <div className="event__titleDelete" onClick={() => addToWatchlist(eventInfo._id)}>
                        <p>Add to Watchlist</p>
                    </div>
                        }               
                    </div>
                </div>
                <div className="event__info">
                    <h3 className="event__desc">{eventInfo.description}</h3>
                    <div className="event__detailContainer">


                        <div className="event__details">
                            <div className="event__detailsRow">
                                <h3 className="event__detailsTitle">Event Host</h3>
                                <h3 className="event__detailsSubtitle">{eventInfo.organization}</h3>
                            </div>
                            <div className="event__detailsRow">
                                <h3 className="event__detailsTitle">Dates</h3>
                                <h3 className="event__detailsSubtitle">{`${eventInfo.StartDate}`.slice(5).replace("-", "/")} - {`${eventInfo.EndDate}`.slice(5).replace("-", "/")}</h3>
                            </div>
                            <div>
                                <div className="event__detailsLocationRow">
                                    <h3 className="event__detailsTitle">Location</h3>
                                    <h3 className="event__detailsSubtitle event__confType">{`${eventInfo.confType}`.toUpperCase()}</h3>
                                </div>
                                <div className="event__location">
                                    {eventInfo === "live" ?
                                        <a target={"_blank"} href={`https://www.google.com/maps/search/${eventInfo.location.replace(" ", "+")}`}>{eventInfo.location}</a>
                                        :
                                        <a target={"_blank"} href={eventInfo.location}>{eventInfo.location}</a>
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="event__sessions">

                    <Sessions eventId={eventInfo} />

                </div>
            </div>




        </div>
    )
}

export default Event
