import {LoginInfo,NewUserInfo, VerifidEmailInfo} from '../@types'
import { testValue } from './functionlty'

const signUpSchema = ({email, name,password,password_confirmation,phone}: NewUserInfo): NewUserInfo => {
  let errors: NewUserInfo = {
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    name: ''
  }
  
  if (!name) {
    errors.name = 'Cannot be blank'
  }

  if (!email) {
    errors.email = 'Cannot be blank'
  } else if (!testValue('email',email)) {
    errors.email = 'Invalid email format'
  }

  if (!phone) {
    errors.phone = 'Cannot be blank'
  } else if (!testValue('phone',phone)) {
    errors.phone = '  the expected phone format is like ##########'
  }

  if (!password) {
    errors.password = 'Cannot be blank'
  } else if (!testValue('password',password)) {
    errors.password = ' Password must contain 9 to 20 '
  } 

  if (!password_confirmation) {
    errors.password_confirmation = 'Cannot be blank'
  } else if (password_confirmation !== password) {
    errors.password_confirmation = 'confirmation Password must match with password'
  }

  return errors
}

const loginSchema = ({ email, password }: LoginInfo) => {
  let errors: LoginInfo = {
    email: '',
    password: ''
  }

  if (!email) {
    errors.email = 'Cannot be blank'
  } else if (!testValue('email',email)) {
    errors.email = 'Invalid email format'
  }

  if (!password) {
    errors.password = 'Cannot be blank'
  } else if (!testValue('password',password)) {
    errors.password = ' Password must contain 9 to 20 char'
  } 

  return errors
}

const verifiedEmailSchema = ({ otp }: VerifidEmailInfo): VerifidEmailInfo => {
  let errors: VerifidEmailInfo = {
    email: '',
    otp: ''
  }

  if (!otp) {
    errors.otp = 'Cannot be blank'
  } else if (!testValue('otp',otp)) {
    errors.otp = 'otp format error'
  }

  return errors
}



export { signUpSchema, verifiedEmailSchema, loginSchema }
