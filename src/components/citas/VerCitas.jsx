import React from 'react';
import { useNavigate } from 'react-router-dom';

export const VerCitas = () => {

    const navigate = useNavigate();

    const handleNav = () => {
        navigate('/Paciente', {
            replace: false
        });
    }

    return (
        <div>
            <div className='d-flex py-2 justify-content-center'><h1>Citas Pendientes</h1></div>
            <div className='d-flex py-2 flex-row justify-content-end'>
                <p>Organizar por:  .</p>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Fecha reciente
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ver Paciente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">0</th>
                        <td>Marcos</td>
                        <td>28/04/2021</td>
                        <td><button className='btn btn-primary w-100' onClick={handleNav}>Ver</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jorge</td>
                        <td>25/04/2021</td>
                        <td><button className='btn btn-primary w-100' onClick={handleNav}>Ver</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>David</td>
                        <td>21/04/2021</td>
                        <td><button className='btn btn-primary w-100' onClick={handleNav}>Ver</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}