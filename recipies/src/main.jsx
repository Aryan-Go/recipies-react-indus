import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import Wrapper from "./Wrapper.jsx";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Wrapper>
      <App />
      <ToastContainer position="top-center" />
    </Wrapper>
  </BrowserRouter>
)
