import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";




const Contacto = () => {
  return (
    <div className='w-full flex justify-end items-center z-[-999]'>
      <div className='texto-imagen w-1/2 ml-96 p-10 absolute top-20 slide-in-right'>
        <h1 className='text-4xl mb-4 flex items-center gap-x-3 mr-8 text-white'>Contacto <GoArrowLeft className='arrow animate-horizontal' /> </h1>
        <h3 className='text-white text-2xl'>Estemos en contacto!</h3>

        <div className='flex justify-around w-4/12 text-white mt-12 text-4xl'>
          <a target='_blank' href='mailto:pablobelsito@gmail.com'><IoIosMail /></a>
          <a target='_blank' href='https://www.linkedin.com/in/pablo-francisco-belsito-b58b5812/'><FaLinkedin /></a>
          <a target='_blank' href='https://wa.me/1150068279'><FaWhatsapp /></a>
          <a target='_blank' href='https://www.instagram.com/pablofbelsito/?hl=es-la'><FaInstagram /></a>
        </div>


      </div>
    </div>
  )
}

export default Contacto
