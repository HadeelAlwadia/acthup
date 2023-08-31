import {  GeneralDataObject } from "../../@types";
import { generalDataConstants } from "../constants/generalData.constants";



const generalDataObject: GeneralDataObject = {
  generalData: {},
  error: "",
  loading: false,
};

export const generalDataReducer = (
  initalState = generalDataObject,
  action: any
) => {
  switch (action.type) {
    case generalDataConstants.START_GET_GENERAL_DATA: {
      return {...initalState,error:'',data:{},loading:true};
      break;
    }
    case generalDataConstants.SUCSSES_GET_GENERAL_DATA: {
      return {
        ...initalState,
        generalData: action.payload,
        error: "",
        loading: false,
      };
      break;
    }
    case generalDataConstants.FAIL_GET_GENERAL_DATA: {
      return { ...initalState, error: action.payload, loading: false,data:{} };
      break;
    }
    default:
      return initalState;
  }
};
