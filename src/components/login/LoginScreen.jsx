import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../img/login.png';

export const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/app', {
            replace: true
        });
    }

    const [datos, setDatos] = useState({
        usuario: '',
        contra: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.usuario + ' ' + datos.contra)
        handleLogin()
    }

    return (
        <div className='bg-blue-600 h-screen px-16 py-20'>
            <div className='flex flex-col h-full bg-white  items-center'>
                <div className="flex-none w-20 h-20" />
                <div className='grow text-center flex flex-col items-center'>
                    <img className='object-center w-20 flex-none' src={loginImage} alt='loginImage' />
                    <div className='py-2 font-bold text-center text-3xl flex-none'><h1>Inicio de sesión</h1></div>
                    <form className="grow" onSubmit={enviarDatos}>
                        <div className="form-group p-2">
                            <input type="text" placeholder="Usuario" className="p-2" onChange={handleInputChange} name="usuario"></input>
                        </div>
                        <div className="form-group p-2">
                            <input type="password" placeholder="Contraseña" className="p-2" onChange={handleInputChange} name="contra"></input>
                        </div>
                        <button type="submit" className="border border-1 border-black inline-block px-6 py-2 border-1 border-black text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Enviar</button>
                    </form>
                </div>
                <div className="grow w-20 h-20" />
            </div>
        </div>
    );
}