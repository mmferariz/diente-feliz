import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../img/login.png';
import { login } from '../../request/request';
import useSnackbar from '../../hooks/useSnackbar';

export const LoginScreen = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('user');
        if(token){
            navigate('/app', {replace: true});
        }
    }, [])

    const [Snackbar, showSnackbar, closeSnackbar] = useSnackbar();

    const loginSchema = Yup.object().shape({
        email: Yup.string().required('El correo es obligatorio').email('Ingrese un email valido'),
        pass: Yup.string().required('La contraseña es obligatoria').min(6, 'Debe contener mínimo 6 caracteres').max(12, 'Debe contener máximo 12 caracteres')
    });

    const handleLogin = async (values) => {
        try {
            const {email, pass} = values;
            const res = await login(email, pass);
            console.log(res);
            if(res.jwt){
                localStorage.setItem('user', JSON.stringify(res));
                navigate('/app', {replace: true});
            } 
        } catch (error) {
            let msj;
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
    }

    return (
        <>
            <Snackbar/>
            <div className='bg-blue-600 h-screen px-16 py-20'>
                <div className='flex flex-col h-full bg-white  items-center'>
                    <div className="flex-none w-20 h-20" />
                    <div className='grow text-center flex flex-col items-center'>
                        <img className='object-center w-20 flex-none' src={loginImage} alt='loginImage' />
                        <div className='py-2 font-bold text-center text-3xl flex-none'><h1>Inicio de sesión</h1></div>
                        <Formik
                            initialValues={{
                                email: '',
                                pass: ''
                            }}
                            onSubmit={ async (values, {resetForm}) => {
                                await handleLogin(values);
                            }}
                            validationSchema={loginSchema}
                        >{({errors, touched}) => {
                            return (<Form className="grow">
                                <div className="form-group p-2">
                                    <Field type="email" placeholder="Correo" className="p-2" name="email"/>
                                    {errors.email && touched.email ? <div className='bg-red-500 border-2 border-red-700 font-bold p-1 mt-2 text-sm uppercase text-center text-white'>{errors.email}</div> : null}
                                </div>
                                <div className="form-group p-2">
                                    <Field type="password" placeholder="Contraseña" className="p-2" name="pass"/>
                                    {errors.pass && touched.pass ? <div className='bg-red-500 border-2 border-red-700 font-bold p-1 mt-2 text-sm uppercase text-center text-white'>{errors.pass}</div> : null}
                                </div>
                                <input type="submit" value='Enviar' className="border border-1 border-black inline-block px-6 py-2 border-1 border-black text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"/>
                            </Form>);
                        }}</Formik>
                    </div>
                    <div className="grow w-20 h-20" />
                    
                </div>
            </div>
        </>
    );
}