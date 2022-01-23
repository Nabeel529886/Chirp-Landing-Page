import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { features } from '../data.js'


function Features() {
    // console.log(features)
    return (
        <Container sx={{ mt: 4, mb: 4}}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>Features that helps you <br /> Tweet smarter</Typography>
            <Grid container gap={2} sx={{ mt: 4 }}>
                {
                    features.map(feature => (
                        <Grid item xs={12} md={5.8} lg={5.8} key={feature.id}>
                            <Card elevation={0} sx={{ maxWidth: 600, border: '1px solid #e0e0e0' }} >
                                <img src={feature.iconUrl} width='50' height='50' style={{ paddingTop: '12px', paddingLeft: '12px', marginTop: '8px'}}/>
                                <CardContent sx={{ px: 2.5}}>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {feature.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Features
