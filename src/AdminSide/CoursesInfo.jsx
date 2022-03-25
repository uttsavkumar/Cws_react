import React, { useState,useEffect } from 'react'
import { db, store } from '../firbase_config'
import { Paper, TextField, Box } from '@mui/material'
import Navbar from './Navbar'
import { Button } from '@mui/material'
import { ref, push, set } from 'firebase/database'
import { ref as refFile, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import SideDrawer from './SideDrawer'
import { Link, useNavigate } from 'react-router-dom'
const CoursesInfo = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [dprice, setDprice] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [prog, setProg] = useState(0)

    const reset = () => {
        setTitle('')
        setPrice('')
        setDprice('')
        setImage('')
        setDesc('')
    }


    const uploadImage = (file) => {
        if (!file) return;

        const ref = refFile(store, `/Course/${file.name}`)
        const image = uploadBytesResumable(ref, file)

        image.on('state_changed', snapshot => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProg(prog)
        }, (error) => console.log(error), () => {
            getDownloadURL(image.snapshot.ref).then((url) => setImage(url));

        })
    }
    const handleImage = (e) => {
        e.preventDefault()
        const image = e.target[0].files[0]
        console.log(image)
        uploadImage(image)
    }
    const nav = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        const course = push(ref(db, 'course'))

        const data = set(course, {
            title: title,
            price: price,
            dprice: dprice,
            desc: desc,
            image: image,
        })
        reset('')
        nav('/admin/coursePage')
    }
  
    useEffect(() => {
        var userData = localStorage.getItem('userData')

        if(userData){
            nav('/courseInfo')
        }
        if(!userData){
            nav('/login')
        }
    },[])
    return (
        <div>
          
                <>
                    <Navbar />
                    <Box display='flex'>
                        <Box><SideDrawer /></Box>
                        <Box>
                            <Paper sx={{ mt: 5, ml: 5,p:5 }}>
                                <TextField id="outlined-basic" fullWidth label="Course Title" value={title} onChange={e => setTitle(e.target.value)} variant="outlined" sx={{ mt: 2 }} /><br />
                                <TextField id="outlined-basic" fullWidth label="Course Price" value={price} onChange={e => setPrice(e.target.value)} variant="outlined" sx={{ mt: 2 }} /><br />
                                <TextField id="outlined-basic" fullWidth label="Course Discounted Price" value={dprice} onChange={e => setDprice(e.target.value)} variant="outlined" sx={{ mt: 2 }} /><br />
                                <TextField rows={6} multiline id="outlined-basic" fullWidth label="Course Description" value={desc} onChange={e => setDesc(e.target.value)} variant="outlined" sx={{ mt: 2 }} /><br />
                                <Paper
                                    variant="outlined"
                                    component="label"
                                    sx={{ mt: 2 }}
                                >
                                    <form action="" onSubmit={handleImage}>
                                        <input type="file" />
                                        <input type="submit" value='insert Image' />
                                    </form>
                                    <h4>Upolded({prog})%</h4>
                                </Paper>

                                <Button variant='contained' component="label" onClick={submitForm}>
                                    Insert
                                </Button>
                            </Paper>
                        </Box>
                    </Box>
                </> 
        </div>
    )
}

export default CoursesInfo