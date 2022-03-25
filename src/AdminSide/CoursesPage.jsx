import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Box, Button } from '@mui/material'
import SideDrawer from './SideDrawer'
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { onValue, ref, remove } from 'firebase/database'
import { db } from '../firbase_config'
import { useNavigate } from 'react-router-dom'

const CoursesPage = () => {
    const [course, setCourse] = useState([])

    useEffect(() => {
        let data = ref(db, "course")
        onValue(data, (snapshot) => {
            let course = []
            snapshot.forEach((childSnapshot) => {
                var value = childSnapshot.val()
                value['key'] = childSnapshot.key
                course = [...course, value]
            })
            setCourse(course)
        })
    }, [])
    const nav = useNavigate()
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if (userData) {
            nav('/admin/coursePage')
        }
        if (!userData) {
            nav('/login')
        }
    }, [])
    const handleDelete = (id) => {
         const data = remove(ref(db,`course/${id}`))
    }
    const handleEdit = () => {
      
    }
    return (
        <div>

            <Navbar />
            <Box display="flex">
                <Box> <SideDrawer /> </Box>
                <Box>
                    <Box container>
                        <Link to='/courseInfo' sx={{}}><Button variant="outlined" sx={{ float: 'right', mt: 2, mb: 2 }}>Add New Courses</Button></Link>
                    </Box>
                    <TableContainer component={Paper} sx={{ mt: 5, ml: 2 }} >
                        <Table aria-label="simple table" >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ fontSize: '18px' }}>Id</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Title</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Price</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Discounted Price</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Image</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {course.map((data, key) => (
                                    <TableRow key={key}>
                                        <TableCell component="th" scope="row">{key}</TableCell>
                                        <TableCell component="th" scope="row">{data.title}</TableCell>
                                        <TableCell component="th" scope="row">{data.price}</TableCell>
                                        <TableCell component="th" scope="row">{data.dprice}</TableCell>
                                        <TableCell component="th" scope="row"><img height='100px' src={data.image}></img></TableCell>
                                        <TableCell component="th" scope="row">
                                            <IconButton variant='outlined' size='small' color="error" onClick={() => handleDelete(data.key)}><DeleteForeverTwoToneIcon /></IconButton>
                                            <IconButton variant='outlined' size='small' color="primary" onClick={() => handleEdit(data.key)}><EditTwoToneIcon/></IconButton>

                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>


        </div>
    )
}

export default CoursesPage