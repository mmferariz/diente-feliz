import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className='mt-5 mx-5 d-flex flex-column align-items-center justify-content-center'>
            <div className='p-2'>
                <h1>Inicio de sesión</h1>
            </div>
            <div className='p-2 text-center'>
                <form className="" onSubmit={enviarDatos}>
                    <div className="form-group p-2">
                        <input type="text" placeholder="Usuario" className="form-control" onChange={handleInputChange} name="usuario"></input>
                    </div>
                    <div className="form-group p-2">
                        <input type="password" placeholder="Contraseña" className="form-control" onChange={handleInputChange} name="contra"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}