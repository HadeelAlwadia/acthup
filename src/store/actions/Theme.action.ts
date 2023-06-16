import { themeConstants } from "../constants/Theme.constants";

export const toggleThemeAction = (payload: string) => ({ type: themeConstants.TOGGLE_THEME, payload });
