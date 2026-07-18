import React from 'react'
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Program from "./pages/Program";


const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/program" element={<Program />} />
      </Routes>

    </>
  )
}

export default App
