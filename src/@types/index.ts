import { themeConstants } from "../store/constants/Theme.constants";
import { languageConstants } from "../store/constants/language.constants";

export type theme = "light" | "dark" | "system";
export type language='ar'|'en';
export interface IToggleThemeAction {
  type: themeConstants.TOGGLE_THEME;
  payload:theme;
}
export type stringValue=string
export interface IToggleLanguageAction {
    type: languageConstants.TOGGLE_LANGUAGE;
    payload:language;
  }