import React, { ReactElement } from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { stringValue } from '../../../@types'
import { JsxElement } from 'typescript'

interface ICardContineer{
    imgOfCard:stringValue,
    childern:ReactElement
}
const CardContineer = ({imgOfCard,childern}:ICardContineer) => {
  return (
    <Card sx={{width:'30%'}}>

    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={imgOfCard}
        alt="name of course"
      />
      <CardContent>

       {childern}
        </CardContent>
        </CardActionArea>
        </Card>
  )
}

export default CardContineer;
