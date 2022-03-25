import React from 'react'
import Navbar from './Navbar'
import { Box, Button, Grid } from '@mui/material'
import SideDrawer from './SideDrawer'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import { IconButton } from '@mui/material';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { useEffect, useState } from 'react';
import { onValue, ref, remove, update } from 'firebase/database'
import { db } from '../firbase_config'
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';


const UserPage = () => {
    const [student, setStudent] = useState([])

    const nav = useNavigate()
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if (userData) {
            nav('/user')
        }
        if (!userData) {
            nav('/login')
        }
    }, [])
    useEffect(() => {
        let data = ref(db, 'students')
        onValue(data, (snapshot) => {
            let student = []
            snapshot.forEach((childSnapshot) => {
                var value = childSnapshot.val()
                value['key'] = childSnapshot.key
                student = [...student, value]
            })
            setStudent(student)
        })
    }, [])

    const handleDelete = (id) => {
        const data = remove(ref(db, `students/${id}`))
    }
    const handleCheck = (id) => {
        const dataRef = ref(db, `students/${id}`)
        update(dataRef, { status: 1 })

    }

    return (
        <div>

            <Navbar />
            <Box display="flex">
                <Grid container>
                    <Grid item={true} xs={2}>
                        <Box> <SideDrawer /> </Box>
                    </Grid>
                    <Grid item={true} xs={9}>
                        <Box>
                            <Box container>
                                <Link to='/user/userInfo' sx={{}}><Button variant="outlined" sx={{ float: 'right', mt: 2, mb: 2 }}>Add New Student<AddIcon /></Button></Link>
                            </Box>

                            <TableContainer component={Paper} sx={{ mt: 5, ml: 2 }} >
                                <Table aria-label="simple table" >
                                    <TableHead>
                                        <TableRow >
                                            <TableCell sx={{ fontSize: '18px' }}>Id</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Name</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Father's Name</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Mother's name</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Contact</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Education</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Gender</TableCell>
                                            <TableCell align="center" sx={{ fontSize: '18px' }}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {student.map((data, key) => (
                                            <TableRow key={key} >
                                                <TableCell component="th" scope="row">{key}</TableCell>
                                                <TableCell component="th" scope="row">{data.name}</TableCell>
                                                <TableCell component="th" scope="row">{data.father}</TableCell>
                                                <TableCell component="th" scope="row">{data.mother}</TableCell>
                                                <TableCell component="th" scope="row">{data.contact}</TableCell>
                                                <TableCell component="th" scope="row">{data.education}</TableCell>
                                                <TableCell component="th" scope="row">{data.gender}</TableCell>
                                                <TableCell component="th" scope="row">
                                                    <IconButton variant='outlined' size='small' color="error" onClick={() => handleDelete(data.key)}><DeleteForeverTwoToneIcon /></IconButton>
                                                    <Button variant='contained' onClick={() => handleCheck(data.key)} color={(data.status !== 1) ? "warning" : "success"} >{(data.status !== 1) ? "Pending" : "Approved"}</Button>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </div >
    )
}

export default UserPage