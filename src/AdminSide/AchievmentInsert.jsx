import React, { useState,useEffect } from 'react'
import { db, store } from '../firbase_config'
import { Paper, TextField, Box } from '@mui/material'
import Navbar from './Navbar'
import { Button } from '@mui/material'
import { ref, push, set } from 'firebase/database'
import { ref as refFile, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import SideDrawer from './SideDrawer'
import { Link, useNavigate } from 'react-router-dom'

const AchievmentInsert = () => {
    const[name,setName] = useState('')
    const[company,setCompany] = useState('')
    const[developer,setDeveloper] = useState('')
    const[image,setImage] = useState('')
    const[prog,setProg] = useState(0)

    const nav = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        const course = push(ref(db, 'achievement'))

        const data = set(course, {
            name: name,
            developer: developer,
            company: company,
            image: image,
        })
       
        nav('/admin/achievment')
    }
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if (userData) {
            nav('/admin/achievmentInsert')
        }
        if (!userData) {
            nav('/login')
        }
    }, [])
    const uploadImage = (file) => {
        if(!file) return;

        const ref = refFile(store,`/Student/${file.name}`)

        const image = uploadBytesResumable(ref,file)
        image.on('state_changed',snapshot => {
            const prog = Math.round(snapshot.bytesTransferred/snapshot.totalBytes * 100)
            setProg(prog)
        },error => console.log(error), () => {
            getDownloadURL(image.snapshot.ref).then(
                (url) => setImage(url)
            )
        })
    }
    const handleImage = (e) => {
        e.preventDefault()
        const image = e.target[0].files[0]
        uploadImage(image)
        console.log(image)
    }

  return (
    <div>
          <Navbar />
                    <Box display='flex'>
                        <Box><SideDrawer /></Box>
                        <Box>
                            <Paper sx={{ mt: 5, ml: 5,p:5 }}>
                                <TextField id="outlined-basic" fullWidth  value={name} onChange={ e => setName(e.target.value)} label="Student Name"  variant="outlined" sx={{ mt: 2 }} /><br />
                                <TextField id="outlined-basic" fullWidth  value={developer} onChange={e => setDeveloper(e.target.value)} label="Developer" variant="outlined" sx={{ mt: 2 }} /><br />
                                <TextField id="outlined-basic" fullWidth  value={company} onChange={e => setCompany(e.target.value)} label="Company name" variant="outlined" sx={{ mt: 2 }} /><br />
                                
                                <Paper
                                    variant="outlined"
                                    component="label"
                                    sx={{ mt: 2 }}
                                >
                                    <form action="" onSubmit={handleImage} >
                                        <input type="file"  />
                                        <input type="submit" value='insert Image' />
                                    </form>
                                    <h4>Upolded {prog}%</h4>
                                </Paper>

                                <Button variant='contained' component="label" onClick={submitForm}>
                                    Insert
                                </Button>
                            </Paper>
                        </Box>
                    </Box>
    </div>
  )
}

export default AchievmentInsert