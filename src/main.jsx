import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TaskApp } from './TaskApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>,
)
