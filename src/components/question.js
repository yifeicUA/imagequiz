//import App from "../App";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import quizzes from './data.js';
import Home from './Home.js';
import QuestionsPage from './question.js';
import grade from './grade.js';
import { Alert, Card, Button, Form} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Image} from "react-bootstrap";
import { useHistory } from "react-router";
const Questions = (props) => {
        const {grade, setGrade} = useState(0);
        const history = useHistory();
        //alert(props.indexProp);
        //alert(props.gradeProp);
        let send = (event) => {
          //event.preventDefault();
          if(event.target.id==event.target.value){
            props.getGrade(1);
          }else{
            props.getGrade(0);
          }
        }

        let curr = [];
        for(var i=0; i<quizzes[props.indexProp].length; i++){
                curr.push(<div><Container fluid>
                    <Row 
                      className="justify-content-center 
                                 align-items-center"
                    >
                      <Col>
                        <Image
                          src= {quizzes[props.indexProp][i].picture}
                          alt={quizzes[props.indexProp][i].answer}
                        />
                      </Col>
                      <Col>
                      <fieldset>
                        <Form>
                        <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            label={quizzes[props.indexProp][i].choices[0]} type ={'radio'} name="group1" id ={quizzes[props.indexProp][i].choices[0]} value ={quizzes[props.indexProp][i].answer} onClick={send}
                            />
                            <Form.Check
                            label={quizzes[props.indexProp][i].choices[1]} type ={'radio'} name="group1" id ={quizzes[props.indexProp][i].choices[1]} value ={quizzes[props.indexProp][i].answer}  onClick={send}
                            />
                            <Form.Check

                            label={quizzes[props.indexProp][i].choices[2]} type ={'radio'} name="group1" id ={quizzes[props.indexProp][i].choices[2]} value ={quizzes[props.indexProp][i].answer}  onClick={send}
                            />
                            <Form.Control.Feedback label={quizzes[props.indexProp][i].answer}>You did it!</Form.Control.Feedback>
                        </Col>
                        </Form.Group>
                        </Form>
                    </fieldset>
                      </Col>
                    </Row>
                  </Container></div>);
        }
        //past.appendChild(curr);
        curr.push(<Row><Alert key={"info"}>
          Your grade is {props.gradeProp} 
        </Alert></Row>);
        curr.push(<Row><Button href="/question" variant="primary" size="lg">
        Reapet same quiz
      </Button>{' '}
      <Button href="/" variant="secondary" size="lg">
        Go Back to do Others
      </Button>{' '}</Row>);
        return (
            (curr)
        );
    }
export default Questions;




/*
let curr = [];
        for(var i=0; i<quizzes.length; i++){
            for(var j=0; j<quizzes[i].length; j++){
                curr.push(<div><Container fluid>
                    <Row 
                      className="justify-content-center 
                                 align-items-center"
                    >
                      <Col>
                        <Image
                          src= {quizzes[i][j].picture}
                          alt={quizzes[i][j].answer}
                        />
                      </Col>
                      <Col>
                      <fieldset>
                        <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            label={quizzes[i][j].choices[0]}
                            />
                            <Form.Check
                            label={quizzes[i][j].choices[1]}
                            />
                            <Form.Check

                            label={quizzes[i][j].choices[2]}
                            />
                        </Col>
                        </Form.Group>
                    </fieldset>
                      </Col>
                    </Row>
                  </Container></div>);
            }
        }
        //past.appendChild(curr);
        
        return (
            (curr)
        );
*/

/*
    let curr = [];
        for(var i=0; i<quizzes.length; i++){
            for(var j=0; j<quizzes[i].length; j++){
                curr.push(<Card >
                    <Card.Img variant="top"  src={quizzes[i][j].picture}/>
                    <Card.Body>
                        <Card.Title>{quizzes[i][j].answer}</Card.Title>
                    </Card.Body>
                    </Card>);
            }
        }
        //past.appendChild(curr);
        
        return (
            (curr)
        );
*/