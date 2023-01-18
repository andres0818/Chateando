import React from 'react'
import './Chats.scss'
import emote from '../img/smile.svg'
import archivos from '../img/paperclip.svg'
import enviar from '../img/send.svg'


const Chats = ({ dataUsuario }) => {

  
  return (
    <div className='chats'>
      <div className='chats__containerPerfil'>
        <img className='chats__perfil' src={dataUsuario.perfil} alt="" />
      </div>
      <div className='chats__containerMensajes'>
        <div className='chats__listaMensajes'>

          {dataUsuario.mensajes.map((e) => {
            console.log(e);
            return (
              <div className='chats__mensaje'>
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

export default Chats
/* 

const lengthMensajes = e.mensajes.length - 1
const infoMensaje = e.mensajes[lengthMensajes]
 */