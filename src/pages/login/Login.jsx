import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from '../../api/getApi'

import './Login.scss'

const Login = () => {

  const [alert, setAlert] = useState(false)
  const [data, setData] = useState(null)
  const [celular, setCelular] = useState('')
  const [password, setPassword] = useState('')
  const [nombreUsuario, setNombreUsario] = useState('')





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



  const handleSubmit = (e, nombre) => {
    e.preventDefault()

    const dataCelular = data.find((dataCelular) => dataCelular.celular === celular)
    const dataPassword = data.find((dataPassword) => dataPassword.contraseña === password)
    setNombreUsario(dataPassword)
    
    dataPassword === dataCelular ? setAlert(true) : console.log("dato nulo");
    
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
      {alert &&
        <div className='login__containerAlerta'>
          <div className='login__alerta'>
            <h1 className='login__nombre'>{`Bienvenido ${nombreUsuario.nombre}`}</h1>
            <div className='login__botonesAlerta'>
              <Link className='login__url' to="/mensajes">Continuar</Link>
              <button className='login__devolverLogin' onClick={() => setAlert(false)}>Ingresar con otro usuario</button>

            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Login