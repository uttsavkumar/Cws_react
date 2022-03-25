import React, { useState, useEffect } from 'react'
import { Drawer, TextField, Paper, Button } from '@mui/material'
import { db } from '../firbase_config'
import { ref, push, set } from 'firebase/database'
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material'
import Navbar from './Navbar'
import SideDrawer from './SideDrawer'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'

const UserInfo = () => {

    const [name, setName] = useState('')
    const [mother, setMother] = useState('')
    const [father, setFather] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEducation] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState('')
    const [data, setData] = useState('')
    console.log(dob)
    const resetData = () => {
        setName('')
        setFather('')
        setMother('')
        setGender('')
        setEmail('')
        setEducation('')
        setContact('')
        setDob('')
        setAddress('')

    }
    const nav = useNavigate()
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if (userData) {
            nav('/user/userInfo')
        }
        if (!userData) {
            nav('/login')
        }
    }, [])
    const handleForm = () => {

        let formData = push(ref(db, 'students'))

        set(formData, {
            name: name,
            mother: mother,
            father: father,
            contact: contact,
            email: email,
            education: education,
            gender: gender,
            dob: dob,
            address: address,
            status: status,
        })
        resetData()
        nav('/user')
    }
    return (
        <>

            <Navbar />
            <Box display='flex'>
                <Box>
                    <SideDrawer />
                </Box>
                <Box sx={{ ml: '20px' }}>
                    <Paper variant="outlined" sx={{ width: '980px', mt: 2 }}>
                        <Box sx={{ padding: '15px' }}>
                            <TextField id="outlined-basic" value={name} onChange={e => setName(e.target.value)} fullWidth sx={{ mt: '10px' }} label="Name" variant="outlined" /><br />
                            <Box display='flex'>
                                <TextField id="outlined-basic" value={mother} fullWidth onChange={e => setMother(e.target.value)} sx={{ mt: '10px' }} label="FatherName" variant="outlined" /><br />
                                <TextField id="outlined-basic" value={father} fullWidth onChange={e => setFather(e.target.value)} sx={{ mt: '10px', ml: 2 }} label="MotherName" variant="outlined" /><br />
                            </Box>
                            <Box display='flex'>
                                <TextField id="outlined-basic" value={contact} fullWidth onChange={e => setContact(e.target.value)} sx={{ mt: '10px' }} label="conatct" variant="outlined" /><br />
                                <TextField id="outlined-basic" value={email} fullWidth onChange={e => setEmail(e.target.value)} sx={{ mt: '10px', ml: 2 }} label="email" variant="outlined" /><br />
                            </Box>
                            <Box display="flex">
                                <TextField id="outlined-basic" value={education} fullWidth onChange={e => setEducation(e.target.value)} sx={{ mt: '10px' }} label="edu" variant="outlined" /><br />
                                <TextField

                                    type='date'
                                    value={dob}
                                    onChange={e => setDob(e.target.value)}
                                    fullWidth
                                    sx={{ mt: '10px', ml: 2, mr: 2 }}
                                />
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Age"
                                        fullWidth
                                        sx={{ mt: '10px' }}
                                        onChange={e => setGender(e.target.value)}
                                    >
                                        <MenuItem value={'male'}>Male</MenuItem>
                                        <MenuItem value={'female'}>Female</MenuItem>
                                        <MenuItem value={'other'}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>


                            <TextField rows={8} maxRows={8} fullWidth multiline id="outlined-basic" value={address} onChange={e => setAddress(e.target.value)} sx={{ mt: '10px' }} label="address" variant="outlined" /><br />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    sx={{ mt: '10px' }}
                                    label="Status"
                                    onChange={e => setStatus(e.target.value)}
                                >
                                    <MenuItem value={1}>Approved</MenuItem>
                                    <MenuItem value={0}>Not approved</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant='contained' fullWidth sx={{ mt: '15px' }} onClick={() => handleForm()}>Submit</Button>
                        </Box>

                    </Paper>
                </Box>
            </Box>

        </>
    )
}

export default UserInfo