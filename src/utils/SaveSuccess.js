import React, {useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";
import API from  "./API"


const SaveSuccess = () => {

    const { user, isAuthenticated } = useAuth0();
    const [confId, setConfId] = useState("")
    useEffect(() => {
        API.getConferencebyUser(user.email).then(resp => {
            setConfId(resp.data[(resp.data.length-1)]["_id"]);
        })
    }, [])

   
    console.log("confid", confId)
    
    return (
        <div>
           
        ({confId !== ""? <Redirect to={`/yourevents/${confId}`} />:null })
        </div>
    )
}

export default SaveSuccess
