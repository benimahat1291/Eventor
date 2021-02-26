import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import "./NewEvent.css";

const NewEvent = () => {

    const { user, isAuthenticated } = useAuth0();
    const history = useHistory();
    let [redirect, setRedirect] = useState(false);

    let [formObject, setFormObject] = useState({
        EndDate: "01/01/2021",
        StartDate: "01/01/2021",
        organization: "Your organization",
        location: "Here",
        confType: "Live",
        title: "A conference",
        description: "This is the default conference description",
        email: "",
        attendingCount: 0,
        registeredUsers: []
    })

    const handleInputChange = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value, registeredUsers: [] });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.saveConference({ ...formObject, email: user.email })
       .then(setTimeout(()=>(history.push("/savesuccess")), 3000))
        
        
    
    }






    return (
        <div className="newevent">
            <Form className="EventForm">

                <Form.Group className="EventForm__name" controlId="EventForm__name">
                    <Form.Label className="EventForm__nameLabel">Event Name</Form.Label>
                    <Form.Control required type="input" name="title" placeholder="" value={formObject.name} className="EventForm__nameInput" onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="EventForm__orgDate">
                    <Form.Group className="EventForm__organization" controlId="EventForm__organization">
                        <Form.Label className="EventForm__organizationLabel">Event Host</Form.Label>
                        <Form.Control required type="input" name="organization" placeholder="" value={formObject.name} className="EventForm__organizationInput" onChange={handleInputChange} />
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
                    <Form.Control required as="textarea" rows={8} type="input" name="description" placeholder="" value={formObject.name} className="NewEvent__descriptionInput" onChange={handleInputChange} />
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
                    <Form.Control required type="input" name="location" placeholder="URL or Adress" value={formObject.name} className="NewEvent__locationInput" onChange={handleInputChange} />
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                </div>

                {/* <Button onClick={handleFormUpdate} type="submit">Update form</Button> */}
                <div>
                <Button className="NewEvent__submit" onClick={handleFormSubmit} type="submit">Create Event</Button>
                </div>
            </Form>

        </div>
    )
}

export default NewEvent
