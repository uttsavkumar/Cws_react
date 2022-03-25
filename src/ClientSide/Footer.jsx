import { Box } from '@mui/system'
import React from 'react'
import { Grid, List, ListItem, ListItemButton, Typography } from '@mui/material';



function Footer() {
    return (
        <Box className  sx={{ mt:'60px',backgroundColor:' #0d6efd' ,p:"50px",color:'white' }}>
            <Grid container>
                <Grid item={true} md={4}>
                    <Typography variant='h4'>
                        CodeWithSadiQ
                    </Typography>
                </Grid>
               
                    <Grid container={true}>
                        <Grid item={true} md={8} lg={4}>
                            <List>
                                <Typography variant='h6' sx={{ ml:3 }}>Quick Links</Typography>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }}  ><ListItemButton>Home</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>About</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Project</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Workshops</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Hier us</ListItemButton></ListItem>
                            </List>
                        </Grid>
                        <Grid item={true} lg={4}>
                            <List>
                                <Typography variant='h6' sx={{ ml:4 }}>About Class</Typography>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>About Instructor</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Milestones</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Vision</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Community</ListItemButton></ListItem>
                               <ListItem sx={{ textDecoration:'underline',color:'#b7d4fe' }} ><ListItemButton>Our Team</ListItemButton></ListItem>
                            </List>
                        </Grid>
                        <Grid item={true} lg={4}>
                            <Typography variant='h6'>Location</Typography>
                            <Typography sx={{ mt: 3 ,color:'#b7d4fe'}} variant='subtitle2'>Ramavtar Market, Near Dog Hospital,Thana Chowk, Gandhinagar, Madhubani, Purnea - 854301</Typography>
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
    )
}

export default Footer