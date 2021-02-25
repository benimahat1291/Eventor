import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./EventTab.css"
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add'
import { IconButton } from "@material-ui/core/";



const EventTab = ({ events }) => {

    console.log(events)

    return (
        <div className="eventTab">
            <div className="eventTab__container">
                <Link to="/yourevents/create/newevent">
                    <div className="eventTab__leftIcon">
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </div>
                </Link>
                {events.map(e => (
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


