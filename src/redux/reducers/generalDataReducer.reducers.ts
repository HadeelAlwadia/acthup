import { Icategory, Icourse, Iresource, stringValue } from "../../@types";
import { generalDataConstants } from "../constants/generalData.constants";

interface IgeneralData {
  courses: Icourse[];
  silders: [];
  categories: Icategory[];
  resource: Iresource[];
  massage: stringValue;
}
export interface IGeneralDataObject {
  loading: boolean;
  generalData: IgeneralData | null;
  error: stringValue;
}
const generalDataObject: IGeneralDataObject = {
  generalData: null,
  error: "",
  loading: true,
};

export const generalDataReducer = (
  initalState = generalDataObject,
  action: any
) => {
  switch (action.type) {
    case generalDataConstants.START_GET_GENERAL_DATA: {
      return initalState;
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
      return { ...initalState, error: action.payload, loading: false };
      break;
    }
    default:
      return initalState;
  }
};
