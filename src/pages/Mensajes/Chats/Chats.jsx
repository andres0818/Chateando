import React, { useState } from 'react'
import './Chats.scss'
import emote from '../img/smile.svg'
import archivos from '../img/paperclip.svg'
import enviar from '../img/send.svg'
import { createUser } from '../../../api/getApi'


const Chats = ({ mensajes }) => {

  const data = mensajes[0]
  const [inputText, setInputText] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    createUser(inputText)
  }

  const handleForm = (e) => {
    setInputText(e.target.value)
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
          </div>
          <div className='chats__input'>
            <form onSubmit={(e) => handleSubmit(e)} className='chats__formulario'>
              <img src={emote} alt="" />
              <img src={archivos} alt="" />
              <input onChange={(e) => handleForm(e)} value={inputText} placeholder="Mensaje" className='chats__buscador' type="text" />
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
