import React from 'react';
import DataTable from 'react-data-table-component';
import loginImage from '../../img/login.png';
import pBot from '../../img/piezasBot.png';
import pTop from '../../img/piezasTop.png';

const columnsH = [
    {
        name: 'IdCita',
        selector: row => row.id,
    },
    {
        name: 'Asunto',
        selector: row => row.asunto,
    },
    {
        name: 'Fecha',
        selector: row => row.date,
    },
];

const dataH = [
    {
        id: 1,
        asunto: "Limpieza dental",
        date: Date.now(),
    },
    {
        id: 2,
        asunto: "Brackets",
        date: Date.now(),
    },
    {
        id: 3,
        asunto: "Caries en muela",
        date: Date.now(),
    },
]

const columnsP = [
    {
        name: 'NumPago',
        selector: row => row.id,
    },
    {
        name: 'Pagado',
        selector: row => row.paid,
    },
    {
        name: 'Restante',
        selector: row => row.restant,
    },
];

const dataP = [
    {
        id: 1,
        paid: 800,
        restant: 2000,
    },
    {
        id: 2,
        paid: 500,
        restant: 1500,
    },
    {
        id: 3,
        paid: 1000,
        restant: 1500,
    },
]

export class Paciente extends React.Component {

    state = {
        active: 'none',
        content: ''
    };

    changeContent = (newContent, newActive) => {
        this.setState({
            active: newActive,
            content: newContent
        });
    };

    render() {
        return (
            <div>
                <h1 className='py-2 font-bold text-center text-3xl'>Paciente</h1>
                <form className='py-4'>
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar paciente..." required/>
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                <div className='flex h-full justify-around items-center'>
                    <div className='border border-1 border-black w-2/5 p-5 flex flex-col items-center'>
                        <img className='p-2 object-center w-20 flex-none' src={loginImage} alt='loginImage' />
                        <div className='border border-1 border-black'>
                            <p className='p-2 font-bold text-center'>Información</p>
                            <div className="p-2 items-center flex flex-col">
                                <input type="text" placeholder="Nombre" className="p-2" name="name"></input>
                                <input type="text" placeholder="Apellidos" className="p-2" name="ap"></input>
                                <input type="text" placeholder="Edad" className="p-2" name="ed"></input>
                                <input type="text" placeholder="Alergias" className="p-2" name="alrgs"></input>
                                <div className='py-2 flex'>
                                    <button type="submit" className="border border-1 border-black inline-block px-6 py-2 border-1 border-black text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Modificar</button>
                                    <button type="submit" className=" border border-1 border-blackinline-block px-6 py-2 border-1 border-black text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 p-5 flex justify-between flex-col items-center'>
                        <div>{this.state.content}</div>
                        <div className=''>
                            <button onClick={() => this.changeContent(
                                (<div className='flex justify-center'>
                                    <img className='object-center scale-75' src={pBot} alt='dental' />
                                    <img className='object-center scale-75' src={pTop} alt='dental' />
                                </div>), 'Piezas'
                            )}
                                className={this.state.active === 'Piezas' ? ' border border-1 border-black mt-2 py-2 px-3 bg-blue-500 text-white' : 'mt-2 py-2 px-3 bg-white text-black border border-1 border-black rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'}>
                                Piezas Dentales</button>
                            <button onClick={() => this.changeContent(
                                <DataTable
                                    columns={columnsH}
                                    data={dataH}
                                />, 'Historial'
                            )}
                                className={this.state.active === 'Historial' ? 'border border-1 border-black mt-2 py-2 px-3 bg-blue-500 text-white' : 'mt-2 py-2 px-3 bg-white text-black border border-1 border-black rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'}>
                                Historial</button>
                            <button onClick={() => this.changeContent(
                                <DataTable
                                    columns={columnsP}
                                    data={dataP}
                                />, 'Pagos'
                            )}
                                className={this.state.active === 'Pagos' ? ' border border-1 border-black mt-2 py-2 px-3 bg-blue-500 text-white' : 'mt-2 py-2 px-3 bg-white text-black border border-1 border-black rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'}>
                                Pagos</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}