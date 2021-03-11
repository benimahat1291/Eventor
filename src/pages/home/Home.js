import React, { useState, useEffect } from "react";
import { Link, useLocation, Route, Redirect, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import { IconButton } from "@material-ui/core/";
import "./Home.css";
import AddIcon from '@material-ui/icons/Add'
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import Event from "../../components/event/Event"
import EventTab from "../../components/eventTabs/EventTab"
import NewEvent from "../../components/event/NewEvent"
import EditEvent from "../../components/event/EditEvent"
import EditSession from "../../components/sessions/EditSession"


const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    const [userEvents, setUserEvents] = useState([])
    let { event_id, sess_id } = useParams();
    // // const [attConfArr, setAttConfArr] = useState([])

    const saveUserToDb = (user) => {
        API.saveUser(user)
            .catch(err => console.log(err))
            .then(console.log("saved"))
    }
    console.log(user)
    console.log("events", userEvents)



    useEffect(() => {
        saveUserToDb(user);
        API.getConferencebyUser(user.email).then(resp => {
            console.log("data", resp.data)
            const tempArr = resp.data
            const sortedArr = tempArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
            setUserEvents(tempArr);
        })

        // API.getAttConference(user.email).then(resp => {
        //     const attArr = resp.data
        //     console.log(attArr)
        //     const sortedAtt = attArr.sort((a, b) => (a.StartDate > b.StartDate) ? 1 : -1);
        //     setAttConfArr(sortedAtt);
        // })

    }, [])


    return (
        <>

            <div className="home">
                <div className="home__container">
                        <Route exact path={"/yourevents"}>
                            <div className="home__right">
                                <Link to="/yourevents/create/newevent">
                                <div className="home__Add">
                                    <IconButton >
                                        <div className="home__AddIcon" >
                                            <PostAddOutlinedIcon />
                                            <h1>New Event</h1>
                                        </div>
                                    </IconButton>
                                </div>
                                </Link>
                            </div>

                        </Route>

                    <Route exact path={"/yourevents/create/newevent"}>
                        <div className="home__right">
                            <NewEvent />
                        </div>
                    </Route>

                    <Route exact path={`/yourevents/edit/:${event_id}`}>
                        <div className="home__right">
                            <EditEvent />
                        </div>
                    </Route>

                    <Route exact path={`/yourevents/:${event_id}`}>
                        <div className="home__right">
                            <Event />
                        </div>
                    </Route>

                    <Route exact path={`/yourevents/editsession/:${sess_id}`}>
                    <div className="home__right">
                        <EditSession/>
                        </div>
                    </Route>
                </div>
            </div>
        </>
    )
}

export default Home






// const Profile = () => {
{/* <div className="home__header">
        <div className="home__profileCard">
            <img src={user.picture} alt=""></img>
            <div className="home__userInfo">
                <h1>{user.name.toUpperCase()}</h1>
            </div>
        </div>
        <div className="home__addEvent">
            <div className="home__addEventIcon"><IconButton><AddCircleIcon /></IconButton></div>
        </div>
    </div> */}

{/* <div className="home__title">
        <h1>Your Events</h1>
    </div>
    
    <div className="home__eventsContainer">
        <div className="home__events">
            <Event events={userEvents} />
        </div>
        <div className="home__createEvent">
            <h1>Create Event</h1>
        </div>
    
    
    </div> */}

//     // console.log(userConfArr)


//     return (
//         isAuthenticated && (
//             <div>
//                 {/* user info */}


//                     <div  style={{ width:"50%", margin: "auto", borderRadius: "15px", paddingTop: "2vh", border: "5px solid #274046" }} className="gradientnav my-5">
//                         <div style={{width:"50%", margin:"auto"}}>
//                             <Row>
//                                 <Col lg={4}>
//                                 <img className="profilePic" style={{ borderRadius: "50%", marginBottom: "1vw" }} src={user.picture} alt="profilePic"></img>
//                                 </Col>
//                                 <Col lg={8}>
//                                 <div style={{margin:"auto", paddingLeft:"1vw"}}>
//                                     <h1 style={{fontSize:"2vw"}} className="play_fair">{user.nickname.toUpperCase()}</h1>
//                                     <h3 style={{ fontSize: "1vw" }} className="job">{user.email}</h3>
//                                 </div>
//                                 </Col>
//                             </Row>
//                         </div>
//                     </div>





//                 {/* my conferences */}

//                     <Row>
//                         <Col lg={6} md={12} className="bigCol">
//                             <Card  style={{ borderRadius: "15px", border: "5px solid #274046"  }}  >
//                                 <Col lg={12}>
//                                     <Row>
//                                         <Card.Header style={{ width: "100%", borderBottom:"solid 3px #274046" }}>
//                                             <Row>

//                                                 <Col lg={9}>
//                                                     <h1 className="play_fair" style={{ textAlign: "center", fontSize: "2vw" }}>Your Conferences</h1>
//                                                 </Col>
//                                                 <Col lg={3}>
//                                                     <div className="ml-4">
//                                                         <Link to="/create_conference" className={location.pathname === "/create_conference" ? "link active" : "link"}>
//                                                             <Button data-toggle="popover" title="Start A Conference" >
//                                                                 <svg width="1.5vw" height="1.5vw" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                                                     <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//                                                                     <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
//                                                                 </svg>
//                                                             </Button>
//                                                         </Link>
//                                                     </div>
//                                                 </Col>
//                                             </Row>
//                                         </Card.Header>
//                                     </Row>
//                                 </Col>
//                                 <Conference conference={userConfArr} />
//                             </Card>
//                         </Col>
//                         {/* attending conference */}
//                         <Col lg={6} md={12} className="bigCol">
//                             <Card style={{ borderRadius: "15px", border: "5px solid #274046"  }} >
//                                 <Col lg={12}>
//                                     <Row>
//                                         <Card.Header className="gradient" style={{ width: "100%", borderBottom:"solid 3px #274046" }}>
//                                             <h1 className="play_fair" style={{ textAlign: "center", fontSize: "2vw" }}>Attending</h1>
//                                         </Card.Header>
//                                     </Row>
//                                 </Col>
//                                 <Conference conference={attConfArr} />
//                             </Card>
//                         </Col>
//                     </Row>

//             </div>
//         )
//     )
// };

// export default Profile
