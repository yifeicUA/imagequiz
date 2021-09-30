//import logo from './logo.svg';
import Home from './components/Home';
import Signin from './components/Signup';
import Login from './components/Login';
import Menu from './components/Menu';
//import React from 'react';
import {
  //BrowserRouter as router,
  HashRouter,
  Switch,
  Route,
  //Link
}from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Container>
        <Row>
          <Col><Menu /></Col>
        </Row>
        <Switch>
          <Route path="/sign">
            <Signin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Container>
    </HashRouter>
  );
}
/*
function Home(){
  return <h2>Home</h2>
}
function Signin(){
  return <h2>Signin</h2>
}
function Login(){
  return <h2>Login</h2>
}
*/
export default App;
