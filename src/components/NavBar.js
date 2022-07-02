import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const NavBar = () => {
    return (
        <AppBar position='static' color="primary">
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    BlissFull Bytes
                </Typography>
                <Button variant="text" color='inherit' startIcon={<LoginIcon />}>
                    Login
                </Button>
                <Button variant="text" color='inherit' endIcon={<LogoutIcon />}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar