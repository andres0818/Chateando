import React from 'react'
import './Chats.scss'
import emote from '../img/smile.svg'
import archivos from '../img/paperclip.svg'
import enviar from '../img/send.svg'


const Chats = ({ mensajes }) => {

  const data = mensajes[0]







  if (data === undefined || data === null) {

    return (

      <h1>Cargando...</h1>

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
            <img src={emote} alt="" />
            <img src={archivos} alt="" />
            <input className='chats__buscador' type="text" />
            <img src={enviar} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Chats
