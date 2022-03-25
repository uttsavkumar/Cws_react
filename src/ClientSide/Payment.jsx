import React from 'react'
import Header from './Header'
import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, Typography, Card, CardContent,TextField, Button } from '@mui/material'
import { InputAdornment } from '@mui/material';
import Footer from './Footer';

const Payment = () => {
    return (
        <div>
            <Header />
            <Box sx={{ p:5,mt:3}}>
            <Grid container>
                <Grid item={true} xs={12} >
                    <Card sx={{ display: 'flex' }}>
                        <CardContent sx={{ flex: '1 0 auto'  }}>
                            <Typography component="div" sx={{ fontSize:'20px' }} color="text.secondary" >
                               Pay Outstanding Fee
                            </Typography>
                            <TextField id="outlined-basic" label="Enter Phone no." type="number" fullWidth sx={{ mt:1, }} size="small" variant="outlined"
                             InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end" >
                                   <Button variant='contained' sx={{ mr:'-13px',height:'40px',backgroundColor:'black','&:hover':{background:'#1e272e'} }}><SearchIcon/></Button>
                                  </InputAdornment>
                                ),
                              }}
                           /> 
                            <Typography component="p" variant="p" color="text.secondary" sx={{ mt:1 }} >
                            Enter registered no.
                            </Typography>
                        </CardContent>

                    </Card>

                </Grid>
            </Grid>
            </Box>
            <Footer/>
        </div>
    )
}

export default Payment