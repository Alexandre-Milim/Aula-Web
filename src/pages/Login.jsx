import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import css from './Login.module.css';

function BasicExample() {
    return (
        <div className={css.container}>
            <Card style={{width: '20rem', height: '28rem', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderRadius: '14px'}}>
                <img src="/lEARNadm.png" alt="Logo"/>
                <Card.Body>
                    <div className={css.espacao}></div>
                    <div className="">
                        <input required="" type="text" className={css.input} placeholder="Usuário"/>
                        <span className={css.highlight}></span>
                        <span className={css.bar}></span>
                    </div>
                    <div className={css.espaco}></div>
                    <div className="">
                        <input required="" type="password" className={css.input} placeholder="Senha"/>
                        <span className={css.highlight}></span>
                        <span className={css.bar}></span>
                    </div>
                </Card.Body>
                <div className={css.espacao}></div>
                <button className={css.button}>Entrar</button>
            </Card>
        </div>
    );
}

export default BasicExample;
