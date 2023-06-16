import { IthemeAction } from '../../@types';
import { themeConstants } from '../constants/Theme.constants'
const systemTheme=window.matchMedia("(prefers-color-scheme: dark)")?'dark':'light'
const theme=localStorage.getItem('theme')||systemTheme
export const themeReducer = (inialTheme:string=theme, action:any) => {
switch (action.type) {
  case themeConstants.TOGGLE_THEME:{ 
    const theme=action.payload;
   return (inialTheme===action.payload?inialTheme:theme==='system'?systemTheme?'dark':'light':theme)
    break;
}
  default:return inialTheme
    break;
}
}

