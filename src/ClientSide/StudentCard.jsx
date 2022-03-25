import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function StudentCard(props) {
  return (
    <Card sx={{ maxWidth: 345,boxShadow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={props.image}
          alt="green iguana"
        />
        <CardContent sx={{ p:4 }}>
          <Typography gutterBottom variant="h5" sx={{ textAlign:'center' }} >
            {props.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign:'center',mt:-1 }}>
           {props.developer}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign:'center',fontSize:'12px' }}>
           {"@ "+props.company}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
