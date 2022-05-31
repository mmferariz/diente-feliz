import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getCitas } from '../../request/request';
import useSnackbar from '../../hooks/useSnackbar';

export const VerCitas = () => {

    const [citas, setCitas] = useState([]);

    const [Snackbar, showSnackbar] = useSnackbar();

    useEffect(() => {
        const getData = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const auxCitas = await getCitas(user.jwt, user.id);
                if(auxCitas.length > 0){
                    let auxFormattedCitas = auxCitas.map((c) => {
                        return {
                            id: c.id,
                            patient: c.attributes.cliente.data.attributes.Nombre_Paciente,
                            clinic: c.attributes.clinica.data.attributes.Direccion_Clinica,
                            doctor: c.attributes.doctor.data.attributes.username,
                            date: c.attributes.Fecha_Cita,
                        }
                    });
                    setCitas(auxFormattedCitas);
                } else {
                    showSnackbar('No hay citas registradas');
                }
            } catch (error) {
                let msj;
                console.log(error);
                if(error.response){
                    if(error.response.data.error){
                        msj = error.response.data.error.message;
                    }
                }
                else{
                    msj = "Error desconocido";
                } 
                showSnackbar(msj);
            }
        };
        getData();
    },[])

    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Cliente',
            selector: row => row.patient,
            sortable: true,
            grow: 2
        },
        {
            name: 'Clínica',
            selector: row => row.clinic,
            sortable: true,
            grow: 2
        },
        {
            name: 'Doctor',
            selector: row => row.doctor,
            sortable: true,
            grow: 2
        },
        {
            name: 'Fecha',
            selector: row => row.date,
            sortable: true
        },
    ];

    return (
        <>
            <Snackbar/>
            <h1 className='py-4 text-blue-600 font-bold text-center text-3xl uppercase'>Citas</h1>
            <DataTable
                title={
                    <p className='text-3xl text-blue-500 font-bold'>Citas Pendientes</p>
                }
                noDataComponent={
                    <div className='flex h-36 items-center'>
                        <p className='text-xl text-blue-500 font-bold'>No hay citas pendientes...</p>
                    </div>
                }
                columns={columns}
                data={citas}
                fixedHeader
                fixedHeaderScrollHeight='80%'
            />
        </>
    )
}