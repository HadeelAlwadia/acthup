
/*


import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn } from './Form.style'
import { Alert, CircularProgress, TextField } from '@mui/material'
import { LinkComp } from '../common/custamizeComponent/index.style'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { InewUserInfo, stringValue } from '../../@types'
import { signUpSchema, vrifiedEmailSchema } from '../../utils/validation'
import { vrifiedEmailConstants } from '../../redux/constants/vrifiedEmail.constants'
import { vrifiedEmailActionsExcution } from '../../redux/actions/vrifiedEmail.action'
const VerifiedEmailForm = () => {
  const {error,loading } = useSelector((state: AppState) => state.vrifiedemailInfo);
  const [userInfo, setUserInfo] = useState<any>({
    name: '',
    phone: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const [vrifiedEmailInfo, setvrifiedEmailInfo] = useState<any>({
    name: '',
    otp: ''
  })

  const [startSignUp, setStartSignUp] = useState(false) 
  const [isRunSignUp, setIsRunSignUp] = useState(false) 

  const [errorValidation, setErrorValidation] = useState<any>({
    email: '',
    otp: '',
   
  })



  const haveError = Object.values(errorValidation).find(error => error !== '')
    ? true
    : false || Object.values(vrifiedEmailInfo).find(property => property === '') === ''
    ? true
    : false;



    
  console.log(errorValidation, haveError,error,loading)

  //this function change property at userinfo object
  const handleChangeproperty = (property: stringValue, value: stringValue) => {
    vrifiedEmailInfo[property] = value
    setvrifiedEmailInfo({ ...vrifiedEmailInfo })
  }
  //this function make empty for error validation 
  const handleReastPoperty=(property: stringValue)=>{
     errorValidation[property]='';
     setErrorValidation({...errorValidation})
     setIsRunSignUp(false)
  }
  
  useEffect(() => {
    if (!haveError&&isRunSignUp) {
        vrifiedEmailActionsExcution(dispatch, vrifiedEmailInfo,setStartSignUp);

 }
 

  }, [errorValidation])

  const dispatch = useDispatch()
  const handleVrifiedEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsRunSignUp(true)
    setErrorValidation(vrifiedEmailSchema(vrifiedEmailInfo))
  }


  return (
    <Item>
      <Form id='main' onSubmit={handleVrifiedEmail}>
{    error&&  <Alert severity="error">{error}</Alert>}
        <TilteOfForm>Vrified your Account with us</TilteOfForm>

    
        <label htmlFor='email'>email </label>
        <TextField
          type='email'
          id='email'
          placeholder='enter email'
          onChange={e => handleChangeproperty('email', e.target.value)}
          onClick={()=>handleReastPoperty('email')}
        />
        {errorValidation.email && <span>{errorValidation.email}</span>}

        <label htmlFor='otp'>otp </label>
        <TextField
          type='text'
          id='otp'
          placeholder='enter otp'
          onChange={e => handleChangeproperty('otp', e.target.value)}
          onClick={()=>handleReastPoperty('otp')}
        />
        {errorValidation.otp && <span>{errorValidation.otp}</span>}


  {    startSignUp?<CircularProgress />: <SubmitBtn type='submit'>vrified</SubmitBtn>}
        <LinkComp href='./login'>if have account?login in</LinkComp>
      </Form>
    </Item>
  )
}
export default VerifiedEmailForm

*/


/*
/*

import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn, Input } from './Form.style'
import { Alert, Button, Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import {  stringValue } from '../../@types'
import { loginSchema } from '../../utils/validation'
import { loginActionsExcution } from '../../redux/actions/login.action'
import { Box, Flex, InfoTilte, LinkComp, Progress } from '../Common/CustamizeComponent/index.style'
import { getDataFromStorage, handleChangeAnyPropertyComponent, storeDataInStorage } from '../../utils/functionlty'
import { verifiedEmailActions, verifiedEmailActionsExcution } from '../../redux/actions/verifiedEmail.action'

const VerifiedEmailForm = () => {
  const {error,loading } = useSelector((state: AppState) => state.verifiedEmailInfo);

  const [userInfo,setUserInfo]=useState<any>({

    email:getDataFromStorage('emailOfUser')||'',
    otp: '',
  
  })
  
  const [startSignUp, setStartSignUp] = useState(false) 
  const [isRunSignUp, setIsRunSignUp] = useState(false) 

  const [errorValidation, setErrorValidation] = useState<any>({
    email: '',
    otp: '',
  })
  
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
      verifiedEmailActionsExcution(dispatch, userInfo,'emailVerificationWithOtp',setStartSignUp);
 }

  }, [errorValidation])

  const dispatch = useDispatch()
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsRunSignUp(true)
    setErrorValidation({otp:''})
  }

  return (
    <Box width='40%' height='80vh'  margin='auto'>
      <Form id='main' onSubmit={handleLogin}>
{    error&&  <Alert severity="error">{error}</Alert>}
        <TilteOfForm>Welcome back</TilteOfForm>

      
        <Input
        value={userInfo.otp}
        helperText={errorValidation.otp}
          type='text'
          placeholder='enter otp'
          onChange={e => handleChangeproperty('otp', e.target.value)}
          onClick={()=>handleReastPoperty('otp')}
        />
      <SubmitBtn type='submit'>{startSignUp?<Progress/>: 'verfide'}</SubmitBtn>

     <InfoTilte>Havent recive any code ? <span style={{cursor:'pointer'}} 
   onClick={()=>{
    verifiedEmailActionsExcution(dispatch,{email:userInfo.email},'emailVerification')}}>resent code</span></InfoTilte>      </Form>
   
    </Box>
  )
}
export default VerifiedEmailForm;
*/


import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn, OtpInput } from './Form.style'
import { Alert, CircularProgress, Link, TextField, Typography } from '@mui/material'
import { Box, Btn, Flex, InfoTilte, LinkComp, Progress } from '../Common/CustamizeComponent/index.style'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { NewUserInfo, stringValue } from '../../@types'
import { loginSchema, signUpSchema, verifiedEmailSchema } from '../../utils/validation'
import { loginActionsExcution } from '../../redux/actions/login.action'
import { verifiedEmailActionsExcution } from '../../redux/actions/verifiedEmail.action'
import { getDataFromStorage, handleChangeAnyPropertyComponent } from '../../utils/functionlty'

const VerifiedEmailForm = () => {
  const {error,loading } = useSelector((state: AppState) => state.verifiedEmailInfo);
  const [numberOfOtp,setNumberOfOtp]=useState<any>(['','','','','',''])
  const [activeIndex,setActiveIndex]=useState(0)

  const userInfo={
    email:getDataFromStorage('emailOfUser')||'',
    otp: numberOfOtp.reduce((total:string,num:string):string=>total+num)
  }

  const handleChangeOtp=(value:string,index:number)=>{
    numberOfOtp[index]=value
    setNumberOfOtp([...numberOfOtp])
  }


  const [startSignUp, setStartSignUp] = useState(false) 
  const [isRunSignUp, setIsRunSignUp] = useState(false) 

  useEffect(() => {
    if (isRunSignUp) {
      verifiedEmailActionsExcution(dispatch, userInfo,'emailVerificationWithOtp',setStartSignUp);
 }
 

  }, [isRunSignUp])

  const dispatch = useDispatch()
  const handleVrifiedEmail = (e: FormEvent) => {
    e.preventDefault();
 setIsRunSignUp(true)
  }

  return (
    <Box width='30%' height='80vh' style={{    boxShadow: `inset 0px -1px 1px yellow `,margin:'auto'

    }}> 
      <Form id='main' onSubmit={handleVrifiedEmail} textAlign='center'>
{    error&&  <Alert severity="error">{error}</Alert>}
<TilteOfForm>Verify your email</TilteOfForm>
       <img src='/verified.png' alt='verify your email' width={'100px'} height={'100px'} style={{margin:'0 auto'}}/>

                   <Flex  >
                    {numberOfOtp.map((item:string,index:number)=>
                    <OtpInput   
                    type="text" active={index===activeIndex?true:false}
                     maxLength={1} 
                     value={numberOfOtp[index]}
                        onChange={(e)=>{
                    handleChangeOtp(e.target.value,index)
                        }}
                        onKeyUp={()=>{
                    setActiveIndex (index+1)
                          }}
                        


                  
                        />
)}          
  </Flex> 
                

                

    
 <SubmitBtn type='submit'>{startSignUp?<Progress/>: 'verfide'}</SubmitBtn>

   <InfoTilte>Havent recive any code ? <span style={{cursor:'pointer'}} 
   onClick={()=>{
    verifiedEmailActionsExcution(dispatch,{email:userInfo.email},'emailVerification')}}>resent code</span></InfoTilte>
      </Form>
    </Box>
  )
}

export default VerifiedEmailForm;


