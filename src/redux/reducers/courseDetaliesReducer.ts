import { createSlice } from "@reduxjs/toolkit";
import { CourseObject } from "../../@types";
import { constantsCourseDetalies } from "../constants/courseDetalies.constants";




const courseObject:CourseObject={
    courseDetalies:{ 
    id: 0,
    isRated: false,
    user_rate: 0,
    attributes: {
        name: "",
        description: "",
        active: 0,
        hours: 0,
        price: 0,
        rate: 0,
        avatar: "",
        start_date: "",
        end_date: "",
        resource_id: 0
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
    case  constantsCourseDetalies.FAIL_GET_COURSE_DETALIES:{return{
        ...initalState,loading:false,error:action.payload
    }
break;}
    default:return initalState;
 }
}

/*
const coursDelaiesSlices=createSlice('',{},reducer:{
    get
})/*/