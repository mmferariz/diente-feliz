import React, { useState } from 'react';
import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';

export const Agendar = () => {

    const [datos, setDatos] = useState({
        Paciente: '',
        Asunto: '',
        Doctor: ''
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
        console.log('enviando datos...' + datos.Paciente + ' ' + datos.Asunto + ' ' + datos.Doctor)
    }

    return (
        <>
            <div className='py-2 font-bold text-center text-3xl'><h1>Agendar Cita</h1></div>
            <div className=''>
                <div className='p-2 text-center'>
                    <form className="" onSubmit={enviarDatos}>
                        <div className="p-2">
                            <input type="text" placeholder="Paciente" className="form-control" onChange={handleInputChange} name="Paciente"></input>
                        </div>
                        <div className="p-2">
                            <input type="password" placeholder="Asunto" className="form-control" onChange={handleInputChange} name="Asunto"></input>
                        </div>
                        <div className="p-2">
                            <input type="password" placeholder="Doctor" className="form-control" onChange={handleInputChange} name="Doctor"></input>
                        </div>
                        <div className="py-4">
                            <Calendar 
                                className='mx-auto'
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Agendar</button>
                    </form>
                </div>
            </div>
        </>
    )
}