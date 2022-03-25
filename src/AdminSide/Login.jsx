import { Card, CardContent, Typography, Paper, TextField, Button, Alert } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { auth } from '../firbase_config';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [values, setValues] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const nav = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, values).then((userCredential) => {
            const user = userCredential.user
            localStorage.setItem('userData', user)
            console.log(user.email)
            nav('/admin')
        }).catch((error) =>  { 
            setError(true)
            console.log(error) 
        });

    }
    // Sign In with google
    // const handleGoogle = () => {
    //     const login = new GoogleAuthProvider()
    //     signInWithPopup(auth,login).then((result) => {
    //         const credential = GoogleAuthProvider.credentialFromResult(result)
    //         const token = credential.accessToken
    //         const user = result.user
    //         localStorage.setItem('userData',user)
    //         nav('/admin')
    //     })
    // }
    return (
        <div>
            <Box>
                <Paper sx={{ width: '400px', mx: 'auto',mt:5 }}>
                    <Card variant='outline'>
                        <CardContent >
                            <Box display="inline">
                                <Typography variant="h5" sx={{ mt: 1, mx: 'auto' }}>Admin Login</Typography>
                            </Box>
                            <Box>
                                <TextField label="Email" onChange={e => setEmail(e.target.value)} variant="outlined" sx={{ mt: 3 }} fullWidth />
                            </Box>
                            <Box>
                                <TextField label="Password" type="password" onChange={e => setValues(e.target.value)} variant="outlined" sx={{ mt: 3 }} fullWidth />
                                <Button variant="outlined" onClick={handleClick} sx={{ mt: 3 }} fullWidth>Login</Button>
                                {error && <Alert severity="error" sx={{ mt:2 }}>Enter correct email or password!</Alert>}
                            </Box>
                            {/* <Typography sx={{ textAlign:'center',mt:2}}>Or</Typography>
                            <Box>
                                <Button onClick={handleGoogle}>Sign in With google</Button>
                            </Box> */}
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        </div>
    )
}

export default Login