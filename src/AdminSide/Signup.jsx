import { Card, CardContent, Typography, Paper, TextField,Button } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { auth } from '../firbase_config';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPassword({
            ...password,
            showPassword: !password.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const nav = useNavigate()
    const handleClick = () => {
        const res = createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const user = userCredential.user
            console.log(user)
            
        })
       
        nav('/login')
        
    }
    return (
        <div>
            <Box>
                <Paper sx={{ width: '400px', mx: 'auto' }}>
                    <Card variant='outline'>
                        <CardContent >
                            <Box display="inline">
                                <Typography variant="h5" sx={{ mt: 1,mx:'auto' }}>Signup</Typography>
                            </Box>
                            <Box>
                                <TextField id="Email" label="Email" onChange={e => setEmail(e.target.value)} variant="outlined" sx={{ mt:3 }} fullWidth />
                            </Box>
                            <Box>
                            <TextField id="Email" label="Password" onChange={e => setPassword(e.target.value)} variant="outlined" sx={{ mt:3 }} fullWidth />

                                {/* <form action=""> */}
                                {/* <FormControl sx={{ mt:2 }} variant="outlined"  fullWidth >
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={password.showPassword ? 'text' : 'password'}
                                        value={password.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                </form> */}
                                <Button variant="outlined" sx={{ mt:3 }} onClick={handleClick} fullWidth>Signup</Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Paper>
            </Box>
        </div>
    )
}

export default Signup