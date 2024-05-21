import React from 'react'
import { NavLink } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";

const Inicio = () => {
  return (
    <div className='w-11/12 flex justify-end absolute top-44 right-0 z-[-999]'>
            <div className='w-8/12 texto-imagen2 text-white p-8 flex ml-12 slide-in-right'>
                <div>
                    <h1 className='text-4xl mb-4 flex items-center gap-x-3  '>Facility Manager <GoArrowLeft className='arrow animate-horizontal' /> </h1>
                    <p className='text-xl '>Mi nombre es Pablo Belsito, profesional en Facility Management. Me especializo en optimizar y mantener instalaciones para crear entornos de trabajo seguros, eficientes y sostenibles, siempre con un enfoque en la excelencia y la satisfacción del cliente.</p>
                </div>

            </div>
        </div>
  )
}

export default Inicio
