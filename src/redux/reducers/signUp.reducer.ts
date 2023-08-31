import { signUpConstants } from "../constants/signUp.constants";
const signUpState={loading:false,error:'',statusOfReq:''}
export const signUpReducer=(intalState=signUpState,action:any)=>{
    switch (action.type) {
           case signUpConstants.START_SIGNUP:return {...intalState,loading:true,error:"",statusOfReq:''}
            break;
            case signUpConstants.SUCCESS_SIGNUP:return {...intalState,loading:false,statusOfReq:'success',error:''}
            case signUpConstants.FAIL_SIGNUP:return {...intalState,loading:false,error:action.payload,statusOfReq:''}
            break;

        default:return intalState;
    }

}









