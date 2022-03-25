import { Box, Grid, Typography } from '@mui/material'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../firbase_config'
import CouserPageCard from './CouserPageCard'
import Footer from './Footer'
import Header from './Header'

const CoursePage = () => {
    const[course,setCourse] = useState([])
    useEffect(() => {
      const data = ref(db,'course')
      onValue( data,(snapshot) => {
        let course = []
        snapshot.forEach((childSnapshot) => {
          const value = childSnapshot.val()
          value['key'] = childSnapshot.key
          course = [...course,value]
        })
        setCourse(course)
      })
    },[])
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item={true} xs={12} >
                    <Box sx={{ padding: '45px', ml: '30px', mb: -5 }}>
                        <Box >
                        <Typography variant='h4'  sx={{ borderBottom:'3px solid #0d6efd',width:'203px',borderRadius:'8px' }}>Our Course's</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container sx={{ pl: "60px", pr: '60px' }} >
                {course.map((data,key) =>(
                    <Grid item={true} lg={12} xs={12} sm={12} md={12} >
                    <CouserPageCard key={key} title={data.title} price={data.price} dprice={data.dprice} image={data.image} desc={data.desc}/>
                  </Grid>
                ))}
            </Grid>
            <Footer/>
        </div>
    )
}

export default CoursePage