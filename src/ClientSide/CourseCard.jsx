import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';

export default function CourseCard(props) {
  return (
    <Card sx={{ maxWidth: 345,boxShadow: 3 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign:'center' }}>
            {props.title}
          </Typography>
         
          <Divider/>
          <Typography variant="body2" color="text.dark" sx={{ textAlign:'center',mt:1 }}>
            Duration : 2 Months
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
