import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogout = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <nav className='w-full text-center space-y-4'>
            <NavLink to={'citas'}>
                <div className={location.pathname === '/app/citas' ? 'py-2 px-3 text-white bg-blue-500' : 'py-2 px-3 text-white bg-blue-200'}>
                    Ver Citas
                </div>
            </NavLink>
            <NavLink to={'nuevo'}>
                <div className={location.pathname === '/app/nuevo' ? 'py-2 px-3 text-white bg-blue-500' : 'py-2 px-3 text-white bg-blue-200'}>
                Pacientes
                </div>
            </NavLink>
            <NavLink to={'/app'}>
                <div className={location.pathname === '/app' ? 'py-2 px-3 text-white bg-blue-500' : 'py-2 px-3 text-white bg-blue-200'}>
                    Agendar
                </div>
            </NavLink>
            <button
                className='mt-2 py-2 px-3 bg-red-500 text-white' onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    )
}