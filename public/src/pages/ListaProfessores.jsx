import React from 'react';
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import '../components/Cards.module.css'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function ListaProfessores() {
    return (
        <>
            <NavBar></NavBar>
            <Cards titulo={"Cadastro prof"}>
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="/fessor.png"/>
                            <div className="Infor">
                                as
                            </div>
                        </Card>
                    </Col>
                ))}
            </Cards>
        </>

    );
}

export default ListaProfessores;
