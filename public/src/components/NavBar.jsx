import React from 'react';

function NavBar() {
    return (
        <div style={{}} className="verticalNav">
            <img className="logozinha" src="/logozinha.png" alt="Logo" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{listStyleType: 'none', margin: '0', padding: '0', color: 'white'}}>
                <br/>
                <br/>
                <li className="nav-item">
                    <a className="nav-link" href="/calendario">Calendário</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/professores">Professores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/alunos">Alunos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cursos">Curso</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/materias">Matérias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/salas">Salas</a>
                </li>
                <li className="nav-item">
                    <a id="sair" className="nav-link" href="/inicial">Sair</a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
