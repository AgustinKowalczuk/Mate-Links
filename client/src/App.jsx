import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home=lazy(()=>import('./Pages/Home/Home.jsx'))
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Suspense fallback={<div className="loading">Cargando</div>}>
    <Routes>
      <Route path="*" element={<Navigate replace to ='/'/>} />
        <Route path="/" element={<Home />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
