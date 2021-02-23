import React from "react";
import "./App.css";
import { BrowserRouter as Switch, Route, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Event from "./components/event/Event"

function App() {

    const { isLoading, isAuthenticated } = useAuth0();
    let { event_id } = useParams();

    return (
        <>
            <Switch>
                <Navbar />
                {!isAuthenticated && <Route exact path="/" component={Login} />}
                {isAuthenticated && <Route path="/yourevents">
                    <Home />
                </Route>}

            </Switch>
        </>
    );
};

export default App;
