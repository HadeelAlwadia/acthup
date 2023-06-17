import { IToggleLanguageAction } from "../../@types";
import { languageConstants } from "../constants/language.constants";

const defulanguage=localStorage.getItem('lang')||'ar';
export const languageReducer = (inialLanguage:string=defulanguage, action:any) => {
switch (action.type) {
  case languageConstants.TOGGLE_LANGUAGE:{ 
   return (inialLanguage===action.payload?inialLanguage:action.payload)
    break;
}
  default:return inialLanguage
    break;
}
}

