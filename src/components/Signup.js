//import App from "../App";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form} from 'react-bootstrap';
const Signin = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    please enter your email address
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
                <Form.Text className="text-muted">
                    please enter your username
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="save account number" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Sign up
            </Button>
        </Form>
    );
}
export default Signin;

/*
<Card className="text-center">
            <Card.Header>Sign In</Card.Header>
            <Card.Body>
                <Card.Title>Enter your name</Card.Title>
                <Card.Text>Yifei Chen</Card.Text>
                <Button variant="primary">Sign in</Button>
            </Card.Body>
            <Card.Footer className="text-muted">the name will be your username</Card.Footer>
        </Card>
*/