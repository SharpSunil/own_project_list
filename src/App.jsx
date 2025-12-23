import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Merge_pdf from './pages/Merge_PDF/Merge_pdf'
import Header from './componant/Header/Header'
import Pdf_to_powerpoint from './pages/pdf_to_powerpoint/Pdf_to_powerpoint'
import Word_to_pdf from './pages/Word_to_PDF/Word_to_pdf'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/merge-pdf" element={<Merge_pdf />} />
      <Route path="/pdf-to-powerpoint" element={<Pdf_to_powerpoint /> } />
      <Route path="/word-to-pdf" element={ <Word_to_pdf />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
