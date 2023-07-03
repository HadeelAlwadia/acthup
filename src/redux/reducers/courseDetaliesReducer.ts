import { Icourse } from "../../@types";
import { constantsCourseDetalies } from "../constants/courseDetalies.constants";



export interface  IcourseObject{
    loading:boolean,
    courseDetalies:Icourse,
    error:string,
}

const courseObject:IcourseObject={
    courseDetalies:{
    id: 0,
    isRated: false,
    user_rate: 0,
    attributes: {
        name: "",
        description: "",
        active: 0,
        resource_id: 0,
        hours: 0,
        price: 0,
        rate: 0,
        avatar: "",
        start_date: "",
        end_date: ""
    }
},
error:'',
loading:true}

export const courseDetaliesReducer=(initalState=courseObject,action:any)=>{
 switch(action.type){
    case  constantsCourseDetalies.START_GET_COURSE_DETALIES:{
        return initalState
        break;
    } 
    case  constantsCourseDetalies.SUCCESS_GET_COURSE_DETALIES:{
        return {...initalState,courseDetalies:action.payload,error:'',loading:false}
        break;
    } 
    case  constantsCourseDetalies.FAIL_GET_COURSE_DETALIES:{
        return {...initalState,error:action.payload,loading:false}
        break;
    } 
    default:return initalState;
 }
}