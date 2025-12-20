import React from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Merge_pdf from './pages/Merge_PDF/Merge_pdf'
import Header from './componant/Header/Header'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/merge-pdf" element={<Merge_pdf />} />
    </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App
