import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import css from "./Cards.module.css"

function GridExample({titulo, children}) {
    return (
        <Container className={css.containerzin}>
            <Row xs={1} md={3} className="g-5">
               <Col md={"12"}>
                   <h1>{titulo}</h1>
               </Col>
                {children}
            </Row>
        </Container>
    );
}

export default GridExample;
