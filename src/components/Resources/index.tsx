import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { Category, ResourceData } from '../../@types';
import Catergory from './Resource';

import Collections from '../Layout/collections';
import Resource from './Resource';

const Resources = ({ resources }: { resources: ResourceData[] }) => {
    return (
      <Collections name={'resources'} childern={<>
        {resources.map((resource: ResourceData) => (
          <Resource {...resource} />
        ))}
      </>}
      sx={{}}
      sxChildern={{margin:'20px auto',width:"75%",gridTemplateColumns:'auto auto auto'}} 
      />)}

export default Resources;







