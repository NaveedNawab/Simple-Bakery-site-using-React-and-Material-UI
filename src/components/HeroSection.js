import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/material';
import imgFile from '../images/cake.png'

const HeroSection = () => {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography variant="h3" color="inherit">
                    A bliss in every byte
                </Typography>
                <Typography variant="h5" color="inherit">
                    We offer tasty sweets and cakes for you!
                </Typography>
                <Button variant='contained' size='large' sx={{ borderRadius: 5, mt: 5 }}>
                    Call Us
                </Button>
            </Grid>
            <Grid order={{ xs: 1, sm: 2 }} container item xs={12} sm={6} justifyContent="center" >
                <Box component="img" overflow= "hidden" src={imgFile} />
            </Grid>
        </Grid>
    )
}

export default HeroSection