import { Api } from "../../api"
import { constantsCourses } from "../constants/courses.constants"

const coursesAction={
  startGetCourses:()=>({type:constantsCourses.START_GET_COURSES}),
  successGetCourses:(payload:any)=>({type:constantsCourses.SUCCESS_GET_COURSES,payload}),
  failGetCourses:(payload:string)=>({type:constantsCourses.FAIL_GET_COURSES}),
}

export const coursesActionExcution=async(dispatch:any)=>{
    dispatch(coursesAction.startGetCourses())
       const courses=await Api.get('courses');
       try{
        dispatch(coursesAction.successGetCourses(courses))
       } catch(error:any){
        dispatch(coursesAction.failGetCourses(error?.massge))
       }
      
    
}