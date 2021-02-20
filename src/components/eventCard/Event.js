import React, { useState } from 'react'
import "./Event.css"
import EditIcon from '@material-ui/icons/Edit';


const Event = ({ events }) => {

    console.log(events)

    return (
        <div className="event">
            <div className="event__container">
                {events.map(e => (
                    <div key={e._id} className="event__card">
                        <div className="event__title">
                            <h1>{e.title}</h1>
                        </div>

                            {/* <div className="event__host">
                                <h2 className="event__infoSubtitle">Event Host: <span>{e.organization}</span></h2>
                            </div>
                        <div className="event__description">
                            <p>{e.description}</p>
                        </div>
                        <div className="event__info">
                            <div className="event__dateType">
                                <h2 className="event__infoSubtitle">Date: <span>{e.StartDate} - {e.EndDate}</span></h2>
                                <h2 className="event__infoSubtitle">Type: <span>{e.confType}</span></h2>
                            </div>
                            <div>
                            <h2 className="event__infoSubtitle">Location: <span>{e.location}</span></h2>
                            </div>
                        </div> */}


                        {/* <div className="event__options">
                            <div className="event__button"><button>Details</button></div>
                            <div className="event__button"><button>Edit</button></div>
                        </div> */}




                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Event
