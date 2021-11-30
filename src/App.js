//import logo from './logo.svg';
import Home from './components/Home';
import Signin from './components/Signup';
import Login from './components/Login';
import Menu from './components/Menu';
import Questions from './components/question';
import { useState } from 'react';
//import React from 'react';
import {
  //BrowserRouter as router,
  HashRouter,
  Switch,
  Route,
  Redirect
  //Link
}from "react-router-dom";
import { Container, Row, Col, Alert } from 'react-bootstrap';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [number, setNumber] = useState(undefined);
  const [grade, setGrade] = useState(0);
  let index = 0;

  let getnumIndex = (picIndex) => {
    setNumber(picIndex);
    
  }
  let updateGrade = (Grade) => {
    setGrade(grade+Grade);
    //alert(grade);
    
  }
  //alert(number);
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
          <Route path="/question">
            <Questions indexProp={number} getGrade={updateGrade} gradeProp = {grade}/>
          </Route>
          <Route path="/">
            <Home getIndex={getnumIndex} />
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
let PrivateRoute = ({ children, ...rest }) => {
  let customer = localStorage.getItem('customer');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
