import React from 'react'
import {Box,Button} from '@mui/material'
import SideDrawer from './SideDrawer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const AdminPayment = () => {
  return (
    <div>
      
      <Navbar/>
            <Box display="flex">
                <Box> <SideDrawer/> </Box>
                <Box>
                    <Box container>
                      {/* Payment code */}
                    </Box>
                   

                </Box>
            </Box>

    </div>
  )
}

export default AdminPayment