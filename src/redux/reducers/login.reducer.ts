import { stringValue } from "../../@types";
import { loginConstants } from "../constants/login.constants";
export interface IuserInfo {
  token: stringValue;
  user_name: stringValue;
  notification_count: number;
}
export interface IloginInfo {
  loading: boolean;
  error: stringValue;
  userData: IuserInfo | null;
}

const loginState: IloginInfo = {
  loading: false,
  error: "",
  userData:null
};

export const loginReducer = (intalState = loginState, action: any) => {
  switch (action.type) {
    case loginConstants.START_LOGIN:
      return { ...intalState, loading: true, error: "" };
      break;
    case loginConstants.SUCCESS_LOGIN:
      return {
        ...intalState,
        loading: false,
        userData: action.payload,
        error: "",
      };
    case loginConstants.FAIL_LOGIN:
      return { ...intalState, loading: false, error: action.payload };
      break;

    default:
      return intalState;
  }
};
