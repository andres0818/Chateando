import React, {  useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.scss'

const Login = ({data,dataUsuario,setDataUsario}) => {

  const [modal, setModal] = useState(false)
  const [celular, setCelular] = useState('')
  const [password, setPassword] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault()

    const dataCelular = data.find((dataCelular) => dataCelular.celular === celular)
    password === dataCelular.contraseña ? setModal(true) : console.log("dato malito");

    setDataUsario(dataCelular)

  }

  const handlePhone = (e) => {
    setCelular(e.target.value)
  }

  const handlePasword = (e) => {
    setPassword(e.target.value)
  }


  return (
    <>
      <div className='login'>
        <div className='login__container'>
          <h2 className='login__titulo'>Inicio</h2>
          <form className='login__form'
            onSubmit={handleSubmit}
          >
            <input className='login__formulario' required placeholder='Celular' type="number"
              onChange={handlePhone}
            />
            <input className='login__formulario' required placeholder='Contraseña' type="password"
              onChange={handlePasword}
            />
            <button className='login__submit' type="submit" value="" > Login </button>
          </form>
        </div>
      </div>
      {modal &&
        <div className='login__containerAlerta'>
          <div className='login__alerta'>
            <h1 className='login__nombre'>{`Bienvenido ${dataUsuario.nombre}`}</h1>
            <div className='login__botonesAlerta'>
              <Link className='login__url' to="/mensajes">Continuar</Link>
              <button className='login__devolverLogin' onClick={() => setModal(false)}>Ingresar con otro usuario</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Login