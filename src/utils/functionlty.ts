import { LoginInfo, UserInfo, stringValue } from '../@types'

const createUserDataInCookie = (value: UserInfo, expires: number) => {
  const date = new Date()
  date.setTime(date.getTime() + expires * 60 * 60 * 1000)
  document.cookie = `user-data=${JSON.stringify( value )}; expires=${date.toUTCString()};path=/`
} 

const getUsetInfoFromCookie = (): UserInfo  => {
  const userDataString = document.cookie.split(';').find(name => 
    name.substring(0, name.indexOf('=')).trim() === 'user-data')
    ?.split('=')[1]
  const userDataObject = userDataString ?JSON.parse(userDataString) : {user_name:'',token:'',notification_count:0}

  return userDataObject;
}

const deleteUserDataFromCookie = () =>
  document.cookie ="user-data=''; expires=Thu, 18 Dec 2010 12:00:00 UTC;path=/";

    const handleChangeAnyPropertyComponent=(value:any,handleChangeProperty:(value:any)=>void)=>handleChangeProperty(value)

const userData=getUsetInfoFromCookie();

// this dunction to test value of validtion form
const testValue = (typeOfValue: stringValue,value: stringValue):boolean => {
  const validEmailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const validPasswordRegex =/^[A-Za-z]\w{7,22}$/


  let isValid = true

  switch (typeOfValue) {
    case 'email':
      isValid =validEmailRegex.test(value)

      break
    case 'phone':
       isValid =!isNaN(Number(value))&&value.length>9
      break
    case 'password':isValid=value.length>=6?true:false;
      break
      case 'otp':
        isValid = !(isNaN(Number(value)) )
        break
    default:
   
  }
  
return isValid;
}

const putDataInStorage=(nameOfData:stringValue,value:stringValue)=>localStorage.setItem(nameOfData,value)
const getDataFromStorage=(nameOfData:stringValue)=>localStorage.getItem(nameOfData)

const storeDataInStorage = (nameOfData:stringValue,value:stringValue|LoginInfo) => {
  typeof value==='string'?putDataInStorage(nameOfData,value):putDataInStorage(nameOfData,JSON.stringify(value))
}

const handleExpiredTokenError=(error:string)=>error==='Unauthenticated.'?window.location.href='/auth/login':''

const goToAntherPage=(path:stringValue)=>window.location.href=path
export {
  createUserDataInCookie,
  getUsetInfoFromCookie,
  deleteUserDataFromCookie,
  testValue,
  storeDataInStorage,
  getDataFromStorage,
  userData,
  handleChangeAnyPropertyComponent,
  goToAntherPage,
  handleExpiredTokenError
}
