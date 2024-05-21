import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import ListaProfessores from "./pages/ListaProfessores";
import DashBoard from "./pages/DashBoard";
import Calendario from "./pages/Calendario.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/ListaProfessores" element={<ListaProfessores />}/>
                <Route path="/DashBoard" element={<DashBoard/>}/>
                <Route path="/Calendario" element={<Calendario/>}/>
            </Routes>
        </Router>
    );
}

export default App;
