import App from '../App'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from '../pages/Intro'
import MeaningPage from '../pages/MeaningPage'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/intro' element={<Intro/>}/>
        <Route path='/meaning' element={MeaningPage}/>
      </Routes>
    </BrowserRouter>
  )
}