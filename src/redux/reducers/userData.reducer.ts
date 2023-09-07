import { UserDataObject } from "../../@types";
import { userDataConstants } from "../constants/userData.constants";


const userDataObject:UserDataObject={data:{
    type: "",
    id: 0,
    attributes: {
        name: "",
        email: "",
        phone: "",
        avater: null
    }
},error:'',loading:false}

export const userDataReducer=(initalState=userDataObject,action:any)=>{
 switch(action.type){
    case  userDataConstants.START_GET_USER_DATA:{
        return {...initalState,loading:true}
        break;
    } 
    case  userDataConstants.SUCCESS_GET_USER_DATA:{
        return {...initalState,data:action.payload,loading:false}
        break;
    } 
    case  userDataConstants.FAIL_GET_USER_DATA:{
        return {...initalState,error:action.payload,loading:false}
        break;
    } 

    default:return initalState
 }

}