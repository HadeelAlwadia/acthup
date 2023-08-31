import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { SliderData } from '../../../@types';
import { MoveBtn, MoveBtnContineer, Slide, SlideImage ,SliderContineer} from './Slider.style';
const Slider = ({ sliders }:{sliders:SliderData[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? sliders.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === sliders.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div key={String(sliders[currentIndex].attributes.id)}>
      <SliderContineer>
      <SlideImage src={sliders[currentIndex].attributes.image} alt="Slider Image" />
      <Slide>
      <Typography color={'white'}>{sliders[currentIndex].attributes.title} </Typography>
      <Typography color='white'>{sliders[currentIndex].attributes.description}</Typography>
      <Typography color='white'>{sliders[currentIndex].attributes.courseHours}</Typography>
      <MoveBtnContineer>
        
      <MoveBtn onClick={goToPrevious}></MoveBtn>
      <MoveBtn onClick={goToPrevious}></MoveBtn>
      <MoveBtn onClick={goToNext}></MoveBtn>
      </MoveBtnContineer>
      </Slide>

      
      </SliderContineer>

    </div>
  );
};

export default Slider;