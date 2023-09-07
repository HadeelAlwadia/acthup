import { ToggleThemeAction,theme } from "../../@types";
import { themeConstants } from "../constants/Theme.constants";

export const toggleThemeAction = (payload: theme):ToggleThemeAction => ({ type: themeConstants.TOGGLE_THEME, payload });
