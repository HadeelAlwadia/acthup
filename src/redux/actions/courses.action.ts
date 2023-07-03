import { Api } from "../../api"
import { constantsCourses } from "../constants/courses.constants"

const coursesActions={
  startGetCourses:()=>({type:constantsCourses.START_GET_COURSES}),
  successGetCourses:(payload:any)=>({type:constantsCourses.SUCCESS_GET_COURSES,payload}),
  failGetCourses:(payload:string)=>({type:constantsCourses.FAIL_GET_COURSES,payload}),
}

export const coursesActionsExcution=async(dispatch:any)=>{
    dispatch(coursesActions.startGetCourses())
       try{
        const {data}=(await Api.get('/courses')).data;

        dispatch(coursesActions.successGetCourses(data))
       } catch(error:any){
        dispatch(coursesActions.failGetCourses(error?.response?.data?.message || error.message))
       }
      
}


