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
                            <input type="text" placeholder="Paciente" className="rounded border border-1  p-2" onChange={handleInputChange} name="--Paciente"></input>
                        </div>
                        <div className="p-2">
                            <input type="text" placeholder="Asunto" className="rounded border border-1 p-2" onChange={handleInputChange} name="Asunto"></input>
                        </div>
                        <div className="p-2">
                            <input type="text" placeholder="Doctor" className=" rounded border border-1 p-2" onChange={handleInputChange} name="Doctor"></input>
                        </div>
                        <div className="py-4">
                            <Calendar 
                                className='mx-auto'
                            />
                        </div>
                        <button type="submit" className="border border-1 border-black inline-block px-6 py-2 border-1 border-black text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Agendar</button>
                    </form>
                </div>
            </div>
        </>
    )
}