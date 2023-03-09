import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navbar from './Components/Navbar'
import MainPage from './routes/MainPage.jsx'
import Gallery from './routes/Gallery.jsx'
import Information from './routes/Info.jsx'
import FAQs from './routes/FAQs.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Information />} />
        <Route path="/preguntas-frecuentes" element={<FAQs />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
