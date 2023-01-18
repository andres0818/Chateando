import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <h2 className='login__titulo'>Inicio</h2>
        <form className='login__form'>
          <input className='login__formulario' required placeholder='Celular' type="number" />
          <input className='login__formulario' required placeholder='Contraseña' type="password" />
          <button className='login__submit' type="submit" value="" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login