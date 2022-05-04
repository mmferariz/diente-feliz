import { Routes, Route } from 'react-router-dom';
import { Navbar } from "../components/navbar/Navbar"
import { Agendar } from "../components/citas/Agendar"
import { VerCitas } from "../components/citas/VerCitas"
import { Paciente } from '../components/Paciente/Paciente';



export const DashboardRoutes = () =>{
    return(
        <div className='mt-5 container d-flex flex-row'>
            <div className='p-2'>
            <Navbar/>
            </div>
            <div className='px-3 w-100'>
            <Routes> 
                    <Route path="/Agendar" element={<Agendar />} />
                    <Route path="/VerCitas" element={<VerCitas />} />
                    <Route path="/Paciente" element={<Paciente />} />
            </Routes>
            </div>
        </div>
    )
}