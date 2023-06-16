import { IToggleLanguageAction } from "../../@types";
import { languageConstants } from "../constants/language.constants";

export const languageReducer = (inialLanguage:string='ar', action:any) => {
switch (action.type) {
  case languageConstants.TOGGLE_LANGUAGE:{ 
   return (inialLanguage===action.payload?inialLanguage:action.payload)
    break;
}
  default:return inialLanguage
    break;
}
}

