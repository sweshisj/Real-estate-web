import {Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Project from "./pages/Project"
import Client from "./pages/Client"
import Navbar from "./components/Navbar"
import Clientdetails from "./components/Clientdetails"
import Data from "./data/Data"
function App(){
  return(
    <>

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/client" element={<Client />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/:name" element={<Clientdetails />}/>
    </Routes>

    </>
  )
}

export default App
