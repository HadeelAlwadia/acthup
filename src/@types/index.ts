import { CSSProperties, ReactComponentElement, ReactElement } from 'react'
import { themeConstants } from '../redux/constants/Theme.constants'
import { AppState } from '../redux/store'
type stringValue = string

type theme = 'light' | 'dark' | 'system'

interface ToggleThemeAction {
  type: themeConstants.TOGGLE_THEME
  payload: theme
}

interface AttributesCourse {
  name: stringValue
  description: stringValue
  active: number
  resource_id: number
  hours: number
  price: number
  rate: number
  avatar: stringValue
  start_date: stringValue
  end_date: stringValue
}
interface CourseData {
  id: number
  isRated: boolean
  user_rate: number
  attributes: AttributesCourse
}

interface ResourceData {
  id: number
  attributes: {
    description:stringValue
    name: stringValue
    number_seats: number
    thumbnail_image: stringValue
    price_by_hour: number
    price_by_day: number
    price_by_weak: number
    price_by_month: number
  }
}

interface Category {
  id: number
  attributes: {
    name: stringValue
    description: stringValue
    icon: stringValue
    banner: stringValue
  }
}

interface SliderData {
  id: number
  type: stringValue
  value: stringValue
  attributes: {
    title: stringValue
    description: stringValue
    image: stringValue
    id: stringValue
    courseHours?: number
  }
}
interface CollectionsProperties{
  name:stringValue,
  childern:ReactElement,
  pathOfLink?:string,
sx:BoxProperty,
sxChildern:GridBoxProperty
}
interface NewUserInfo {
  email: stringValue
  phone: stringValue
  password: stringValue
  password_confirmation: stringValue
  name: stringValue
}

interface UserInfo {
  user_name: string
  token: string
  notification_count: number
}

interface VerifidEmailInfo {
  email: stringValue
  otp?: stringValue
}
interface ResetPasswordInfo extends VerifidEmailInfo{
  password:stringValue,
  otp:stringValue
}

interface LoginInfo {
  email: stringValue
  password: stringValue
}
interface GridBoxProperty {
  height?: stringValue
  background?: stringValue
  width?: stringValue,
  gridTemplateColumns?:stringValue,
  margin?:stringValue
}

interface GeneralData {
  courses: CourseData[]
  silders: SliderData[]
  categories: Category[]
  resource: ResourceData[]
  massage: stringValue
}

interface GeneralDataObject {
  loading: boolean
  generalData: GeneralData | {}
  error: stringValue
}

interface CoursesObject {
  loading: boolean
  data: CourseData[]
  error: string
}

interface CourseObject {
  loading: boolean
  courseDetalies: CourseData
  error: string
}
interface FlexBoxProperty {
  height?: stringValue
  background?: stringValue
  width?: stringValue
}
interface BoxProperty {
  height?: stringValue
  width?: stringValue
  background?: stringValue,
  flexGrow?:stringValue,
  textAlgim?:'center'|'left'|'right',
  margin?:stringValue,
  border?:stringValue,
  padding?:stringValue,
  borderRedius?:stringValue
}
interface IconProperty {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky'
  href: stringValue
  size?: 'small' | 'medium' | 'large'
  edge?: 'start' | 'end' | false
  ariaLabale?: stringValue
  childern: ReactElement
  handleClick?: () => void
}
interface MenuItemProperty {
  name:stringValue
  icon?:ReactElement,
  handleClick?:(value?:stringValue)=>void

}
interface TilteProperty {
 size?:stringValue,
 

}
interface ImgProperty {
  borderRadius?:stringValue }

  interface UserData {
    type:stringValue,
    id: number,
    attributes: {
      name: stringValue,
      email:stringValue
      phone:stringValue
      avater:stringValue|null
 
    }
  }

  interface   UserDataObject{
    loading: boolean
    data: UserData|null
    error: string

  }     
  type String=string;
  type FormData=NewUserInfo|LoginInfo|VerifidEmailInfo
   interface MainFormProperty{
    nameOfForm:String,
    nameOfFormState:'sigUpInfo'|'verifiedEmailInfo'|"loginInfo"
    formData:FormData
     createChildern:(data:FormData,
       handleChangeproperty:(property: stringValue, value: stringValue)=>void,
       handleReastPoperty:(property: stringValue, value: stringValue)=>void,errorValidation:FormData,startProcess:boolean)=>ReactElement,
  
     validtionFunction:(data:FormData)=>void,
     titleOfForm:String,
     fromActionsExcution:(dispatch:any, data:FormData, setStartProcess:(value:boolean)=>void,processName?:String)=>void  }

export type {
  String,
  ImgProperty,
  TilteProperty,
  stringValue,
  ToggleThemeAction,
  AttributesCourse,
  CourseData,
  ResourceData,
  Category,
  SliderData,
  NewUserInfo,
  UserInfo,
  UserData,
  VerifidEmailInfo,
  LoginInfo,
  GeneralDataObject,
  GeneralData,
  CoursesObject,
  IconProperty,
  BoxProperty,
  FlexBoxProperty,
  CourseObject,
  theme,
  MenuItemProperty,
  CollectionsProperties,
  GridBoxProperty,
  ResetPasswordInfo,
  UserDataObject,
  MainFormProperty,
}
