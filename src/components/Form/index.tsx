import React, { FormEvent, useState, useEffect } from 'react'
import { Form, Item, TilteOfForm } from './Form.style'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { MainFormProperty, stringValue } from '../../@types'

const MainForm = (
  { nameOfForm,
  nameOfFormState,
 formData,
 createChildern,
 validtionFunction,
 titleOfForm,
 fromActionsExcution}:MainFormProperty) => {
  const { error, loading } = useSelector((state: AppState) => state[nameOfFormState])
  const [data, setData] = useState<any>(formData)

  const [startProcess, setStartProcess] = useState(false)
  const [isRunProcess, setIsRunProcess] = useState(false)

  const [errorValidation, setErrorValidation] = useState<any>(validtionFunction(data))


  const haveError = Object.values(errorValidation).find(error => error !== '') ? true: false
   || Object.values(data).find(property => property === '') === ''?true:false

  //this function change property at userinfo object
  const handleChangeproperty = (property: stringValue, value: stringValue) => {
    data[property] = value
    setData({ ...data })
  }
  //this function make empty for error validation
  const handleReastPoperty = (property: stringValue) => {
    errorValidation[property] = ''
    setErrorValidation({ ...errorValidation })
    setIsRunProcess(false)
  }

  useEffect(() => {
    if (!haveError && isRunProcess) {
   
      fromActionsExcution(dispatch, data, setStartProcess)
    }
  }, [errorValidation])


  const dispatch = useDispatch()

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault()
    setIsRunProcess(true)
    setErrorValidation(validtionFunction(data))
  }

  return (
    <Item>
      <Form id='main' onSubmit={handleSignUp}>
        {error && <Alert severity='error'>{error}</Alert>}
        <TilteOfForm>{titleOfForm}</TilteOfForm>
        {createChildern(data,handleChangeproperty,handleReastPoperty,errorValidation,startProcess)}
      </Form>
    </Item>
  )
}

export default MainForm;



