import { LoginInfo, UserInfo, stringValue } from "../../@types";
import { Api } from "../../api";
import { createUserDataInCookie, goToAntherPage } from "../../utils/functionlty";
import { loginConstants } from "../constants/login.constants";

export const loginActions={
    startLogin:()=>({type:loginConstants.START_LOGIN}),
    successLogin:(userData:UserInfo)=>({type:loginConstants.SUCCESS_LOGIN,payload:userData}),
    failLogin:(error:stringValue)=>({type:loginConstants.FAIL_LOGIN,payload:error})
}


export const loginActionsExcution=async(dispatch:any,loginInfo:LoginInfo,asynFunction:any)=>{
    dispatch(loginActions.startLogin())

    asynFunction(true);
       try{
          const userData:UserInfo= await (await Api.post('/login',loginInfo)).data
          asynFunction(false)
             dispatch(loginActions.successLogin(userData));
             createUserDataInCookie(userData,24)
             goToAntherPage('/')
              

       } catch(error:any){
        asynFunction(false)
        dispatch(loginActions.failLogin(error?.response?.data?.message || error.message))
       }
}
