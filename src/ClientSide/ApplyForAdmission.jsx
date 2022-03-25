import React, { useState } from 'react'
import { Drawer, TextField, Paper, Button, Grid, Typography, Alert } from '@mui/material'
import { db } from '../firbase_config'
import { ref, push, set } from 'firebase/database'
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'




const AppplyForAdmission = () => {
    // const initialValue = {
    //     name: '',
    //     fatherName: '',
    //     motherName: '',
    //     contact: '',
    //     email: '',
    //     edu: '',
    //     dob: '',
    //     gender: '',
    //     address: '',
    //     status: 0,
    // }

    // const [values, setValues] = useState(initialValue)
    // const e => setName(e.target.value) = (e) => {
    //     const { name, value } = e.target
    //     setValues({
    //         ...values,
    //         [name]:value,
    //     })
    // }

    // console.log(values)

 
    const [name, setName] = useState('')
    const [mother, setMother] = useState('')
    const [father, setFather] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [education, setEdu] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')
    const [status, setStatus] = useState(0)
    const[alert,setAlert] = useState(false)

    const resetData = () => {
        setName('')
        setFather('')
        setMother('')
        setGender('')
        setEmail('')
        setEdu('')
        setContact('')
        setDob('')
        setAddress('')

    }



    const handleClick = (e) => {
        console.log('new')
        e.preventDefault()
        const data = push(ref(db,'students'))
        set(data,{
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
        }).then(() =>{
            setAlert(true)
            console.log('created')
        }).catch((error) => {
            console.log(error)
        })
        resetData()
    }
   
    return (
        <>
            <Header />
            <Box sx={{ ml: '20px' }}>
                <Grid container>
                    <Grid item={true} xs={12} >
                        <Box sx={{ padding: '45px', mb: -5 }}>
                            <Typography variant='h5'>Apply for Admission</Typography>
                        </Box>
                    </Grid>

                </Grid>

                <Grid container sx={{ pr: 2, pl: 2, }}>
                    <Grid item={true} sx={{ pr: 2, pl: 2 }} xs={12}>
                        <Paper variant="outlined" sx={{ mt: 2 }}>
                            <Box sx={{ padding: '15px' }}>
                               <TextField id="outlined-basic"   value={name}  fullWidth sx={{ mt: '10px' }} label="Name" name='name' variant="outlined" onChange={e => setName(e.target.value)} /><br />
                               
                               <Box display='flex'>
                                   <TextField id="outlined-basic" value={father}   sx={{ mt: '10px' }} label="FatherName" name="father" fullWidth variant="outlined" onChange={e => setFather(e.target.value)} /><br />
                                   <TextField id="outlined-basic" value={mother}   sx={{ mt: '10px', ml: 2 }} label="MotherName" name="mother" fullWidth variant="outlined" onChange={e => setMother(e.target.value)} /><br />
                               </Box>
                               <Box display='flex'>
                                   <TextField id="outlined-basic" value={contact}   sx={{ mt: '10px' }} label="conatct" name="contact" fullWidth variant="outlined" onChange={e => setContact(e.target.value)} /><br />
                                   <TextField id="outlined-basic" value={email}  sx={{ mt: '10px', ml: 2 }} label="email" fullWidth name="email" variant="outlined" onChange={e => setEmail(e.target.value)} /><br />
                               </Box>
                               <Box display="flex">
                                   <TextField id="outlined-basic" value={education}  sx={{ mt: '10px' }} label="education" fullWidth variant="outlined" name="education" onChange={e => setEdu(e.target.value)} /><br />

                                   <TextField
                                       value={dob}
                                       name="dob"
                                       
                                       sx={{ mt: '10px', ml: 2, mr: 2 }}
                                       fullWidth
                                       onChange={e => setDob(e.target.value)}
                                       type="date"
                                   />

                                   <FormControl fullWidth>
                                       <InputLabel id="demo-simple-select-label">gender</InputLabel>
                                       <Select
                                           labelId="demo-simple-select-label"
                                           id="demo-simple-select"
                                           onChange={e => setGender(e.target.value)}
                                           value={gender}
                                           label="Age"    
                                           name="gender"
                                           fullWidth
                                           sx={{ mt: '10px' }}

                                       >
                                           <MenuItem value={'male'}>Male</MenuItem>
                                           <MenuItem value={'female'}>Female</MenuItem> 
                                           <MenuItem value={'other'}>Other</MenuItem>
                                       </Select>
                                   </FormControl>
                               </Box>


                               <TextField rows={8}  fullWidth multiline id="outlined-basic" value={address} sx={{ mt: '10px' }} name="address" label="address" variant="outlined" onChange={e => setAddress(e.target.value)} /><br />

                               <Button variant='contained' fullWidth sx={{ mt: '15px',backgroundColor:'black','&:hover':{background:'#1e272e'},color:'white' }} onClick={handleClick}>Apply for Admission</Button>
                                {alert && <Alert severity="success" onClose={() => { setAlert(false)}} sx={{ mt:2 }} >Applied!</Alert>}
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Footer/>
        </>
    )
}

export default AppplyForAdmission