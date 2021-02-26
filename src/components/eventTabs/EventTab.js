import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./EventTab.css"
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from "@material-ui/core/";
import API from "../../utils/API"
import { useAuth0 } from "@auth0/auth0-react";




const EventTab = () => {

    const { user, isAuthenticated } = useAuth0();
    const [userEvents, setUserEvents] = useState([])
    // let [refresh, setRefresh] = useState("1")

    useEffect(() => {
        API.getConferencebyUser(user.email).then(resp => {
            console.log("data", resp.data)
            const tempArr = resp.data
            const sortedArr = tempArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            setUserEvents(sortedArr);
        })
    },[])

    return (
        <div className="eventTab">
            <div className="eventTab__container">
                <Link to="/yourevents/create/newevent">
                    <div className="eventTab__leftIcon">
                        <h1 className="eventTab__leftIconTitle">New Event</h1>
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>
                </Link>
                {userEvents.map(e => (
                    <div className="eventTab__link">
                        <Link to={`/yourevents/${e._id}`}>
                            <div key={e._id} className="eventTab__card">
                                <div className="eventTab__title">
                                    <h1>{e.title}</h1>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default EventTab


