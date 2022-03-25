import React, { useState, useEffect } from 'react'
import { db, store } from '../firbase_config'
import { Paper, TextField, Box } from '@mui/material'
import Navbar from './Navbar'
import { Button } from '@mui/material'
import { ref, push, set, onValue, remove } from 'firebase/database'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { IconButton } from '@mui/material';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { ref as refFile, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import SideDrawer from './SideDrawer'
import { Link, useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const AdminAchievment = () => {


const[achiev,setAchiev] = useState([])
    useEffect(() => {
        let data = ref(db,'achievement')
        onValue(data,(snapshot)=>{
            var value = []
            snapshot.forEach( (childSnapshot) => {
                let call = childSnapshot.val()
                call['key'] = childSnapshot.key
                value = [...value,call] 
            })
            setAchiev(value)
        })
    },[])
    const nav = useNavigate()
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if (userData) {
            nav('/admin/achievment')
        }
        if (!userData) {
            nav('/login')
        }
    }, [])
    const handleDelete = (id) => {
        const rem = remove(ref(db,`achievement/${id}`))
    }
    return (
        <div>
            <Navbar />
            <Box display='flex'>
                <Box><SideDrawer /></Box>
                <Box>
                    <Box container>
                        <Link to='/admin/achievmentInsert'><Button variant="outlined" sx={{ float: 'right', mt: 2, mb: 2 }}>Add Achievement</Button></Link>
                    </Box>
                    <TableContainer component={Paper} sx={{ mt: 5, ml: 2 }} >
                        <Table aria-label="simple table" >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{ fontSize: '18px' }}>Id</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>name</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Developer</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Company</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Image</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '18px' }}>Action</TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {achiev.map((info,key)=>(
                                      <TableRow key={key}>
                                      <TableCell component="th" scope="row">{key}</TableCell>
                                      <TableCell component="th" scope="row">{info.name}</TableCell>
                                      <TableCell component="th" scope="row">{info.developer}</TableCell>
                                      <TableCell component="th" scope="row">{info.company}</TableCell>
                                      <TableCell component="th" scope="row"><img height='100px' src={info.image}></img></TableCell>
                                      <TableCell component="th" scope="row">
                                          <IconButton variant='outlined' size='small' color="error" onClick={() => handleDelete(info.key)}><DeleteForeverTwoToneIcon /></IconButton>
                                          <IconButton variant='outlined' size='small' color="primary" ><EditTwoToneIcon/></IconButton>

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

export default AdminAchievment