import { NewUserInfo, stringValue } from "../../@types"
import { Api } from "../../api"
import { goToAntherPage, storeDataInStorage } from "../../utils/functionlty"
import { signUpConstants } from "../constants/signUp.constants"

export const signUpActions={
    startSignUp:()=>({type:signUpConstants.START_SIGNUP}),
    successSignUp:()=>({type:signUpConstants.SUCCESS_SIGNUP}),
    failSignUp:(error:stringValue)=>({type:signUpConstants.FAIL_SIGNUP,payload:error})
}

export const signUpActionsExcution=async(dispatch:any,signUpInfo:NewUserInfo,asynFunction:any)=>{
    dispatch(signUpActions.startSignUp())

    asynFunction(true)
       try{
          await Api.post('/Register',signUpInfo)
          asynFunction(false)
         dispatch(signUpActions.successSignUp());
         storeDataInStorage('emailOfUser',signUpInfo.email)
         goToAntherPage('/auth/verifiedemail')
          
       } catch(error:any){
        asynFunction(false)

        dispatch(signUpActions.failSignUp(error?.response?.data?.message || error.message))
       }
}





