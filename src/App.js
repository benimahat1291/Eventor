import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, useParams, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Event from "./components/event/Event"
import Success from "./utils/Success"
import SaveSuccess from "./utils/SaveSuccess"

function App() {

    const { isLoading, isAuthenticated } = useAuth0();
    let { event_id } = useParams();
    

    return (
        <>
        <div className="eventor__app">

            <Switch>
                <Navbar />
                {!isAuthenticated && <Route path="/" component={Login} />}
                {isAuthenticated && 
                <div>
                <Route path="/yourevents">
                    <Home />
                </Route>
                <Route path="/success">
                   <Redirect to="/yourevents"/>
                </Route>
                <Route path={`/editsuccess/:confId`}>
                   <Success/>
                </Route>
                <Route path={`/savesuccess/`}>
                   <SaveSuccess/>
                </Route>

                </div>
                }


            </Switch>
                </div>
        </>
    );
};

export default App;
