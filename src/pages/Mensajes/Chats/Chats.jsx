import React, { useEffect, useState } from 'react'
import './Chats.scss'
import emote from '../img/smile.svg'
import archivos from '../img/paperclip.svg'
import enviar from '../img/send.svg'
import { createUser, mostrarMensaje } from '../../../api/getApi'


const Chats = ({ seccionIniciada, mensajes, dataUser }) => {

  console.log(seccionIniciada);
  const [mensajecitos, setMensajecitos] = useState([])
  const recibeMensaje = dataUser.filter((e) => e !== seccionIniciada)[0]

  const data = mensajes[0]

  const [inputText, setInputText] = useState([])
  const [mensajeEnviado, setMensajeEnviado] = useState([])
  const [value, setValue] = useState('')

  const today = new Date()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMensajeEnviado([...mensajeEnviado, inputText])
    createUser("mensajes", inputText)
    setInputText([])
    setValue("")

  }

  const handleForm = (e) => {
    const texto = e.target.value
    const id = seccionIniciada.id
    setInputText({

      sendby: id,
      date: today.toLocaleDateString(),
      flag: "envido",
      mensaje: texto,
      hora: today.toLocaleTimeString()

    })
    setValue(texto);
  }

  const traerMensajes = async () => {
    const res = await mostrarMensaje("mensajes")
    setMensajecitos(res.data)

  }

  useEffect(() => {
    traerMensajes()
  }, [])



  if (data === undefined || data === null) {

    return (

      <h1 className='cargando'>Cargando...</h1>

    )

  } else {

    return (
      <div className='chats'>
        <div className='chats__containerPerfil'>
          <img className='chats__perfil' src={data.perfil} alt="" />
          <div className='chats__infoUsuario'>
            <h3 >{data.nombre}</h3>
            <p >{data.estado}</p>
          </div>
        </div>
        <div className='chats__containerMensajes'>

          <div className='chats__listaMensajes'>
            {mensajecitos.map((e, index) => {
              return (
                <div key={index}>
                  {seccionIniciada.id === e.sendby
                    ?
                    <div className='chats__listaMensajesEnviador'>
                      <div className='chats__mensaje'>
                        <h3 >{e.mensaje}</h3>
                        <p>{e.hora}</p>
                      </div>
                    </div>
                    :
                    <div key={index} className='chats__mensaje'>
                      <h3 >{e.mensaje}</h3>
                      <p>{e.hour}</p>
                    </div>
                  }

                </div>
              )
            })}

            {mensajeEnviado.map((e, index) => {
              return (
                <div className='chats__listaMensajesEnviador'>
                  <div key={index} className='chats__mensaje'>
                    <h3 >{e.mensaje}</h3>
                    <p>{e.hora}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='chats__input'>
            <form onSubmit={(e) => handleSubmit(e)} className='chats__formulario'>
              <img src={emote} alt="" />
              <img src={archivos} alt="" />
              <input onChange={(e) => handleForm(e)} value={value} placeholder="Mensaje" className='chats__buscador' type="text" />
              <button type='submit'>
                <img src={enviar} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Chats
