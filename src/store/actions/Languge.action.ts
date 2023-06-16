import { IToggleLanguageAction,language } from "../../@types";
import { languageConstants } from "../constants/language.constants";

export const toggleThemeAction = (payload: language):IToggleLanguageAction => ({ type: languageConstants.TOGGLE_LANGUAGE, payload });
