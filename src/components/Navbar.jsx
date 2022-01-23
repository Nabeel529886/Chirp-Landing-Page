import React, { useState } from 'react'
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container'
import TwitterBtn from '../widgets/TwitterBtn'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavLink from '../widgets/NavLinks'
import Drawer from '@mui/material/Drawer'


function Navbar() {
    const [toggle, setToggle] = useState(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const toggleDrawer = () => {
        setToggle(!toggle)
    }
    return (
        <Box sx={{ flexGrow: 1 }} onClick={toggleDrawer}>
            <AppBar position="static" sx={{ background: "#fbf8f3", boxShadow: "none" }}>
                <Container fixed>
                <Toolbar sx={{ paddingY: 2, paddingX: 0 }} disableGutters>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#1da1f2", fontWeight: 700, fontStyle: "italic" }}>
                    Chirp.
                </Typography>
                {
                    matches ?
                    <Box sx={{  '& > :not(style) + :not(style)': {
                     ml: 4  ,
                    }}}>
                        <NavLink>Home</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>FAQ</NavLink>
                        <TwitterBtn />
                    </Box>
                    :
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ color: "black" }}
                    >
                        <MenuIcon sx={{ width: "2.2rem", height: "2.2rem"}}/>
                    </IconButton>
                }
                </Toolbar>
                </Container>
            </AppBar>
            <Drawer
            anchor={'right'}
            open={toggle && !matches}
            onClose={toggleDrawer}
          >
            {
                    !matches ?
                    <Box sx={{
                        p: 6,
                        marginY: 'auto' 
                    }}>
                        <NavLink>Home</NavLink>
                        <NavLink>Pricing</NavLink>
                        <NavLink>FAQ</NavLink>
                        <TwitterBtn />
                    </Box>
                    :
                    null
                }
          </Drawer>
        </Box>
    )
}

export default Navbar
