import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router";

const Success = () => {


    const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]
    
   


    return (
        <div>
        <Redirect to={`/yourevents/${confId}`} /> 
        </div>
    )
}

export default Success
