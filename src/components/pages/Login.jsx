import FormContainer from '../form/FormContainer'
import Input from '../form/Input'
import Button from '../layouts/Button'
import Message from '../form/Message'

import { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import './login.css'

const Login = () => {
  const history = useHistory()

  const getLocalStorage = () => JSON.parse(localStorage.getItem('register')) || []

  const setLocalStorage = data => localStorage.setItem('logged', JSON.stringify(data))

  const [valueInput, setValueInput] = useState([])
  const [message, setMessage] = useState()

  const getValue = e => {
    setValueInput({...valueInput, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const user = getLocalStorage()
    const { email, password } = valueInput
    const [ data ] = user

    if ( email == data.email && password == data.password ) {
      history.push('/home')
      setLocalStorage('true')
    } else {
      return setMessage('Incorrect username or password')
    }
  }

  return (
    <div className='login_container'>
      <Message 
        text={message}
        className={message ? 'message_login' : ''}
      />  

      <FormContainer onSubmit={onSubmit}>
      <Input
          type='text'
          label='E-mail:'
          name='email'
          placeholder='E-mail'
          required={true}
          onChange={getValue}
          // value={valueInput}
        />
        <Input
          type='text'
          label='Password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={getValue}
          // value={valueInput}
        />
        <Button 
          type='submit'
          text='Sign up'
          className='button_model_six' 
        />
      </FormContainer>

      <p>or <Link to='/signup'>Sign up</Link></p>
    </div>
  )
}

export default Login