import React, { useState } from 'react'

const useSnackbar = () => {

    const [error, setError] = useState('');
    const [animateSnackbar, setAnimateSnackbar] = useState(false);

    const closeSnackbar = () => {
        setError('');
        setAnimateSnackbar(false);
    }

    const showSnackbar = (msj) => {
        setError(msj);
        setTimeout(() => setAnimateSnackbar(true), 100);
        setTimeout(() =>{
            closeSnackbar();
        }, 3000)
    }

    const snackbar = () => (
        error ? <div className='fixed w-screen h-screen top-0 left-0'>
            <div className='flex h-screen items-end'>
                <div className={`
                        bg-red-100 border border-red-400 text-red-700 mx-8 my-8 px-4 py-3 rounded w-4/12 h-fit relative 
                        ${!animateSnackbar ? '-translate-y-7 opacity-40' : ''} transform transition-transform duration-300
                    `}>
                    <strong className="font-bold">Oops! </strong>
                    <span className="block sm:inline">{error}</span>
                    <button onClick={closeSnackbar}>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </button>
                </div>
            </div>
        </div> : null
    );

    return [snackbar, showSnackbar, closeSnackbar];
}

export default useSnackbar