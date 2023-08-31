import React,{useEffect} from 'react'
import { Box, Img, InfoTilte, Title } from '../../components/Common/CustamizeComponent/index.style'
import { AppState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { UserData, stringValue } from '../../@types';
import { UserDataActionsExcution } from '../../redux/actions/userData.action';
import { handleExpiredTokenError } from '../../utils/functionlty';
import MainStructureForAnyPage from '../../components/Common/Main';
import DetaliesOfUser from '../../components/DetaliesOfUser';
import UserProfileForm from '../../components/Form/UserProfileForm';

const Profile = () => {
   const {data,error}:{data:UserData|null,error:stringValue}=useSelector((state:AppState)=>state.userData);
   const dispatch=useDispatch();
   handleExpiredTokenError(error);

 useEffect(()=>{
  UserDataActionsExcution(dispatch,'getUserData');
  },[])

      
  return (
    MainStructureForAnyPage(error,
    (<>
         <DetaliesOfUser data={data}/>
         <UserProfileForm data={data}/>
    </>
),
        data?true:false,
         dispatch
         )
  )
}


export default Profile;





/*

   MainStructureForAnyage(error,(<Box>
   <Img src={data.attributes.avater||'/profile.png'} alt='profile image' borderRadius='50%' width={'200px'} height={'200px'}/>
    <Title>{data.attributes.name}</Title>
    <InfoTilte>{data.attributes.email}</InfoTilte>
    <InfoTilte>{data.attributes.phone}</InfoTilte>
    </Box>),generalData,dispatch)



  */
