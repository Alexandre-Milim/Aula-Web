import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListaProfessores.module.css'
import NavBar from "../components/NavBar";
import '../components/NavBar.module.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DashBoard.module.css';

const DashBoard = () => {


    return (
        <div className="verticalNav">
            <NavBar/>
            <h1 style={{
                fontWeight: 'bold',
                position: 'absolute',
                top: '20px',
                fontSize: '25px',
                left: '250px',
                whiteSpace: 'nowrap'
            }}>Olá! Explore a melhor gestão escolar!</h1>

            <h2 id="cursos">Cursos</h2>

            <div className="containerr">
              <div className="q1"></div>
              <div className="q2"></div>
              <div className="q3"></div>
              <div className="q4"></div>
            </div>
        </div>
    )
        ;
};

export default DashBoard;
