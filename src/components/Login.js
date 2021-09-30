//import App from "../App";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
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