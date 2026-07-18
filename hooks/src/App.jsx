import React from 'react'
import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from "./pages/Home";
import NumberCounter from "./pages/NumberCounter";
import RandomUser from "./pages/RandomUser";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/numbercounter" element={<NumberCounter />} />
        <Route path="/randomuser" element={<RandomUser />} />

      </Routes>
    </>
  )
}

export default App
