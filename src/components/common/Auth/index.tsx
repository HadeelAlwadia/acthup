import React, { ReactElement } from 'react'
import { stringValue } from '../../../@types'
import { FlexBox } from '../CustamizeComponent/index.style'
import ImageForForm from '../../Form/imageForForm'

export interface AuthPage{
form:ReactElement,
image?:stringValue
}
const AuthPageStructure = ({form,image}:AuthPage) => {
  return (
    <FlexBox>
    {form}
  { image&&<ImageForForm img={image}/>}
    </FlexBox>
  )
}

export default AuthPageStructure
