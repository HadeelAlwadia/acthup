import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Icourse } from '../../@types'
import { Item } from './course.style'


const Course = ({course}:{course:Icourse}) => {
  return (
    <>
   <Item>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={course.attributes.avatar}
          alt="name of course"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course.attributes.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {course.attributes.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {course.attributes.hours}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <a href={`/courses/${course.id}`}>view more</a>
      </CardActions>
    </Item>    </>
  )
}

export default Course


