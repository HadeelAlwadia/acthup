import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleThemeAction } from '../../../store/actions/Theme.action'
import { toggleLanguageAction } from '../../../store/actions/Languge.action'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const dispatch=useDispatch()
  return (
  <header>
    <button onClick={()=>dispatch(toggleThemeAction('light'))}>light</button>
    <button onClick={()=>dispatch(toggleThemeAction('dark'))}>dark</button>
    <button onClick={()=>dispatch(toggleThemeAction('system'))}>system</button>
    <button onClick={()=>dispatch(toggleLanguageAction('ar'))}>arbic</button>
    <button onClick={()=>dispatch(toggleLanguageAction('en'))}>engilsh</button>
       
  </header>
  )
}

export default Header
