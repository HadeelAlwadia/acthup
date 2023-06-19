import { constantsCourses } from "../constants/courses.constants"

export interface Icourse{

}
export interface  IcoursesObject{
    loading:boolean,
    courses:Icourse[],
    error:string,
}
const coursesObject:IcoursesObject={courses:[],error:'',loading:true}

export const coursesReducer=(initalState=coursesObject,action:any)=>{
 switch(action.type){
    case  constantsCourses.START_GET_COURSES:{
        return initalState
        break;
    } 
    case  constantsCourses.SUCCESS_GET_COURSES:{
        return {...initalState,courses:action.payload,error:'',loading:false}
        break;
    } 
    case  constantsCourses.FAIL_GET_COURSES:{
        return {...initalState,error:action.payload,loading:false}
        break;
    } 
    default:return initalState
 }
}