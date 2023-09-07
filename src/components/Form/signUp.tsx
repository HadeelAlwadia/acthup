/*

import { ReactElement, JSXElementConstructor } from "react"
import MainForm from "."
import { NewUserInfo, LoginInfo, VerifidEmailInfo } from "../../@types"
import { TextField } from "@mui/material"
import { SubmitBtn } from "./Form.style"
import { LinkComp, Progress } from "../Common/CustamizeComponent/index.style"
import { signUpSchema } from "../../utils/validation"


const SignUpChildern=(data, handleChangeproperty, handleReastPoperty, errorValidation, startProcess, nameOfForm)=><>
 <label htmlFor='username'>Username </label>
        <TextField
          value={data.name}
          type='text'
          id='username'
          placeholder='enter username'
          onChange={e => handleChangeproperty('name', e.target.value)}
          onClick={() => handleReastPoperty('name')}
          helperText={errorValidation.name}
        />
        <label htmlFor='email'>email </label>
        <TextField
          value={data.email}
          type='email'
          id='email'
          placeholder='enter email'
          onChange={e => handleChangeproperty('email', e.target.value)}
          onClick={() => handleReastPoperty('email')}
          helperText={errorValidation.email}
        />

        <label htmlFor='phoneNumber'>phone </label>
        <TextField
          value={data.phone}
          type='text'
          id='phoneNumber'
          placeholder='###-###-####'
          onChange={e => handleChangeproperty('phone', e.target.value)}
          onClick={() => handleReastPoperty('phone')}
          helperText={errorValidation.phone}
        />

        <label htmlFor='password'>password</label>
        <TextField
          value={data.password}
          type='password'
          placeholder='enter password'
          onChange={e => handleChangeproperty('password', e.target.value)}
          onClick={() => handleReastPoperty('password')}
          helperText={errorValidation.password}
        />

        <label htmlFor='confirmPassword'> confirm Password </label>
        <TextField
          value={data.password_confirmation}
          type='password'
          helperText={errorValidation.password_confirmation}
          id='confirmPassword'
          placeholder='confirm Password'
          onChange={e =>
            handleChangeproperty('password_confirmation', e.target.value)
          }
          onClick={() => handleReastPoperty('password_confirmation')}
        />
            
        <SubmitBtn type='submit'>
          {startProcess ? <Progress /> : 'SignUp'}
        </SubmitBtn>

        <LinkComp href='./login'>Already have an account? Log in</LinkComp>
        </>


export const SignUpForm = () =>
 <MainForm
    nameOfForm={""} 
    nameOfFormState={"sigUpInfo"}
    formData={{
      name: '',
      phone: '',
      email: '',
      password: '',
      password_confirmation: ''
    }}
    
    createChildern={SignUpChildern}
    validtionFunction={signUpSchema } 
    titleOfForm={"Create your account"}
    fromActionsExcution={ (dispatch, data, setStartProcess)=>{} }
  
  />*/
  import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn } from './Form.style'
import { Alert, CircularProgress, TextField } from '@mui/material'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { NewUserInfo, stringValue } from '../../@types'
import { signUpSchema } from '../../utils/validation'
import { LinkComp, Progress } from '../Common/CustamizeComponent/index.style'

const SignUpForm = () => {
  const { error, loading } = useSelector((state: AppState) => state.sigUpInfo)
  const [userInfo, setUserInfo] = useState<any>({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [startSignUp, setStartSignUp] = useState(false)
  const [isRunSignUp, setIsRunSignUp] = useState(false)

  const [errorValidation, setErrorValidation] = useState<any>({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const haveError = Object.values(errorValidation).find(error => error !== '')
    ? true
    : false || Object.values(userInfo).find(property => property === '') === ''
    ? true
    : false

  //this function change property at userinfo object
  const handleChangeproperty = (property: stringValue, value: stringValue) => {
    userInfo[property] = value
    setUserInfo({ ...userInfo })
  }
  //this function make empty for error validation
  const handleReastPoperty = (property: stringValue) => {
    errorValidation[property] = ''
    setErrorValidation({ ...errorValidation })
    setIsRunSignUp(false)
  }

  useEffect(() => {
    if (!haveError && isRunSignUp) {
      signUpActionsExcution(dispatch, userInfo, setStartSignUp)
    }
  }, [errorValidation])

  const dispatch = useDispatch()
  const handleSignUp = (e: FormEvent) => {
    e.preventDefault()
    setIsRunSignUp(true)
    setErrorValidation(signUpSchema(userInfo))
  }

  return (
    <Item>
      <Form id='main' onSubmit={handleSignUp}>
        {error && <Alert severity='error'>{error}</Alert>}
        <TilteOfForm>Create your account</TilteOfForm>
            
        <label htmlFor='username'>Username </label>
        <TextField
          value={userInfo.name}
          type='text'
          id='username'
          placeholder='enter username'
          onChange={e => handleChangeproperty('name', e.target.value)}
          onClick={() => handleReastPoperty('name')}
          helperText={errorValidation.name}
        />
        <label htmlFor='email'>email </label>
        <TextField
          value={userInfo.email}
          type='email'
          id='email'
          placeholder='enter email'
          onChange={e => handleChangeproperty('email', e.target.value)}
          onClick={() => handleReastPoperty('email')}
          helperText={errorValidation.email}
        />

        <label htmlFor='phoneNumber'>phone </label>
        <TextField
          value={userInfo.phone}
          type='tel'
          id='phoneNumber'
          placeholder='###-###-####'
          onChange={e => handleChangeproperty('phone', e.target.value)}
          onClick={() => handleReastPoperty('phone')}
          helperText={errorValidation.phone}
        />

        <label htmlFor='password'>password</label>
        <TextField
          value={userInfo.password}
          type='password'
          placeholder='enter password'
          onChange={e => handleChangeproperty('password', e.target.value)}
          onClick={() => handleReastPoperty('password')}
          helperText={errorValidation.password}
        />

        <label htmlFor='confirmPassword'> confirm Password </label>
        <TextField
          value={userInfo.password_confirmation}
          type='password'
          helperText={errorValidation.password_confirmation}
          id='confirmPassword'
          placeholder='confirm Password'
          onChange={e =>
            handleChangeproperty('password_confirmation', e.target.value)
          }
          onClick={() => handleReastPoperty('password_confirmation')}
        />
            
        <SubmitBtn type='submit'>
          {startSignUp ? <Progress /> : 'SignUp'}
        </SubmitBtn>

        <LinkComp href='./login'>Already have an account? Log in</LinkComp>
      </Form>
    </Item>
  )
}


export default SignUpForm;

  


 

  