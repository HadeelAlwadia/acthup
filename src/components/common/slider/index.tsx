import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Islider } from '../../../@types';
import { MoveBtnContineer, Slide, SlideImage ,SliderContineer} from './Slider.style';
import {ArrowBackIos,ArrowForwardIos} from '@mui/icons-material';
const Slider = ({ Sliders }:{Sliders:Islider[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? Sliders.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === Sliders.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div>
      <SliderContineer>
      <SlideImage src={Sliders[currentIndex].attributes.image} alt="Slider Image" />
      <Slide>
      <Typography color={'white'}>{Sliders[currentIndex].attributes.title} </Typography>
      <Typography color='white'>{Sliders[currentIndex].attributes.description}</Typography>
      <Typography color='white'>{Sliders[currentIndex].attributes.courseHours}</Typography>
      </Slide>
      <MoveBtnContineer>
        
      <ArrowBackIos onClick={goToPrevious}>Previous</ArrowBackIos>
      <ArrowForwardIos onClick={goToNext}>Next</ArrowForwardIos>
      </MoveBtnContineer>
      
      </SliderContineer>

    </div>
  );
};

export default Slider;