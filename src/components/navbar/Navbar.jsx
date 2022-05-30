import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import loginImage from '../../img/login.png';

export const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogout = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <div className='flex flex-col items-center'>
            <img className='py-2 object-center w-20 flex-none' src={loginImage} alt='loginImage' />
            <p className='py-2 font-bold'>Bienvenid@</p>
            <nav className='w-full text-center space-y-4'>
                <NavLink to={'citas'}>
                    <div className={location.pathname === '/app/citas' ? 'py-2 px-3 text-white bg-blue-500' : 'py-2 px-3 text-white bg-blue-200'}>
                        Ver Citas
                    </div>
                </NavLink>
                <NavLink to={'paciente'}>
                    <div className={location.pathname === '/app/paciente' ? 'py-2 px-3 text-white bg-blue-500' : 'py-2 px-3 text-white bg-blue-200'}>
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
        </div>
    )
}