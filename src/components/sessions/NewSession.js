import React from 'react'
import { Form, Button } from "react-bootstrap"



const NewSession = () => {

    

    return (
        <div className="NewSession">
            <Form>
                <Form.Group controlId="sessionName">
                    <Form.Label>Session Title</Form.Label>
                    <Form.Control required type="input" name="sessName" placeholder="title" value="" className="sessName" />
                </Form.Group>

                <Form.Group controlId="formSessionPresenter">
                    <Form.Label>Name(s) of presenter(s)</Form.Label>
                    <Form.Control required type="input" name="sessPresenter" placeholder="Enter name(s) of presenter(s)" value="" className="sessPresenter" />
                </Form.Group>

                <Form.Group controlId="formSessionDesc">
				<Form.Label>Brief description of session</Form.Label>
				<Form.Control required as="textarea" rows={8} name="sessDesc" placeholder="Enter session description" value="" className="sessDesc" />
				<Form.Control.Feedback type="invalid">
					Please provide a description of your session.
                </Form.Control.Feedback>
			</Form.Group>

                <Form.Group controlId="formConferenceDate">
                    <Form.Label>Session Day </Form.Label>
                    <Form.Control type="date" name="sessionDate" placeholder="Enter SessionDay" value="" className="confStartDates"  />
                </Form.Group>

                <Form.Group>
                <Form.Label>Start Time:</Form.Label>
				<Form.Control required type="time" name="startTime" placeholder="Enter session start time" value="" className="confStartDates"  />
                <Form.Label>End Time:</Form.Label>
				<Form.Control required type="time" name="endTime" placeholder="Enter session end time" value="" className="confStartDates" />
                </Form.Group>
                <Button  type="submit">Submit form</Button>
            </Form>
        </div>
    )
}

export default NewSession
