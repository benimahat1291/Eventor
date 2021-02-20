import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {

    const { isLoading, isAuthenticated } = useAuth0();

    return (
        <>
            <Router>
                <Navbar />
                {!isAuthenticated && <Route path="/" component={Login} />}
               {isAuthenticated && <Route exact path="/home" component={Home} />}
            </Router>
        </>
    );
};

export default App;
