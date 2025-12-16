import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Merge_pdf from './pages/Merge_PDF/Merge_pdf'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/merge-pdf" element={<Merge_pdf />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
