import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Hero.css'



const Home = () => {
  return (
    <div className='bg-white w-4/12 h-4/5 p-2 mt-20 slide-in-left flex flex-col'>

      <div className='w-full p-4 flex items-center justify-start gap-x-8'>
        <img className='rounded-full w-3/12' src="https://i.postimg.cc/J4ddWMpj/Foto-4x4.jpg" alt="" />
        <h1 className='text-4xl w-min text-[#0d0121] titulo'>PABLO FRANCISCO <br /> BELSITO</h1>
      </div>

      <nav className='w-max z-10 ml-10'>
        <ul className='flex flex-col  gap-y-3 mt-8 text-2xl slide-in-left2 w-max'>
          <NavLink to='/Inicio/Inicio'>Inicio</NavLink>
          <NavLink to='/AcercaDeMi/AcercaDeMi'>Acerca de mi</NavLink>
          <NavLink to='/Habilidades/Habilidades'>Habilidades</NavLink>
          <NavLink to='/Experiencia/Experiencia'>Experiencia</NavLink>
          <NavLink to='/Contacto/Contacto'>Contacto</NavLink>

        </ul>
      </nav>

      <a href="https://drive.google.com/file/d/1OqQDv7s9Ld3XidjLZr3FOvcN-1oolO2R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <button className='bg-white ml-10 mt-7 text-black border border-black px-5 py-2 rounded-md transition duration-300 ease-in-out hover:bg-black hover:text-white'>
          DESCARGAR CV
        </button>
      </a>

      <footer>
        <p className='mt-8 text-sm text-center text-black'>Sitio creado por BELCEL design studio</p>
        <p className='mt-2 text-sm text-center text-black'>belcel.devs@gmail.com</p>
      </footer>


    </div>
  )
}

export default Home
