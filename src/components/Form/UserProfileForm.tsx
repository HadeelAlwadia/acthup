




import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn, Input } from './Form.style'
import { Alert, Button, Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import {  UserData, stringValue } from '../../@types'
import { loginSchema } from '../../utils/validation'
import { loginActionsExcution } from '../../redux/actions/login.action'
import { Box, Flex, LinkComp, Progress } from '../Common/CustamizeComponent/index.style'
import { getDataFromStorage, handleChangeAnyPropertyComponent, storeDataInStorage } from '../../utils/functionlty'
import { UserDataActionsExcution } from '../../redux/actions/userData.action'
const UserProfileForm = ({data}:{data:UserData|null})  => {
  const {error,loading } = useSelector((state: AppState) => state.loginInfo)
  const [userInfo, setUserInfo] = useState(getDataFromStorage('userInfo')?JSON.parse(getDataFromStorage('userInfo')||''):{
    email: '',
    password: ''
  });
  const [startSignUp, setStartSignUp] = useState(false) 
  const [isRunSignUp, setIsRunSignUp] = useState(false) 

  const [errorValidation, setErrorValidation] = useState<any>({
    email: '',
    password: '',
  })
  
  const [isRememperUser, setIsRememperUser] = useState(true)
  const haveError = Object.values(errorValidation).find(error => error !== '')
    ? true
    : false || Object.values(userInfo).find(property => property === '') === ''
    ? true
    : false;

  //this function change property at userinfo object
  const handleChangeproperty = (property: stringValue, value: stringValue) => {
    userInfo[property] = value
    setUserInfo({ ...userInfo })
  }

  //this function make empty for error validation 
  const handleReastPoperty=(property: stringValue)=>{
     errorValidation[property]='';
     setErrorValidation({...errorValidation})
     setIsRunSignUp(false)
  }
  
  useEffect(() => {
    if (!haveError&&isRunSignUp) {
      UserDataActionsExcution(dispatch, userInfo);
 }

  }, [errorValidation])

  const dispatch = useDispatch()
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsRunSignUp(true)
    setErrorValidation(loginSchema(userInfo))
  }

  return (
    <Box>
      <Form id='main' onSubmit={handleLogin} >
{    error&&  <Alert severity="error">{error}</Alert>}
        <TilteOfForm>Welcome back</TilteOfForm>

      
        <label htmlFor='email'>email </label>
        
        <Input
        value={userInfo.email}
        helperText={errorValidation.email}
          type='email'
          id="email"
          placeholder='enter email'
          onChange={e => handleChangeproperty('email', e.target.value)}
          onClick={()=>handleReastPoperty('email')}
        />

     
        <label htmlFor='password'>password</label>
        <Input id='password'
         value={userInfo.password}
          type='password'
          placeholder='enter password'
          onChange={e => handleChangeproperty('password', e.target.value)}
          onClick={()=>handleReastPoperty('password')}
          helperText={errorValidation.password}
        />
      <SubmitBtn type='submit'>{startSignUp?<Progress />:'change'}</SubmitBtn>
      </Form>
    </Box>
  )
}

export default UserProfileForm;
