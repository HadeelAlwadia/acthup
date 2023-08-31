import React from 'react'
import { Box, Progress } from '../Common/CustamizeComponent/index.style';
import {  Title } from "../Common/CustamizeComponent/index.style";


const Loading = () => <Box height='100vh' background='white'><Progress/><Title>loading...</Title></Box>;

export default Loading
