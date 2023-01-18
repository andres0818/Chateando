import React from "react";
import Login from "./pages/login/Login";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './App.scss'

const router = createBrowserRouter
  (
    createRoutesFromElements(
      <>
        <Route path='/' element={<Login />} />
        <Route path="/mensajes" element={<h1>Lista de mensajes</h1>} />
        <Route path='*' element={<h1>Ruta no encontrada</h1>} />

      </>


    )
  )


function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
