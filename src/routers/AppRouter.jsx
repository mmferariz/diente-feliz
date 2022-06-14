import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Agendar } from '../components/citas/Agendar';
import { VerCitas } from '../components/citas/VerCitas';
import { LoginScreen } from '../components/login/LoginScreen';
import { Paciente } from '../components/Paciente/Paciente';

import { NavbarLayout } from '../layouts/NavbarLayout';

export const AppRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<LoginScreen />} />
                </Route>
                <Route path="/app" element={<NavbarLayout />}>
                    <Route index element={<Agendar />} />
                    <Route path="citas" element={<VerCitas />} />
                    <Route path="paciente" element={<Paciente />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}