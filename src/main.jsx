import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TaskApp } from './TaskApp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>\
      <Routes>
        <Route path="/" element={<TaskApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
