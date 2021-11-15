//import App from "../App";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form} from 'react-bootstrap';
return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                please enter your email address
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
        Login
        </Button>
    </Form>
);
export default Login;
/*
const Login = () => {
    return (
        <Card className="text-center">
            <Card.Header>Login</Card.Header>
            <Card.Body>
                <Card.Title>Enter your name</Card.Title>
                <Card.Text>Yifei Chen</Card.Text>
                <Button variant="primary">Login</Button>
            </Card.Body>
            <Card.Footer className="text-muted">you already login as Yifei</Card.Footer>
        </Card>
    );
}
export default Login;
*/