import React, { useState, useEffect } from 'react'
import "./AllEvents.css"
import API from "../../utils/API"
import { useAuth0 } from "@auth0/auth0-react";
import { IconButton } from "@material-ui/core/";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from "react-router-dom"
import EventCards from "../../components/eventCards/EventCards"

const AllEvents = () => {
    const { user } = useAuth0();
    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        API.getConference().then(resp => {
            const sortedEvents = resp.data.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            return setEvents(sortedEvents)
        })
    }, [])

    const searchFilter = (data) => {
        return data.filter((events) => events.title.toLowerCase().indexOf(search) !== -1)
    }


    return (
        <div className="allevents">
            {/* <div className="allevents__headerContainer">
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
            </div> */}

            <div className="allevents__eventCards">
                <EventCards events={searchFilter(events.slice(0, Math.ceil(events.length)))} />
            </div>

            <div className="allevents__searchBar">
                <input type="text" placeholder="Search for Event" value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>
        </div>
    )
}

export default AllEvents
