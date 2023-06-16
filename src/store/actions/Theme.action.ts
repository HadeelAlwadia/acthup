import { IToggleThemeAction,theme } from "../../@types";
import { themeConstants } from "../constants/Theme.constants";

export const toggleThemeAction = (payload: theme):IToggleThemeAction => ({ type: themeConstants.TOGGLE_THEME, payload });
