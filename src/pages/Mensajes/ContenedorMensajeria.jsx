import React from 'react'
import { Link, Outlet } from 'react-router-dom';

import './ContenedorMensajeria.scss'
import ListaChats from './ListaChats/ListaChats';

const ContenedorMensajeria = ({ dataUsuario, data, getUsuario }) => {


    const UsuarioValido = () => {

        if (dataUsuario === "") {

            return (
                <div className='noLogin'>
                    <div className='noLogin__contenedor'>
                        <h1 className='noLogin__titulo'>login Requerido</h1>
                        <Link className='noLogin__login' to='/'>Ir al login</Link>
                    </div>
                </div>

            )

        }

        else {

            return (
                <div className='mensajes' >
                    <div className='mensajes__menu'>

                        <div className='mensajes__containerPerfil'>
                            <img className='mensajes__perfil' src={dataUsuario.perfil} alt="" />
                        </div>
                        <div className='mensajes__containerBuscador'>
                            <input className='mensajes__buscador' type="text" placeholder='Buscaro iniciar un nuevo chat' />
                        </div>
                        <ListaChats
                         dataUsuario={dataUsuario}
                            getUsuario={getUsuario}
                            data={data} />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            )
        }
    }




    return (
        <>
            <UsuarioValido />
        </>
    )
}

export default ContenedorMensajeria

