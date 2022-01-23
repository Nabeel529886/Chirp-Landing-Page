import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import TwitterIcon from '@mui/icons-material/Twitter';


const TwitterButton = styled(Button)(({theme}) => ({
    backgroundColor: "#1da1f2",
    color: "white",
    textTransform: "capitalize",
    boxShadow: "none",

    [theme.breakpoints.down('md')]: {
        width: "100%",
        padding: "15px",
        fontSize: "16px",
        fontWeight: 700
    }
}))

export default function TwitterBtn(){
    return <TwitterButton variant="contained"><TwitterIcon sx={{ mr: 0.5 }}/>Sign in with Twitter</TwitterButton>
}