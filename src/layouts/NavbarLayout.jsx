import { Outlet } from 'react-router-dom';
import { Navbar } from "../components/navbar/Navbar"



export const NavbarLayout = () =>{
    return(
        <div className='bg-blue-600 h-screen px-16 py-20'>
            <div className='flex h-full bg-white'>
                <div className='w-1/6 p-2'>
                    <Navbar/>
                </div>
                <div className='w-5/6 px-3 items-center'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}