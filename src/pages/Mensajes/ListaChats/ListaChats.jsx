import React from 'react'
import { Link } from 'react-router-dom'

import "./ListaChats.scss"

function ListaChats({ data,getUsuario,dataUsuario,ultimoMensaje }) {

    

    const mensajes=ultimoMensaje.filter((e)=>e.sendby!==dataUsuario.id)
    const lengthMensajes =mensajes.length 
    const mostrarUltimoMensaje= mensajes[lengthMensajes-1]
    console.log(mostrarUltimoMensaje);
    
   const chatsLista= data.filter((e)=>e!==dataUsuario)

    return (

        <nav>
            <ul className='listaChats'>
                {data === null ? <h1>Cargando...</h1> :
                    chatsLista.map((e, index) => {
                        const lengthMensajes = e.mensajes.length - 1
                        const infoMensaje = e.mensajes[lengthMensajes]
                        return (

                            <li key={index} className='listaChats__li'>
                                <Link onClick={()=>getUsuario(e.id)} className='listaChats__link' to={`/mensajes/${e.id}`}>
                                    <img className='listaChats__perfil' src={e.perfil} alt="" />
                                    <div className='listaChats__data'>
                                        <div className='listaChats__info' >
                                            <h1> {e.nombre} </h1>
                                            {mostrarUltimoMensaje===undefined?<p></p>:<p>{mostrarUltimoMensaje.date}</p>}
                                        </div>
                                        {mostrarUltimoMensaje===undefined?<p></p>:<p>{mostrarUltimoMensaje.mensaje}</p>}
                                    </div>
                                </Link>
                            </li>

                        )
                    })}
            </ul>
        </nav>
    )
}

export default ListaChats