import { Box, Grid, Typography } from '@mui/material'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../firbase_config'
import Image from '../footer-bg.png'
import CourseCard from './CourseCard'
import Footer from './Footer'
import Header from './Header'
import StudentCard from './StudentCard'

const Content = () => {
  const[course,setCourse] = useState([])
  const[student,setStudent] = useState([])

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
  useEffect(() => {
    const std = ref(db,'achievement')
    onValue( std,(snapshot) => {
      let newData = []
      snapshot.forEach((childSnapshot) => {
        const value = childSnapshot.val()
        value['key'] = childSnapshot.key
        newData = [...newData,value]
      })
      setStudent(newData)
    })
  },[])
  return (
    <div>
      <Header />
      <Box>
        <Box>
          <Grid container>
            <Grid item={true} xs={12} >
              <Box sx={{ backgroundImage:`url(${Image})` }}>
                <Box sx={{ padding: {lg:'120px', xs:'100px'},fontWeight:'light' }}>
                  <Typography style={{ color:'white',fontSize:'70px',fontWeight:'light !important'}}>Skill Hai! To Future Hai!</Typography>
                  <Typography variant='p' sx={{ color:'white' }} >"CWS is an on-demand marketplace for top Programming engineers, developers, consultants,<br></br> architects, programmers, and tutors. Get your projects built by vetted web programming freelancers<br /> or learn from expert mentors with team training & coaching experiences in Project based training."</Typography>
                </Box>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L60,250.7C120,245,240,235,360,234.7C480,235,600,245,720,250.7C840,256,960,256,1080,213.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
              </Box>
            </Grid>
          </Grid>
          {/* Courses */}
          <Grid container>
            <Grid item={true} xs={12} >
              <Box sx={{ padding: '45px', ml: '15px',mb:-5}}>
                <Typography variant='h5' sx={{ borderLeft:"5px solid black",ml:'5px',pl:2 }}>Our courses</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ pl:"60px",pr:'60px'}} >
           {course.map((data,key) =>(
              <Grid item={true} lg={2} xs={12} sm={4} md={3} >
              <Box sx={{ pr: 2,mt:3 }}>
                <CourseCard key={key} title={data.title} price={data.price} dprice={data.dprice} image={data.image} />
              </Box>
            </Grid>
           ))}
            
          </Grid>
          {/* achievement */}
          <Grid container>
            <Grid item={true} xs={12} >
              <Box sx={{ padding: '45px', ml: '15px',mb:-5}}>
                <Typography variant='h5'  sx={{ borderLeft:"5px solid black",ml:'5px',pl:2 }}>Student's Achievment</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={{ pl:"60px",pr:'60px'}} >
           {student.map((data,key) => (
              <Grid item={true} lg={2} xs={12} sm={4} md={3} >
              <Box sx={{ pr: 2,mt:3 }}>
                < StudentCard key={key} name={data.name} company={data.company} developer={data.developer} image={data.image}/>
              </Box>
            </Grid> 
           ))} 
          </Grid>
          {/* Footer */}
          <Footer/>

        </Box>
      </Box>
    </div>
  )
}

export default Content