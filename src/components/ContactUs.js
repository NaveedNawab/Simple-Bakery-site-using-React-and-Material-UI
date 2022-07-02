import { TextField, Typography, Box, Button } from '@mui/material'
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <Typography variant="h4" mt={6} mb={6}>
                Contact Us
            </Typography>
            <Box component="form">
                <TextField
                    label="First Name"
                    type="text"
                    variant="outlined"
                    sx={{ width: 300, m: 1 }}
                />
                <TextField
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    sx={{ width: 300, m: 1 }}
                />
                <TextField
                    label="Phone Number"
                    type="number"
                    variant="outlined"
                    sx={{ width: 300, m: 1 }}
                />
                <TextField
                    label="Message"
                    type="text"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{ m: 1 }}
                    fullWidth
                />
                <Button size="large" type="submit" variant="contained" sx={{ m: 1 }}> Send</Button>
            </Box>
        </>
    )
}

export default ContactUs