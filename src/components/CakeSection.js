import { Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stack, Grid } from '@mui/material/';

const CakeSection = () => {
    const cakes = [
        { name: "Chocolate", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
        { name: "Red Velvet", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80" },
        { name: "Rose", image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
        { name: "Butter Scotch", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1292&q=80" },
        { name: "Strawberry", image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80" },
        { name: "Mix fruit", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    ]
    return (
        <>
            <Typography variant="h4" mt={6} mb={6}>
                Cakes
            </Typography>
            <Grid container alignItems="center">
                {
                    cakes.map((cake) => {
                        return (
                            <Grid justifyContent="center" item xs={12} sm={4} alignItems={{ xs: "center" }} display={{ xs: "flex", sm: "block" }} >
                                <Card sx={{ maxWidth: 300, mb: 2 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={cake.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h5" >
                                            {cake.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default CakeSection