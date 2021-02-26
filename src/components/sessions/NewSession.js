import React from 'react'
import { Form, Button } from "react-bootstrap"
import "./NewSession.css"



const NewSession = () => {



    return (
        <div className="newSession">
            <Form className="newSession__form">
                <div className="newSession__colRight">
                    <Form.Group className="newSession__formgroup" controlId="sessionName">
                        <Form.Label className="form__label">Session Title</Form.Label>
                        <Form.Control required type="input" name="sessName" placeholder="title" value="" className="sessName form__input" />
                    </Form.Group>
                    <Form.Group className="newSession__formgroup" controlId="formSessionDesc">
                        <Form.Label className="form__label">Brief description of session</Form.Label>
                        <Form.Control required as="textarea" rows={8} name="sessDesc" placeholder="Enter session description" value="" className="form__input form__desc" />
                    </Form.Group>
                </div>
                <div className="newSession__colLeft">

                <Form.Group className="newSession__formgroup" controlId="formSessionPresenter">
                    <Form.Label className="form__label">Name(s) of presenter(s)</Form.Label>
                    <Form.Control required type="input" name="sessPresenter" placeholder="Enter name(s) of presenter(s)" value="" className="sessPresenter form__input" />
                </Form.Group>



                <Form.Group className="newSession__formgroup" controlId="formConferenceDate">
                    <Form.Label className="form__label">Session Day </Form.Label>
                    <Form.Control type="date" name="sessionDate" placeholder="Enter SessionDay" value="" className="confStartDates  form__input" />
                </Form.Group>

                <Form.Group className="newSession__times"  >
                    <div className="newSession__formgroup">

                        <Form.Label className="form__label form__time">Start Time:</Form.Label>
                        <Form.Control required type="time" name="startTime" placeholder="Enter session start time" value="" className="form__input form__time" />
                    </div>
                    <div className="newSession__formgroup">

                        <Form.Label className="form__label">End Time:</Form.Label>
                        <Form.Control required type="time" name="endTime" placeholder="Enter session end time" value="" className="form__input form__time" />
                    </div>
                </Form.Group>
                <Button className="form__button" type="submit">save</Button>
                </div>
            </Form>
        </div>
    )
}

export default NewSession
