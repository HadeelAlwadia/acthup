import { themeConstants } from "../store/constants/Theme.constants";

export type theme = "light" | "dark" | "system";

export interface IToggleThemeAction {
  type: themeConstants.TOGGLE_THEME;
  payload:theme;
}
