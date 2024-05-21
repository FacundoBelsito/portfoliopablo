import React from 'react'
import './Habilidades.css'
import { GoArrowLeft } from "react-icons/go";

const Habilidades = () => {
  return (
    <div className='w-full flex justify-end items-center z-[-999]'>
      <div className='texto-imagen w-6/12  p-10 absolute top-20 slide-in-right'>
        <h1 className='text-5xl mb-8 flex items-center gap-x-3 text-white'>Habilidades <GoArrowLeft className='arrow animate-horizontal' /> </h1>
        <ul className='text-gray-200 text-2xl ml-12'>
          <li>Liderazgo y gestión de equipos</li>
          <li>Comunicación</li>
          <li>Habilidades organizativas</li>
          <li>Resolución de problemas</li>
          <li>Gestión de la seguridad</li>
          <li>Conciencia tecnológica</li>
          <li>Enfoque de sostenibilidad y el impacto</li>
          <li>Gestión de ocupación y factores humanos</li>
          <li>Operaciones y mantenimiento</li>
          <li>Gestión de la información y la tecnología de las instalaciones</li>
          <li>Gestión de riesgos</li>
          <li>Rendimiento y calidad</li>
          <li>Liderazgo y estrategia</li>
          <li>Conocimiento de Bienes inmuebles y habilitaciones</li>
          <li>Gestión de proyectos</li>
          <li>Finanzas y negocios</li>
        </ul>
      </div>
    </div>
  )
}

export default Habilidades
