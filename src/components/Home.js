//import App from "../App";
import { Container, Row, Col, CardGroup, Card} from "react-bootstrap";
import flowers from './data.js';
const Home = () => {
    let curr = [];
    for(var i=0; i<flowers.length; i++){
        curr.push(<Card>
            <Card.Img variant="top" src={flowers[i].picture} />
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
        