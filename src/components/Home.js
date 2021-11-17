//import App from "../App";
import { Container, Row, Col, CardGroup, Card, Alert} from "react-bootstrap";
//import flowers from './flowers.js';
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../communication/api";
const Home = (props) => {
    const [flowers, setFlowers] = useState([]);
    useEffect(() => {
        if(flowers.length > 0)return;
        api.getFlowers().then(x => setFlowers(x)).catch((e) => console.log(e));
    },[]
    );
    const {index, setNumber} = useState(0);
    const history = useHistory();
    let send =(event) =>{
        event.preventDefault();
        //alert(event.target.name);
        props.getIndex(event.target.name);
        history.push('/question')
    }
    let curr = [];
    for(var i=0; i<flowers.length; i++){
        curr.push(<Card >
            <Card.Link href = "#question"  value={i} onClick={send}>
            <Card.Img variant="top"  src={flowers[i].picture} name={i} onClick={send}/>
            </Card.Link>
            <Card.Body>
                <Card.Title>{flowers[i].name}</Card.Title>
            </Card.Body>
            </Card>);
    }
    //past.appendChild(curr);
    return (
        (curr)
    );
}
export default Home;
    /*
    let past = document.createElement('div');;
    
    let numrow = 0;
    for(var i=0; i<flowers.length; i++){
        if(i%4==0){
            past.appendChild(curr);
            curr = document.createElement('Row');
        }
        let pcard =document.createElement('Card');
        let pcardimg = document.createElement('Card.Img');
        pcardimg.setAttribute('variant','top');
        pcardimg.src = flowers[i].picture;
        let pcardbod = document.createElement('Card.Body');
        let pcardtit = document.createElement('Card.Title');
        pcardtit.innerHTML = flowers[i].name;
        pcardbod.appendChild(pcardtit);
        pcard.appendChild(pcardimg);
        pcard.appendChild(pcardbod);
        curr.appendChild(pcard)
        */
        