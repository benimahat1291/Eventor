import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import "./NewSession.css"
import API from "../../utils/API"

const EditSession = () => {

    let [formObject, setFormObject] = useState([])
    const history = useHistory();
    let urlArray = window.location.href.split("/")
    const sessionId = urlArray[urlArray.length - 1]

    useEffect(() => {
        // urlArray = window.location.href.split("/")
        console.log("editSession", sessionId)
        API.getSessionbyID(sessionId).then(resp => {
            setFormObject(resp.data[0])
        })
    }, [])


    const handleInputChange = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        API.updateSession({ ...formObject }, sessionId)
            .then(setTimeout(()=>(history.push(`/editsuccess/${formObject.confId}`)),2000))
            .catch(err => console.log(err))
    }



    return (
        <div className="editSession">
            <Form className="newSession__form">
                <div className="newSession__colRight">
                    <Form.Group className="newSession__formgroup" controlId="sessionName">
                        <Form.Label className="form__label">Session Title</Form.Label>
                        <Form.Control required type="input" name="sessName" value={formObject.sessName} onChange={handleInputChange} className="sessName form__input" />
                    </Form.Group>
                    <Form.Group className="newSession__formgroup" controlId="formSessionDesc">
                        <Form.Label className="form__label">Brief description of session</Form.Label>
                        <Form.Control required as="textarea" rows={8} name="sessDesc" placeholder="Enter session description" value={formObject.sessDesc} onChange={handleInputChange} className="form__desc" />
                    </Form.Group>
                </div>
                <div className="newSession__colLeft">

                    <Form.Group className="newSession__formgroup" controlId="formSessionPresenter">
                        <Form.Label className="form__label">Name(s) of presenter(s)</Form.Label>
                        <Form.Control required type="input" name="sessPresenter" placeholder="Enter name(s) of presenter(s)" value={formObject.sessPresenter} onChange={handleInputChange} className="sessPresenter form__input" />
                    </Form.Group>



                    <Form.Group className="newSession__formgroup" controlId="formConferenceDate">
                        <Form.Label className="form__label">Session Day </Form.Label>
                        <Form.Control type="date" name="sessionDate" placeholder="Enter SessionDay" value={formObject.sessionDate} onChange={handleInputChange} className="confStartDates  form__input" />
                    </Form.Group>

                    <Form.Group className="newSession__times"  >
                        <div className="newSession__formgroup">

                            <Form.Label className="form__label">Start Time:</Form.Label>
                            <Form.Control required type="time" name="startTime" placeholder="Enter session start time" value={formObject.startTime} onChange={handleInputChange} className="form__time" />
                        </div>
                        <div className="newSession__formgroup">

                            <Form.Label className="form__label">End Time:</Form.Label>
                            <Form.Control required type="time" name="endTime" placeholder="Enter session end time" value={formObject.endTime} onChange={handleInputChange} className="form__time" />
                        </div>
                    </Form.Group>
                    <Button onClick={handleFormSubmit} className="form__button" type="submit">save</Button>
                </div>
            </Form>
        </div>
    )
}

export default EditSession
