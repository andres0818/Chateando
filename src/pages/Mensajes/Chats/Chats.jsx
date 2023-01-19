import React, { useState } from 'react'
import './Chats.scss'
import emote from '../img/smile.svg'
import archivos from '../img/paperclip.svg'
import enviar from '../img/send.svg'
import { createUser } from '../../../api/getApi'


const Chats = ({ mensajes}) => {

  const data = mensajes[0]

  const [inputText, setInputText] = useState([])
  const [mensajeEnviado, setMensajeEnviado] = useState([])

  const today = new Date()
  let value=""

  const handleSubmit = (e) => {
    e.preventDefault()
    setMensajeEnviado([...mensajeEnviado, inputText])
    /* createUser(mensajeEnviado) */
    setInputText([])
    console.log(mensajeEnviado);

  }

  const handleForm = (e) => {
    const texto = e.target.value
    const id = data.id
    console.log(id);
    setInputText({
      id: 0,
      mensaje: texto,
      hora: today.toLocaleTimeString()

    })
    console.log(inputText);
  }




  if (data === undefined || data === null) {

    return (

      <h1 className='cargando'>Cargando...</h1>

    )

  } else {

    return (
      <div className='chats'>
        <div className='chats__containerPerfil'>
          <img className='chats__perfil' src={data.perfil} alt="" />
        </div>
        <div className='chats__containerMensajes'>
          <div className='chats__listaMensajes'>

            {data.mensajes.map((e, index) => {
              return (
                <div key={index} className='chats__mensaje'>
                  <h3 >{e.mensaje}</h3>
                  <p>{e.hour}</p>
                </div>
              )
            })}
            <div className='chats__listaMensajesEnviador'>

              {mensajeEnviado.map((e, index) => {
                return (
                  <div key={index} className='chats__mensaje'>
                    <h3 >{e.mensaje}</h3>
                    <p>{e.hora}</p>
                  </div>
                )
              })}
            </div>
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
