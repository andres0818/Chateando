import React from 'react'
import { Link } from 'react-router-dom'
import "./ListaChats.scss"

function ListaChats({ data,getUsuario,dataUsuario }) {

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
                                            <p>{infoMensaje.date}</p>
                                        </div>
                                        <p>✔✔{infoMensaje.mensaje} </p>
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