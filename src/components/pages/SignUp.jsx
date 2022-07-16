import FormContainer from '../form/FormContainer'

import { Link, useHistory } from 'react-router-dom'

import React from "react"

import Input from "../form/Input"
import Button from '../layouts/Button'
import Message from '../form/Message'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import './signUp.css'

const ref = React.createRef()

const validationSignUp = yup.object().shape({
  name: yup.string().required('Requirido'),
  email: yup.string().required('Requirido'),
  password: yup.string()
  .required('Requirido')
  .min(1, 'Requirido')
})

const SignUp = () => {
  const history = useHistory()

  const { register, handleSubmit, formState: { errors }} = useForm ({
    resolver: yupResolver (validationSignUp)
  })

  const getRegisterUser = () => JSON.parse(localStorage.getItem('register')) || []

  const setRegisterUser = data => localStorage.setItem('register', JSON.stringify(data))

  const getLoggedUser = () => JSON.parse(localStorage.getItem('logged')) || []

  const setLoggedUser = data => localStorage.setItem('logged', JSON.stringify(data))

  const onSubmit = data => {
    const userRegister = getRegisterUser()
    userRegister.push(data)
    setRegisterUser(userRegister)

    const { email } = data
    const userLogged = getLoggedUser()
    userLogged.push(email)
    setLoggedUser(userLogged)

    history.push('/home')
  }

  return (
    <div className='sign_up_container'>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='Name:'
          name='name'
          placeholder='Name'
          ref={ref}
          {...register('name')}
        />
        <Message 
          text={errors.name?.message}
          className='message_sign_up'
        />

        <Input
          type='text'
          label='E-mail:'
          name='email'
          placeholder='E-mail'
          ref={ref}
          {...register('email')}
          message={errors.email?.message}
        />
        <Message 
          text={errors.name?.message}
          className='message_sign_up'
        />

        <Input
          type='text'
          label='Password:'
          name='password'
          placeholder='Password'
          ref={ref}
          {...register('password')}
          message={errors.password?.message}
        />
        <Message 
          text={errors.name?.message}
          className='message_sign_up'
        />
        
        <Button
          type='submit'
          text='Sign up'
          className='button_model_six'        
        />
      </FormContainer>

      <p>or <Link to='/login'>Login</Link></p>
    </div>
  )
}

export default SignUp