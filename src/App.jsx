import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import './app.css'
import Header from './components/Header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index='Home' element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
