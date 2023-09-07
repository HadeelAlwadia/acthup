
/*
import { verifiedEmailActionsExcution } from '../../redux/actions/verifiedEmail.action'
import { Box, LinkComp, Progress } from '../Common/CustamizeComponent/index.style'
import { getDataFromStorage, handleChangeAnyPropertyComponent } from '../../utils/functionlty'
import React, { FormEvent, useState, useEffect } from 'react'
import { Form, TilteOfForm, SubmitBtn } from './Form.style'
import { Alert, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { stringValue } from '../../@types'
import { verifiedEmailSchema } from '../../utils/validation'



type userInfo='email'|'otp'|'password';

const ResetPasswordForm = () => {
  const {error,loading,nameOfProccess } = useSelector((state: AppState) => state.verifiedEmailInfo)
  const [userInfo, setUserInfo] = useState <{email:string, otp:string,password:string}>({
    email:getDataFromStorage('emailOfUser')||'',
    password:'',
    otp: '',
  });
  const [errorValidation, setErrorValidation] = useState<{email:string, otp:string,password:string}>({
    email: '',
    otp: '',
    password:''
  })
  //process1 =>verfied  email  
  const [startProcess1, setStartProcess1] = useState(false) 
  //process2=> reset password
  const [startProcess2, setStartProcess2] = useState(false) 

  const [isRunSignUp, setIsRunSignUp] = useState(false) 

const isVerfiedEmail=!loading&&startProcess1&&!error&&nameOfProccess!=='emailVerification';

  const haveError = Object.values(errorValidation).find(error => error !== '')? true : false ;



  //this function change property at userinfo object
  const handleChangeproperty = (property: userInfo, value: stringValue) => {
    userInfo[property] = value
    setUserInfo({ ...userInfo })
  }

  //this function make empty for error validation 
  const handleReastPoperty=(property: userInfo)=>{
     errorValidation[property]='';
     setErrorValidation({...errorValidation})
     setIsRunSignUp(false)
  }
  
  useEffect(() => {
    if (!haveError&&isRunSignUp) {
      verifiedEmailActionsExcution(dispatch, userInfo,'resetPassword',setStartProcess2);
 }

 if(!isVerfiedEmail){
  verifiedEmailActionsExcution(dispatch,{email:userInfo.email},'emailVerification',setStartProcess1)
 }
 
  }, [errorValidation])


  const dispatch = useDispatch();
console.log(isVerfiedEmail)
  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    setIsRunSignUp(true)
   // setErrorValidation(verifiedEmailSchema(userInfo))
  }

  const handleVerfiedEmail=(e: FormEvent)=>{  
       e.preventDefault();
       handleChangeAnyPropertyComponent(true,setStartProcess1)
    }


  return (
    <Box width='45%' height='80vh'  style={{    boxShadow: `inset 0px -1px 1px yellow `,margin:'auto'}}>
      <Form id='main' onSubmit={isVerfiedEmail?handleResetPassword:handleVerfiedEmail }>
{    error&&  <Alert severity="error">{error}</Alert>}
<TilteOfForm>reset your password</TilteOfForm>
      
        <label htmlFor='email'>email </label>
        <TextField required
value={userInfo.email}
          type='email'
          id='email'
          placeholder='enter email'
          onChange={e => handleChangeproperty('email', e.target.value)}
        />
        {errorValidation.email && <span>{errorValidation.email}</span>}
  
{isVerfiedEmail&&<>
    <label htmlFor='password'>password</label>
        <TextField
          type='password'
          placeholder='enter password'
          onChange={e => handleChangeproperty('password', e.target.value)}
        />
        {errorValidation.password && <span>{errorValidation.password}</span>}

        <label htmlFor='otp'>otp </label>
        <TextField
          type='input'
          id='otp'
          placeholder='enter otp'
          onChange={e => handleChangeproperty('otp', e.target.value)}
        />
        {errorValidation.otp && <span>{errorValidation.otp}</span>}
        </>}

<SubmitBtn type='submit'>  {  startProcess2?<Progress />:!isVerfiedEmail?'verifed':'reset'}</SubmitBtn>
      </Form>
    </Box>
  )
}

export default ResetPasswordForm;


*/





import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm, SubmitBtn, Input } from './Form.style'
import { Alert, Button, Checkbox, CircularProgress, FormControlLabel, TextField } from '@mui/material'
import { signUpActionsExcution } from '../../redux/actions/signUp.action'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import {  stringValue } from '../../@types'
import { loginSchema } from '../../utils/validation'
import { loginActionsExcution } from '../../redux/actions/login.action'
import { Box, Flex, LinkComp, Progress } from '../Common/CustamizeComponent/index.style'
import { getDataFromStorage, handleChangeAnyPropertyComponent, storeDataInStorage } from '../../utils/functionlty'
import { verifiedEmailActionsExcution } from '../../redux/actions/verifiedEmail.action'
const ResetPasswordForm = () => {
  const {error,loading } = useSelector((state: AppState) => state.loginInfo)
  const [userInfo, setUserInfo] = useState<any>({
    email: getDataFromStorage('emailOfUser'||''),
    password: ''
  });
  const [startSignUp, setStartSignUp] = useState(false) 
  const [isRunSignUp, setIsRunSignUp] = useState(false) 

  const [errorValidation, setErrorValidation] = useState<any>({
    email: '',
    password: '',
  })
  const [isVerfiedEmail,setIsVerfiedEmail]=useState(false)
  const haveError = Object.values(errorValidation).find(error => error !== '')
    ? true
    : false || Object.values(userInfo).find(property => property === '') === ''
    ? true
    : false;
    const [startProcess2, setStartProcess2] = useState(false) 

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
        verifiedEmailActionsExcution(dispatch,{email:userInfo.email},'emailVerification',setStartSignUp).then(
          res=>setIsVerfiedEmail(true)
        )

 }
 if (!haveError&&isRunSignUp&&startProcess2) {
  verifiedEmailActionsExcution(dispatch, userInfo,'resetPassword',setStartProcess2);

 }

  }, [errorValidation,startProcess2])

  const dispatch = useDispatch()
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsRunSignUp(true)
    setErrorValidation(loginSchema(userInfo))
  }
  const handleReset = (e: FormEvent) => {
    e.preventDefault();
setStartProcess2(true)
  }
  return (
    <Box width='45%' height='80vh'  style={{    boxShadow: `inset 0px -1px 1px yellow `,margin:'auto'}}>
      <Form id='main' onSubmit={isVerfiedEmail?handleReset:handleLogin}>
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
             {errorValidation.email && <span>{errorValidation.email}</span>}

     {isVerfiedEmail&&<>
    <label htmlFor='password'>password</label>
        <TextField
          type='password'
          placeholder='enter password'
          onChange={e => handleChangeproperty('password', e.target.value)}
        />
        {errorValidation.password && <span>{errorValidation.password}</span>}

        <label htmlFor='otp'>otp </label>
        <TextField
          type='input'
          id='otp'
          placeholder='enter otp'
          onChange={e => handleChangeproperty('otp', e.target.value)}
        />
        {errorValidation.otp && <span>{errorValidation.otp}</span>}
        </>}
         

     
    

      <SubmitBtn type='submit'>{startSignUp?<Progress   />: isVerfiedEmail?'reset':  'verified'}</SubmitBtn>
      </Form>
    </Box>
  )
}
export default ResetPasswordForm;


