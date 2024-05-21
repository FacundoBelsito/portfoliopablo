import React from 'react'
import './AcercaDeMi.css'
import { GoArrowLeft } from "react-icons/go";


const AcercaDeMi = () => {
    return (
        <div className='w-11/12 flex justify-end absolute top-44 right-0 z-[-999]'>
            <div className='w-8/12 texto-imagen2 text-white p-8 flex slide-in-right'>
                <div>
                    <h1 className='text-4xl mb-4 flex items-center gap-x-3'>Acerca de mi <GoArrowLeft className='arrow animate-horizontal' /> </h1>
                    <p className='text-xl '>Soy Facility Manager, integro el IFMA (International Facility Management Association) especialmente formado para gestionar integralmente uno o varios edificios o unidades de negocio. Con una trayectoria probada en el mercado argentino, he adquirido sólidas habilidades en el planeamiento edilicio, financiero y en todas las áreas de soporte necesarias para garantizar el óptimo funcionamiento de las instalaciones.

                        Mi fortaleza radica en la capacidad para formar equipos y liderar a profesionales hacia el logro de objetivos compartidos. He demostrado una gran agilidad para adaptarme a los cambios y a las condiciones macroeconómicas, lo que me ha permitido mantener operaciones eficientes en entornos dinámicos.

                        Destaco por mi habilidad para comprender y satisfacer las necesidades de los clientes, convirtiendo sus requerimientos en acciones concretas que optimizan la gestión de los espacios y recursos. Mi enfoque orientado al cliente y mi compromiso con la excelencia operativa me han permitido establecer relaciones sólidas y duraderas con diversas partes interesadas.</p>
                </div>

            </div>
        </div>
    )
}

export default AcercaDeMi



