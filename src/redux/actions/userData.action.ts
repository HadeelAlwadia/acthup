import { UserData } from "../../@types";
import { Api } from "../../api"
import { userDataConstants } from "../constants/userData.constants";

const userDataActions={
  startGetUserData:()=>({type:userDataConstants.START_GET_USER_DATA}),
  successGetUserData:(payload:UserData)=>({type:userDataConstants.SUCCESS_GET_USER_DATA,payload}),
  failGetUserData:(payload:string)=>({type:userDataConstants.FAIL_GET_USER_DATA,payload}),

}

export const UserDataActionsExcution=async(dispatch:any,type:String,body?:UserData)=>{
    dispatch(userDataActions.startGetUserData())
       try{
            const {data}:{data:UserData}= type==='getUserData'?  (await Api.get('/user-profile')).data:
            (await Api.post('/user-profile',body)).data;

           dispatch(userDataActions.successGetUserData(data))
       } catch(error:any){
        console.log(error?.response?.data?.message )
        dispatch(userDataActions.failGetUserData(error?.response?.data?.message || error.message))
       }
      
}



