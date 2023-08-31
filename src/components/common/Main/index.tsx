import { ReactElement } from "react";
import Loading from "../../Loading";
import Error from "../Error";

const MainStructureForAnyPage=(error:string , childern:ReactElement,haveData:boolean,dispatch?:any)=>{
    console.log(haveData)
return (
    <>
     { error ? <Error errorName={error} dispatch={dispatch} /> : haveData? childern: <Loading />}
    </>
    )
}


export default MainStructureForAnyPage;





