import Hero from "./componentes/Hero/Hero";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AcercaDeMi from "./componentes/AcercaDeMi/AcercaDeMi"
import Habilidades from "./componentes/Habilidades/Habilidades"
import Experiencia from "./componentes/Experiencia/Experiencia"
import Contacto from "./componentes/Contacto/Contacto"
import Inicio from "./componentes/Inicio/Inicio"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Hero />
        <Routes>

          <Route path='/Inicio/Inicio' element={<Inicio />} />
          <Route path='/AcercaDemi/AcercaDeMi' element={<AcercaDeMi />} />
          <Route path='/Habilidades/Habilidades' element={<Habilidades/>}/>
          <Route path='/Experiencia/Experiencia' element={<Experiencia/>}/>
          <Route path='/Contacto/Contacto' element={<Contacto/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
