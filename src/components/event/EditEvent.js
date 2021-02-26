import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import "./EditEvent.css";

const EditEvent = () => {

    const { user, isAuthenticated } = useAuth0();
    const history = useHistory();
    const [event, setEvent] = useState([]);
    const [pageReady, setPageReady] = useState(false);

    const urlArray = window.location.href.split("/")
	const confId = urlArray[urlArray.length - 1]
    let [formObject, setFormObject] = useState({
        
    })

    useEffect(()=> {
        API.getConferencebyID(confId).then(resp => {
            console.log("EditEvent:", resp.data)
            setFormObject(resp.data[0])
            setPageReady(true)
        })
    },[])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.updateConference({...formObject}, confId)
        .then(setTimeout(()=>(history.push(`/editsuccess/${confId}`)),2000))
    }
    


    const handleInputChange = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value, registeredUsers: []});
        console.log(formObject)
    };





    return (
        <>
        { pageReady === true && (
            <div className="newevent">
            <Form className="EventForm">

                <Form.Group className="EventForm__name" controlId="EventForm__name">
                    <Form.Label className="EventForm__nameLabel">Event Name</Form.Label>
                    <Form.Control required type="input" name="title" value={formObject.title} className="EventForm__nameInput" onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="EventForm__orgDate">
                    <Form.Group className="EventForm__organization" controlId="EventForm__organization">
                        <Form.Label className="EventForm__organizationLabel">Event Host</Form.Label>
                        <Form.Control required type="input" name="organization" value={formObject.organization} className="EventForm__organizationInput" onChange={handleInputChange} />
                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="NewEvent__date" controlId="NewEvent__date">

                        <div className="NewEvent__startDate">
                            <Form.Label className="NewEvent__dateLabel">Start Date</Form.Label>
                            <Form.Control required type="date" name="StartDate" placeholder="Enter conference dates" value={formObject.date} className="NewEvent__dateInput" onChange={handleInputChange} />
                        </div>

                        <div className="NewEvent__endDate">
                            <Form.Label className="NewEvent__dateLabel">End Date</Form.Label>
                            <Form.Control required type="date" name="EndDate" placeholder="Enter conference dates" value={formObject.date} className="NewEvent__dateInput" onChange={handleInputChange} />
                        </div>

                        <Form.Control.Feedback type="invalid">
                        </Form.Control.Feedback>
                    </Form.Group>

                </div>




                <Form.Group className="NewEvent__description" controlId="NewEvent__description">
                    <Form.Label className="NewEvent__descriptionLabel">Description</Form.Label>
                    <Form.Control required as="textarea" rows={8} type="input" name="description" placeholder="" value={formObject.description} className="NewEvent__descriptionInput" onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>



                <div className="NewEvent__locationRow">

                <Form.Group className="NewEvent__radio" controlId="radioButtons">
                    <Form.Label className="NewEvent__radioLabel">Live or Virtual?</Form.Label>

                    <div className="NewEvent__radioOptions">
                        <Form.Check type="radio" id="confTypeLive" name="confType" label="Live" value="live"
                            className="NewEvent__radioOption" onChange={handleInputChange} />
                        <Form.Check type="radio" id="confTypeVirtual" name="confType" label="Virtual" value="virtual" className="NewEvent__radioOption" onChange={handleInputChange} />
                    </div>
                </Form.Group>

                <Form.Group className="NewEvent__location" controlId="NewEvent__location">
                    <Form.Label  className="NewEvent__locationLabel">Location</Form.Label>
                    <Form.Control required type="input" name="location" placeholder={formObject.location} value={formObject.location} className="NewEvent__locationInput" onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                </div>

                {/* <Button onClick={handleFormUpdate} type="submit">Update form</Button> */}
                <div>
                <Button className="NewEvent__submit" onClick={handleFormSubmit} type="submit">Save Changes</Button>
                </div>
            </Form>

        </div>

        )}
    </>
    )
}

export default EditEvent
