import { verifiedEmailConstants } from "../constants/verifiedEmail.constants";

const verifiedemailState={loading:false,error:'',statusOfReq:'',nameOfProccess:''}
export const verifiedEmailReducer=(intalState=verifiedemailState,action:any)=>{
    switch (action.type) {
           case verifiedEmailConstants.START_VEIFIED_EMAIL:return {...intalState,loading:true,error:"",statusOfReq:''}
            break;
            case verifiedEmailConstants.SUCCESS_VEIFIED_EMAIL:return {...intalState,loading:false,error:'',nameOfProccess:action.payload}
            case verifiedEmailConstants.FAIL_VEIFIED_EMAIL:return {...intalState,loading:false,error:action.payload,statusOfReq:''}
            break;

        default:return intalState;
    }

}



