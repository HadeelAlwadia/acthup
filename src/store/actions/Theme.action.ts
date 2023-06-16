import { IthemeAction } from "../../@types";
import { themeConstants } from "../constants/Theme.constants";

export const toggleThemeAction = (payload: string):IthemeAction => ({ type: themeConstants.TOGGLE_THEME, payload });
