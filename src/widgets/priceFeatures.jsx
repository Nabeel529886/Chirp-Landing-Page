import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'


const PriceText = styled(Typography)((theme) => ({
    fontSize: 20,
    // color: '#777',
    margin: 0,
    padding: 0,
    lineHeight: 1.4
}))

export default function PriceFeatureText({children}){
    return (
        <Grid container sx={{ py: 1}}>
            <Grid item xs={1} sx={{ mr: 1.2}}>
                <CheckCircleIcon sx={{ fill: '#30d8af', width: 28, height: 28}}></CheckCircleIcon>
            </Grid>
            <Grid item xs={10.5}>
                <PriceText variant="p" component="p" color='text.secondary'>{children}</PriceText>
            </Grid>
        </Grid>
    )
}