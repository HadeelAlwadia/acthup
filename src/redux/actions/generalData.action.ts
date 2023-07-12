import { generalDataConstants } from './../constants/generalData.constants';
import { Api } from "../../api"

const generalDataActions={
  startGetGeneralData:()=>({type:generalDataConstants.START_GET_GENERAL_DATA}),
  successGetGeneralData:(payload:any)=>({type:generalDataConstants.SUCSSES_GET_GENERAL_DATA,payload}),
  failGetGeneralData:(payload:string)=>({type:generalDataConstants.FAIL_GET_GENERAL_DATA,payload}),
}

export const generalDataActionsExcution=async(dispatch:any)=>{
    dispatch(generalDataActions.startGetGeneralData())
       try{
        const {data}=(await Api.get('/home'));

        dispatch(generalDataActions.successGetGeneralData(data))
       } catch(error:any){
        dispatch(generalDataActions.failGetGeneralData(error?.response?.data?.message || error.message))
       }
      
}



