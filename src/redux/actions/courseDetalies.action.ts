import { stringValue } from "../../@types";
import { Api } from "../../api"
import { constantsCourseDetalies } from "../constants/courseDetalies.constants";

const courseDetaliesActions={
  startGetCourseDetalies:()=>({type:constantsCourseDetalies.START_GET_COURSE_DETALIES}),
  successGetCourseDetalies:(payload:any)=>({type:constantsCourseDetalies.SUCCESS_GET_COURSE_DETALIES,payload}),
  failGetCourseDetalies:(payload:string)=>({type:constantsCourseDetalies.FAIL_GET_COURSE_DETALIES,payload}),
}


export const courseDetailesActionsExcution=async(dispatch:any,course_id:stringValue)=>{
    dispatch(courseDetaliesActions.startGetCourseDetalies())
       try{
        const {data}= (await Api.post('/course-details', { course_id })).data;

        dispatch(courseDetaliesActions.successGetCourseDetalies(data))
       } catch(error:any){
        dispatch(courseDetaliesActions.failGetCourseDetalies(error?.response?.data?.message || error.message))
       }
      
}


