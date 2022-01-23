import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import heroPicDesktop from '../Assets/Hero Image (Desktop View).png'
import heroPicTablet from '../Assets/Hero Image (Tablet View).png' 
import Button from '@mui/material/Button'
import TwitterBtn from '../widgets/TwitterBtn'
import {theme} from '../theme.js'
import {ThemeProvider} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { avatars } from '../data.js'

function HeadContent() {
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, background: "#fbf8f3", py: 4  }}>
            <Container fixed>
                <Grid container spacing={9} style={{ paddingX: "24px" }}>
                    <Grid item xs={12} md={8} sx={{ py: 0, mt: matches? 0: 4, order: matches? 1 : 0 }}>
                        <Typography variant="h3" component="h1" sx={{ fontWeight: 900, py: 1 }}>
                            Twitter analytics <br /> taken to a whole new <br /> level.
                        </Typography>
                        <Typography variant="p" component="p" sx={{ fontWeight: 700, color: "#999", py: 1 }}>
                            Chirp is a suite of Twitter analytics that will help you better understand your audience
                            , which tweets the like, and most importantly, when they are the most active on Twitter.
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <TwitterBtn />
                            <Button sx={{ ml: 2, color: "#1da1f2", textTransform: "capitalize", width: matches ? "100%": "auto", mt: matches ? 1: 0, fontSize: matches ? "16px" : "auto", fontWeight: matches ? "700" : "300" }}>Learn More <ArrowRightAltIcon sx={{ ml: 0.2 }} /></Button>
                        </Box>
                        <AvatarGroup max={9} sx={{ flexDirection: "row", mt: 2}}>
                            {
                                avatars.map((avatar, index) => (
                                    <Avatar src={avatar} key={index} sx={{ mr: "-25px", width: "56px", height: "56px"}} />
                                ))
                            }
                        </AvatarGroup>
                        <Typography variant="p" component="p" sx={{ fontWeight: 700, color: "#999", py: 2 }}>
                            Join <span style={{ color: "#1da1f2"}}>195</span> others who have analyzed their
                            followers and scheduled <span style={{ color: "#1da1f2"}}>1342 tweets!</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={tablet? heroPicTablet : heroPicDesktop } alt="Hero Banner" width="100%" height="550"/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </ThemeProvider>
    )
}

export default HeadContent
