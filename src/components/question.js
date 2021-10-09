//import App from "../App";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import quizzes from './data.js';
import grade from './grade.js';
import { Card, Button, Form} from 'react-bootstrap';
import { Container, Row, Col, CardGroup, Image} from "react-bootstrap";
const Questions = (props) => {
        const {grade, setGrade} = useState(0);
        alert(props.indexProp);
        let updateGrade = () => {
            
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
                        <Form onSubmit={updateGrade}>
                        <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                            label={quizzes[props.indexProp][i].choices[0]}
                            />
                            <Form.Check
                            label={quizzes[props.indexProp][i].choices[1]}
                            />
                            <Form.Check

                            label={quizzes[props.indexProp][i].choices[2]}
                            />
                        </Col>
                        </Form.Group>
                        </Form>
                    </fieldset>
                      </Col>
                    </Row>
                  </Container></div>);
        }
        //past.appendChild(curr);
        
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