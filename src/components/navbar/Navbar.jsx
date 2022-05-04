import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className='nav flex-column text-center'>
            <div>
                <div>
                    <NavLink
                    className={({ isActive }) => isActive ? 'nav-link active text-white bg-primary' : 'nav-link'}
                        to={'VerCitas'}
                    >
                        Ver Citas
                    </NavLink>
                </div>
                <div>
                    <NavLink
                    className={({ isActive }) => isActive ? 'nav-link active text-white bg-primary' : 'nav-link'}
                        to={'Paciente'}
                    >
                        Pacientes
                    </NavLink>
                </div>
                <div>
                    <NavLink
                    className={({ isActive }) => isActive ? 'nav-link active text-white bg-primary' : 'nav-link'}
                        to={'Agendar'}
                    >
                        Agendar
                    </NavLink>
                </div>

            </div>
            <div>
                <ul>
                    <button
                    className='mt-2 btn btn-primary'
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}