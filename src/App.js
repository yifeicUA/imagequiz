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
  Redirect,
  useParams,
  useHistory
  //Link
}from "react-router-dom";
import { Container, Row, Col, Alert } from 'react-bootstrap';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let onCustomerAuthenticated = () => {
    setIsAuthenticated(true);
  }


  const [number, setNumber] = useState(undefined);
  const [grade, setGrade] = useState(0);
  localStorage.setItem("customer",undefined);  
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
          <Col><Menu customerAuthenticated={isAuthenticated} /></Col>
        </Row>
        <Switch>
          <Route exact path='/twitter/:username/:name'>
            <Twitter onAuthenticated={onCustomerAuthenticated}/>
          </Route>
          <Route path="/sign">
            <Signin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/question">
            <Questions indexProp={number} getGrade={updateGrade} gradeProp = {grade}/>
          </PrivateRoute>
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
  console.log(customer=="undefined");
  /*
  if(customer=="undefined"){
    window.location.replace("/login")
  }
  */
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer!="undefined" ? (
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

let Twitter = (props) => {
  let { username, name } = useParams();
  let history = useHistory();
  
  useEffect(() => {
    console.log('in Twitter ...');
    api.verifyTwitter(username)
      .then(x => {
        console.log(x);
        if (x.done) {
          localStorage.setItem('customer', name);
          props.onAuthenticated();
        }
      });
  });
  
  
  
    return (
      <Home />
    );
  }
export default App;
