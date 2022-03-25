import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from './Header'
import logo from '../logo'
import CourseCard from './CourseCard'
import StudentCard from './StudentCard'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const CouserPageCard = (props) => {
    return (
        <div>
            <Box sx={{ pr: 2, mt: 3 }}>
                <Card sx={{ display: 'flex' }} >
                    <Grid container>
                        <Grid item={true} sm={8} xs={12}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h4"  >
                                    {props.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {props.desc}                           
                                 </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item={true} xs={4} sm={4}>
                            <Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 251 }}
                                    src={props.image}
                                    alt="Live from space album cover"
                                />
                            </Box>
                        </Grid>
                        <Grid item={true} xs={12} >
                            <Box display='flex'>
                                <Typography component="div" variant="p" sx={{ ml: 2, fontWeight: '600' }}>
                                    Course Fee:<Typography variant="subtitle1" color='text.secondary'>{"Rs. "+props.price}</Typography>
                                </Typography>
                                <Typography component="div" variant="p" sx={{ ml: 2, fontWeight: '600' }}>
                                    Duration:<Typography variant="subtitle1" color='text.secondary'>3 month</Typography>
                                </Typography>
                                <Typography component="div" variant="p" sx={{ ml: 2, fontWeight: '600' }}>
                                    Instructor:<Typography variant="subtitle1" color='text.secondary'>new</Typography>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Card>
            </Box>
        </div>
    )
}

export default CouserPageCard