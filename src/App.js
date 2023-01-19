import React, { useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { getUsers, getMensaje } from "./api/getApi";
import Login from "./pages/login/Login";
import ContenedorMensajeria from "./pages/Mensajes/ContenedorMensajeria";

import './App.scss'
import Chats from "./pages/Mensajes/Chats/Chats";


function App() {

  const [data, setData] = useState(null)
  const [dataUsuario, setDataUsario] = useState('')
  const [mensajes, setMensajes] = useState([])


  const getData = async () => {
    try {
      const res = await getUsers()
      setData(res.data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getData()
  }, [])



  const getUsuario = async (id) => {
    try {
      const resUsuario = await getMensaje(id)
      setMensajes(resUsuario.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuario()
  }, [])



  const router = createBrowserRouter

    (
      createRoutesFromElements(

        <>
          <Route path='/' element={<Login data={data} dataUsuario={dataUsuario} setDataUsario={setDataUsario} />} />

          <Route path="/mensajes" element={
            <ContenedorMensajeria
              dataUsuario={dataUsuario} data={data}
              getUsuario={getUsuario}
            />} >
            <Route path="/mensajes/:mensajesid" element={
              <Chats
                dataUsuario={dataUsuario}
                mensajes={mensajes} />
            } />
          </Route>

          <Route path='*' element={<h1>Ruta no encontrada</h1>} />

        </>

      )
    )


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
