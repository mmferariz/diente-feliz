import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import loginImage from '../../img/login.png';

export const Navbar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/', {replace: true});
    }

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className='flex flex-col items-center'>
            <div className= 'bg-clip-content sm:w-20 sm:h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-blue-900 my-2 text-center md:text-7xl sm:text-5xl font-bold uppercase text-white'>
             {user.username[0]}
            </div>
            {/* <img className='py-2 object-center w-20 flex-none' src={loginImage} alt='loginImage' /> */}
            <p className='py-2 font-bold text-center text-blue-700'>Bienvenid@ {user.username}</p>
            <nav className='w-full text-center space-y-4'>
                <NavLink to={'citas'}>
                    <div className={location.pathname === '/app/citas' ? 'py-2 px-3 text-white bg-blue-500 uppercase hover:translate-x-2 transition-transform' : 'py-2 px-3 text-white bg-blue-200 hover:bg-blue-300 uppercase hover:translate-x-2 transition-transform'}>
                        Citas
                    </div>
                </NavLink>
                <NavLink to={'paciente'}>
                    <div className={location.pathname === '/app/paciente' ? 'py-2 px-3 text-white bg-blue-500 uppercase hover:translate-x-2 transition-transform' : 'py-2 px-3 text-white bg-blue-200 hover:bg-blue-300 uppercase hover:translate-x-2 transition-transform'}>
                        Pacientes
                    </div>
                </NavLink>
                <NavLink to={'/app'}>
                    <div className={location.pathname === '/app' ? 'py-2 px-3 text-white bg-blue-500 uppercase hover:translate-x-2 transition-transform' : 'py-2 px-3 text-white bg-blue-200 hover:bg-blue-300 uppercase hover:translate-x-2 transition-transform'}>
                        Agenda
                    </div>
                </NavLink>
                <button
                    className='mt-2 py-2 px-3 bg-red-500 text-white uppercase hover:bg-red-700 hover:-translate-y-2 transition-transform' onClick={handleLogout}
                >
                    Logout
                </button>
            </nav>
        </div>
    )
}