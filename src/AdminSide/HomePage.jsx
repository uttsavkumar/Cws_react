import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect} from 'react'
import Navbar from './Navbar'
import SideDrawer from './SideDrawer'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
    const nav = useNavigate()
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if(userData){
            nav('/admin')
        }
        if(!userData){
            nav('/login')
        }
    },[])
    return (
        <div>
        
           <>
            <Navbar />
              <Box display="flex">
                <Box> <SideDrawer /> </Box>
                <Box>
                    <Grid display='flex'>
                        <Grid item={true} xs={3}>
                            <Card sx={{ minWidth: 260, mt: '90px', ml: '20px' }}>
                                <CardContent>

                                    <Typography variant="h4" component="div">
                                        Total Students
                                    </Typography>
                                    <Typography variant="h6" component="div" color="text.secondary">
                                        100+
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Student's info</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <Card sx={{ minWidth: 260, mt: '90px', ml: '20px' }}>
                                <CardContent>

                                    <Typography variant="h4" component="div">
                                        Total Courses
                                    </Typography>
                                    <Typography variant="h6" component="div" color="text.secondary">
                                        100+
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small">Student's info</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
           </>

        </div>
    )
}

export default HomePage