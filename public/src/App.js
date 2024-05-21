import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroProfessores from './pages/CadastroProfessores';
import Login from "./pages/Login";
import ListaProfessores from "./pages/ListaProfessores";
import DashBoard from "./pages/DashBoard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/CadProfessores" element={<CadastroProfessores/>} />
                <Route path="/ListaProfessores" element={<ListaProfessores  />}/>
                <Route path="/DashBoard" element={<DashBoard/>}/>
            </Routes>
        </Router>
    );
}

export default App;
