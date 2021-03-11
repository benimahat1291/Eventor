import React, { useState, useEffect } from "react";
import EventModel from "../eventCards/EventModel";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-scroll"
import API from "../../utils/API"
import "./EventCards.css"


const EventCards = ({ events }) => {


    let [eventArr, setEventArr] = useState(events)
    const [eventId, setEventId] = useState(null)
    let [activeTab, setActiveTab] = useState("allEvents")
    const { user, isAuthenticated } = useAuth0();
    const [watchlist, setWatchlist] = useState([])

    
    
    useEffect(() => {
        
        API.getAttConference(user.email).then(resp => {
            const attArr = resp.data
            console.log(attArr)
            const sortedAtt = attArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            setWatchlist(sortedAtt);
        })
        setEventArr(events)
        setEventId("")
    }, [events, activeTab])

    useEffect(()=> {
        handleActiveArr()
    },[activeTab])
    
    const handleActiveArr = () => {
        if(activeTab === "allEvents") {
            setEventArr(events)
        } else if (activeTab === "watchList") {
            setEventArr(watchlist)
        }
    }

    
    const handleEventDisplay = (eId) => {
        if (eventId === eId) {
            setEventId(null)
        } else {
            setEventId(eId)
        }
    }
    

    return (
        <>


            <div className="eventcards__tabs">
                <div onClick={()=> setActiveTab("allEvents")} className={activeTab === "allEvents" ? "activeTab" : "nonActiveTab"}>
                    <h1>All Events</h1>
                </div>
                <div onClick={()=> setActiveTab("watchList")} className={activeTab === "watchList" ? `activeTab` : `nonActiveTab`}>
                    <h1>WatchList</h1>
                </div>
            </div>
            {eventId ?
                <div className="eventcards__model">
                    <div className="eventcards__closeIcon">
                        <HighlightOffIcon onClick={() => setEventId(null)} className="eventcards__closeIcon" />
                    </div>
                    <EventModel eventId={eventId} />
                </div>

                :
                <div className="eventcards">
                {eventArr.map(e => (
                        <Link to="eventModel" spy={true} smooth={true} offset={-190} duration={500}>
                            <div onClick={() => handleEventDisplay(e._id)} className="eventcard__container">
                                <div className="eventcard__title">
                                    <h1>{e.title}</h1>
                                </div>
                                <div className="eventcard__descBorder">
                                    <div className="eventcard__desc">
                                        <p>{e.description}</p>
                                    </div>
                                </div>
                                <div className="eventcard__footer">
                                    <p className="eventcard__org">{e.organization}</p>
                                    <p className="eventcard__date">{e.StartDate}</p>
                                </div>
                            </div>
                        </Link>
                ))}


            </div>
            }

        </>
    )
}

export default EventCards
