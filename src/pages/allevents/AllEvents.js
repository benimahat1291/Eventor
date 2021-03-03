import React from 'react'
import "./AllEvents.css"
import { IconButton } from "@material-ui/core/";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from "react-router-dom"
import EventCards from "../../components/eventCards/EventCards"

const AllEvents = () => {
    return (
        <div className="allevents">
            <div className="allevents__headerContainer">
                <div className="allevents__header">
                    <h1>Welcome to Eventor</h1>
                    <Link to="/yourevents/create/newevent">
                        <div className="allevents__createEvent">
                            <IconButton>
                                <AddCircleOutlineIcon className="allevents__addIcon" />
                            </IconButton>
                            <h2>New Event</h2>
                        </div>
                    </Link>
                    <div className="allevents__appdesc">
                        <p>Use Eventor to create and organization detialed events which may span mulitple days and include mulitple sessions. Also browse events that others have created and show your interest</p>
                    </div>
                </div>
            </div>

            <div className="allevents__eventCards">
                <EventCards/>
            </div>
        </div>
    )
}

export default AllEvents
